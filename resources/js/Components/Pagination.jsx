import React, { useState } from 'react';
import { FaPlus, FaWindowClose } from "react-icons/fa";
import { Form } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

const ModalExample = ({ Skota }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        RemoveInput();
    };

    const [nis, setNis] = useState('')
    const [nama, setNama] = useState('')
    const [Tgl, setTgl] = useState('')
    const [Kota, setKota] = useState('')
    const [Gender, setGender] = useState('')

    const handleSubmit = () => {
        const data = {
            nis, nama, Tgl, Kota, Gender
        }
        Inertia.post('/Input', data);
        closeModal()
    };

    const radios = [
        document.getElementById('laki_laki'),
        document.getElementById('Perempuan')
    ]
    function RemoveInput() {
        setNis('')
        setNama('')
        setKota('')
        setTgl('')

        radios.forEach(radio => {
            radio.checked = false; // Menghapus cek pada elemen radio
        });
    }
    return (
        <div>
            <button className="btn btn-success" onClick={openModal}>
                <span>Tambah Siswa</span> <FaPlus />
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed bg-slate-700  inset-0 overflow-y-auto z-50 flex items-center justify-center">
                    <div className="relative w-3/4">
                        {/* Konten Modal */}
                        <div className="bg-white p-3 rounded shadow-md ">
                            <div className="flex justify-between">
                                <h2 className="text-2xl mb-4">Input Siswa</h2>

                                <button className="btn btn-danger p-1 h-fit" onClick={closeModal}>
                                    <FaWindowClose className='text-2xl' />
                                </button>
                            </div>
                            {/* Konten modal */}
                            {/* <div>{console.log(Skota.flash)}</div> */}

                            <div className='row'>
                                <div className="col-md-4">
                                    <label htmlFor="Nis" className="form-label">
                                        Nis
                                    </label>
                                    <input
                                        type="text"
                                        name="Nis"
                                        placeholder="XXXX"
                                        maxLength="4"
                                        className="form-control"
                                        id="Nis"
                                        onChange={(nis) => setNis(nis.target.value)}
                                        value={nis}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <label htmlFor="Nama" className="form-label">
                                        Nama
                                    </label>
                                    <input type="text" name="Nama" className="form-control"
                                        onChange={(nama) => setNama(nama.target.value)}
                                        value={nama} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Tgl" className="form-label">
                                        Tgl Lahir
                                    </label>
                                    <input type="date" name="TglLahir" className="form-control"
                                        onChange={(Tgl) => setTgl(Tgl.target.value)}
                                        value={Tgl} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Kota" className="form-label">
                                        Kota
                                    </label>
                                    <select className="form-select" name="Kota_id" onClick={(Kota) => setKota(Kota.target.value)}>
                                        {Skota.Skota.map((row) => (
                                            <option value={row.id} >
                                                {row.Nama}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-10 my-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="Laki - laki"
                                            name="Gender"
                                            id="laki_laki"
                                            onChange={(Gender) => setGender(Gender.target.value)}
                                        />
                                        <label className="form-check-label text-capitalize" htmlFor="laki_laki">
                                            Laki - laki
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value="Perempuan"
                                            name="Gender"
                                            id="Perempuan"
                                            onChange={(Gender) => setGender(Gender.target.value)}
                                        />
                                        <label className="form-check-label text-capitalize" htmlFor="Perempuan">
                                            Perempuan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit" onClick={() => handleSubmit()}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalExample;
