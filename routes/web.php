<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\KotaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiswaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

// Tabel siswa
Route::get('/dashboard', [SiswaController::class, 'Siswa'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::post('/Input', [SiswaController::class, 'InputSiswa'])
    ->middleware(['auth', 'verified'])
    ->name('Input');

Route::get('/Back', [SiswaController::class, 'BackUpData'])
    ->middleware(['auth', 'verified'])
    ->name('Back');

Route::post('/Back/Edit', [SiswaController::class, 'Edit'])
    ->middleware(['auth', 'verified'])
    ->name('Back.Edit');

Route::post('/Delete', [SiswaController::class, 'Delete'])
    ->middleware(['auth', 'verified'])
    ->name('Delete');




// Chart data
Route::get('/chart', [ChartController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.chart');


//Kota
Route::get('/city', [KotaController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.city');
    
Route::post('/Input/kota', [KotaController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('Input.kota');

Route::get('/Back/kota', [KotaController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('Back.kota');

Route::post('/Back/kota/Edit', [KotaController::class, 'Update'])
    ->middleware(['auth', 'verified'])
    ->name('Back.kota.Edit');

Route::post('/Delete.kota', [KotaController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('Delete.kota');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
