<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'token' =>$token->accessToken,
            'token_expires_at' => $token->token->expires_at,
        ]);
    }
}
