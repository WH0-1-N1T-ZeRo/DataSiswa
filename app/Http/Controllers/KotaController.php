<?php

namespace App\Http\Controllers;

use App\Models\Kota;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KotaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dataKota=Kota::all();
        return Inertia::render('City',compact('dataKota'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Siswa = new Kota();
        $Siswa->Nama = $request->Nama;
        $Siswa->save();
        return redirect()->back()->with('message','Data Kota berhasil disimpan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kota  $Kota
     * @return \Illuminate\Http\Response
     */
    public function show(Kota $Kota)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kota  $Kota
     * @return \Illuminate\Http\Response
     */
    public function edit(Kota $Kota,Request $request)
    {
        return Inertia::render('EditKota',[
            'KotaEdit'=>$Kota->find($request->id),
            'Skota' => Kota::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kota  $Kota
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // dd($request->id);
        Kota::where('id',$request->id)->update($request->all());
        return redirect()->route('dashboard')
        ->with('message','Edit data berhasil disimpan');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kota  $Kota
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kota $Kota,Request $request)
    {
        $data = Kota::find($request->id);
        $data->delete();
        return redirect()->back()->with('message','Data kota dengan Nama '.$request->Nama.' berhasil dihapus');
    }
}
