import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    console.log(props);
    var a = 1;
    const dataArray = props.Skota
    const [Nama, setNama] = useState('');
    const id = props.KotaEdit.id;

    const handleSubmit = () => {
        
        const data = {
            id, Nama 
        };
        Inertia.post('/Back/kota/Edit', data);
    };

    function ValueNull() {
        if (Nama == '') setNama(dataArray.Nama);
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold p-0.5 text-xl text-gray-800 my-1 leading-tight">City</h2>}
        >
            <Head title="City">
            </Head>
            <div className="card m-2 p-2">
                <div className="card-header">
                    <h4 className='text-capitalize fw-bold'>input nama kota</h4>
                </div>
                <div className="card-body h-auto">
                    <div className="flex form-floating">
                        <input type="text" className='form-control w-3/4' id='floatingInput' placeholder='kota' 
                        defaultValue={props.KotaEdit.Nama}
                        onChange={(Nama) => setNama(Nama.target.value)}
                         />
                        <label htmlFor="floatingInput">Nama Kota</label>
                        <div className='flex items-center'>
                        <button className="btn btn-primary" type="submit" onClick={() => handleSubmit()}>
                            Submit Edit
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-h-72 overflow-x-auto">
                <Table className="table table-striped shadow">
                    <thead >
                        <tr className='sticky top-0'>
                            <th>#</th>
                            <th>Nis</th>
                            <th>Nama</th>
                            <th>Gender</th>
                            <th>Tgl Lahir</th>
                            <th>Kota</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.map((item) => (
                            <tr>
                                <th scope="row">{a++}</th>
                                <td>{item.Nama}</td>
                                <td>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                <td>{new Date(item.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                <td>{new Date(item.updated_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</td>
                                <td>
                                    <Link href={route('Back.kota')} data={{ id: item.id }} method='get' className='btn btn-primary mx-1'>
                                        <FaPencilAlt />
                                    </Link>
                                    <Link href={route('Delete.kota')} data={{ id: item.id, Nama: item.Nama }} method='post' className='btn btn-warning mx-1'>
                                        <RiDeleteBin6Line />
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </div>
        </AuthenticatedLayout>
    );
}
