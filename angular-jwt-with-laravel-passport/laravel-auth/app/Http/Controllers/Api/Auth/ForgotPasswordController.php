<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Str;
use Symfony\Component\HttpFoundation\Response;

class ForgotPasswordController extends Controller
{
    public function forgot(Request $req)
    {
        $this->validate($req, ['email' => 'required|email']);
        $email = $req->email;
        if (User::where('email', $email)->doesntExist()) {
            return response(['message' => 'Email does not exists.'], Response::HTTP_NOT_FOUND);
        }
        $token = Str::random(10);
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => now()->addHours(6)
        ]);

        // Send Mail
        Mail::send('mail.password_reset', ['token' => $token], function ($message) use ($email) {
            $message->to($email);
            $message->subject('Reset yout password');
        });

        return response(['message' => 'Check your email.']);
    }

    public function reset(Request $req)
    {
        $this->validate($req, [
            'token' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);
        $token = $req->token;

        $passReset = DB::table('password_resets')->where('token', $token)->first();
        if (!$passReset) return response(['message' => 'Token not found.']);
        if (!($passReset->created_at >= now())) {
            DB::table('password_resets')->whereDate('created_at', '<', now())->delete();
            return response(['message' => 'Token has expired.']);
        }
        $user = User::where('email', $passReset->email)->first();
        DB::table('password_resets')->where('token', $token)->delete();
        if(!$user) return response(['message' => 'User does not exist.']);
        $user->password = Hash::make($req->password);
        $user->save();
        return response(['message' => 'Password updated.']);
    }
}
