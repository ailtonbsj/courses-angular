<?php

use App\Http\Controllers\Api\Auth\AuthenticationController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->get('/user', function (Request $req) {
    return Auth::user();
});

Route::get('users', function () {
    return User::all();
});

Route::group(['namespace' => 'Api\Auth'], function () {
    Route::post('/login', [AuthenticationController::class, 'login']);
});
