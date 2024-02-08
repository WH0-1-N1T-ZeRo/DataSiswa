import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { IoMan, IoWoman } from "react-icons/io5";
import { ImManWoman } from "react-icons/im";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Table } from 'react-bootstrap';
import ModalExample from '@/Components/Pagination';

export default function Dashboard(props) {
    console.log(props);
    const { jumlah, cowok, cewek, kota } = props.data;
    var dataArray = props.dataSiswa;
    var a = 1
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 my-1 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            {props.flash.message && (
                <div className='flex justify-end fixed top-20 w-full'>
                    <div role="alert" className="alert alert-success flex w-2/4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{props.flash.message}!</span>
                    </div>
                </div>
            )}

            <div className="py-2">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-auto my-2 mx-2">
                        <div className="flex p-2 bg-red-600 shadow-lg">
                            <IoMan className="text-5xl mx-1 text-white" />
                            <div className="flex flex-col text-white w-full text-start">
                                <p className="uppercase m-0">Siswa Laki-laki</p>
                                <p className="font-medium m-0">{cowok}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto my-2 mx-2">
                        <div className="flex p-2 bg-blue-600 shadow-lg">
                            <ImManWoman className="text-5xl mx-1 text-white" />
                            <div className="flex flex-col text-white w-full text-start">
                                <p className="uppercase m-0">Total Siswa</p>
                                <p className="font-medium m-0">{jumlah}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto my-2 mx-2">
                        <div className="flex p-2 bg-green-600 shadow-lg">
                            <IoWoman className="text-5xl mx-1 text-white" />
                            <div className="flex flex-col text-white w-full text-start">
                                <p className="uppercase m-0">Siswa Perempuan</p>
                                <p className="font-medium m-0">{cewek}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto my-2 mx-2">
                        <div className="flex p-2 bg-stone-600 shadow-lg">
                            <BsFillBuildingsFill className="text-5xl mx-1 text-white" />
                            <div className="flex flex-col text-white w-full text-start">
                                <p className="uppercase m-0">Total Kota Terdaftar</p>
                                <p className="font-medium m-0">{kota}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mx-7">
                <div className="container flex justify-between my-2">
                    <ModalExample Skota={props} />
                    <a href="/Kota" className="btn btn-primary">
                        <span>Tambah Kota</span> <FaPlus />
                    </a>
                </div>
                {console.log(props.flash)}


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
                                    <td>{item.Nis}</td>
                                    <td>{item.Nama}</td>
                                    <td>{item.Gender}</td>
                                    <td>{item.TglLahir}</td>
                                    <td>{item.kota}</td>
                                    <td>
                                        <Link href={route('Back')} data={{ id: item.id }} method='get' className='btn btn-primary mx-1'>
                                            <FaPencilAlt />
                                        </Link>
                                        <Link href={route('Delete')} data={{ id: item.id, Nis: item.Nis }} method='post' className='btn btn-warning mx-1'>
                                            <RiDeleteBin6Line />
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
