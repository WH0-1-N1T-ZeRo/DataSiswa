import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Table } from 'react-bootstrap';
import ModalExample from '@/Components/Pagination';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    console.log(props);
    const MyProp = props.siswaEdit;
    const [Nis, setNis] = useState('');
    const [Nama, setNama] = useState('');
    const [TglLahir, setTgl] = useState('');
    const [Kota_id, setKota] = useState('');
    const [Gender, setGender] = useState('');
    const id = MyProp.id;

    const handleSubmit = () => {
        // Memanggil fungsi ValueNull untuk menetapkan nilai default jika diperlukan

        const data = {
            id, Nis, Nama, TglLahir, Kota_id, Gender
        };

        Inertia.post('/Back/Edit', data);
    };

    function ValueNull() {
        // Hanya set nilai default jika state masih kosong (null atau undefined)
        if (Nis == '') setNis(MyProp.Nis);
        if (Nama == '') setNama(MyProp.Nama);
        if (TglLahir == '') setTgl(MyProp.TglLahir);
        if (Kota_id == '') setKota(MyProp.Kota_id);
        if (Gender == '') setGender(MyProp.Gender);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 my-1 leading-tight">Edit Siswa</h2>}
        >
            { ValueNull() }
            <Head title="Edit Siswa" />
            <div className="bg-white p-3 rounded shadow-md ">

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
                            onChange={(Nis) => setNis(Nis.target.value)}
                            defaultValue={MyProp.Nis}
                        />
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="Nama" className="form-label">
                            Nama
                        </label>
                        <input type="text" name="Nama" className="form-control"
                            onChange={(Nama) => setNama(Nama.target.value)}
                            defaultValue={MyProp.Nama} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Tgl" className="form-label">
                            Tgl Lahir
                        </label>
                        <input type="date" name="TglLahir" className="form-control"
                            onChange={(TglLahir) => setTgl(Tgl.target.value)}
                            defaultValue={MyProp.TglLahir} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Kota" className="form-label">
                            Kota
                        </label>
                        <select className="form-select" name="Kota_id" onClick={(Kota_id) => setKota(Kota.target.value)}>
                            {props.Skota.map((row) => (
                                <option defaultValue={row.id} selected={row.id === MyProp.Kota_id}>
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
                                defaultValue="Laki - laki"
                                name="Gender"
                                id="laki_laki"
                                defaultChecked={MyProp.Gender == "Laki - laki"}
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
                                defaultValue="Perempuan"
                                name="Gender"
                                id="Perempuan"
                                defaultChecked={MyProp.Gender == "Perempuan"}
                                onChange={(Gender) => setGender(Gender.target.value)}
                            />
                            <label className="form-check-label text-capitalize" htmlFor="Perempuan">
                                Perempuan
                            </label>
                        </div>
                    </div>
                    <div className="col-12 flex justify-end">
                        <button className="btn btn-primary" type="submit" onClick={() => handleSubmit()}>
                            Submit Edit
                        </button>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
