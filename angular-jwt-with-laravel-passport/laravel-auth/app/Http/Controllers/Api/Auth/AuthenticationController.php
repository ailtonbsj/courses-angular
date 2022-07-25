<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthenticationController extends Controller
{
    public function login(Request $req)
    {
        $this->validate($req, [
            'email' => 'required|max:255',
            'password' => 'required'
        ]);

        $login = $req->only('email', 'password');

        if (!Auth::attempt($login)) {
            return response(
                ['message' => 'Invalid login credential.'],
                Response::HTTP_UNAUTHORIZED
            );
        }
        $user = Auth::user();
        $token = $user->createToken($user->name);

        return response([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
            'token' => $token->accessToken,
            'token_expires_at' => $token->token->expires_at,
        ]);
    }

    public function logout(Request $req)
    {
        $this->validate($req, ['allDevices' => 'required|boolean']);
        $user = Auth::user();
        if ($req->allDevices) {
            $user->tokens->each(function ($token) {
                $token->delete();
            });
            return response(['message' => 'Logout from all devices.']);
        }
        $userToken = $user->token();
        $userToken->delete();
        return response(['messafe' => 'Logout Successful.']);
    }

    public function register(Request $req)
    {
        $this->validate($req, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);
        $user = User::create([
            'name' => $req->name,
            'email' => $req->email,
            'password' => Hash::make($req->password),
        ]);
        return response(
            ['message' => 'User successfully register']
        );
    }
}
