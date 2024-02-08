<?php

namespace App\Http\Controllers;

use App\Models\Kota;
use App\Models\Siswa;
use GuzzleHttp\Psr7\Response;
use Hamcrest\Core\HasToString;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class SiswaController extends Controller
{
    public function Siswa(Request $request)
    {
        if ($request->has('query')) {
            $dataSiswa = Siswa::join('kota', 'siswa.Kota_id', '=', 'kota.id')
                ->select('siswa.*', 'kota.nama as kota')
                ->where('siswa.Nama', 'LIKE', '%' . $request->get('query') . '%')
                ->get();
        } else {
            $dataSiswa = Siswa::join('kota', 'siswa.Kota_id', '=', 'kota.id')
                ->select('siswa.*', 'kota.nama as kota')
                ->get();
        }
        $Skota = Kota::all();
        $data = [
            'jumlah' => $Jumlah = Siswa::count(),
            'cowok' => $cowok = Siswa::where('Gender', 'laki - laki')->count(),
            'cewek' => $cewek = Siswa::where('Gender', 'perempuan')->count(),
            'kota' => $total_kota = Kota::count()
        ];
        return Inertia::render('Dashboard', compact('dataSiswa', 'Skota', 'data'))->with('home', '');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function InputSiswa(Request $req)
    {
        $Siswa = new Siswa();
        $Siswa->Nis = $req->nis;
        $Siswa->Nama = $req->nama;
        $Siswa->TglLahir = $req->Tgl;
        $Siswa->Gender = $req->Gender;
        $Siswa->Kota_id = $req->Kota;
        $Siswa->save();
        return redirect()->back()->with('message','Data Siswa berhasil disimpan');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function BackUpData(Siswa $siswa,Request $request)
    {
        return Inertia::render('EditSiswa',[
            'siswaEdit'=>$siswa->find($request->id),
            'Skota' => Kota::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Siswa  $Siswa
     * @return \Illuminate\Http\Response
     */
    public function Edit(Request $request)
    {
        Siswa::find($request->id)->update($request->all());
        return redirect()->route('dashboard')
        ->with('message','Edit data berhasil disimpan');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Siswa  $Siswa
     * @return \Illuminate\Http\Response
     */
    public function Delete(Request $request)
    {
        $data = Siswa::find($request->id);
        $data->delete();
        return redirect()->back()->with('message','Data siswa dengan Nis '.$request->Nis.' berhasil dihapus');
    }
}
