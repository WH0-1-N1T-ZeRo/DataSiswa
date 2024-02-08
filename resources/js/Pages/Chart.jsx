import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Chart } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { Table } from 'react-bootstrap';

export default function Dashboard(props) {
    console.log(props);
    // Mengumpulkan Kota_id dari semua data siswa
    const kotaIds = props.dataSiswa.map(siswa => siswa.Kota_id);

    console.log('Kota_ids:', kotaIds);

    // Mengumpulkan Kota_id unik dari semua data siswa
    const kotaIdsUnik = [...new Set(kotaIds)];

    // Membuat objek untuk menyimpan jumlah setiap Kota_id
    const jumlahKota = {};

    // Menghitung jumlah setiap Kota_id
    kotaIds.forEach(kotaId => {
        if (jumlahKota[kotaId]) {
            jumlahKota[kotaId]++;
        } else {
            jumlahKota[kotaId] = 1;
        }
    });

    // Menampilkan hasil jumlah setiap Kota_id
    console.log('Jumlah setiap Kota_id:', jumlahKota);

    // Mengambil nama kota dan jumlah siswa per kota
    const labels = Object.keys(jumlahKota);
    const dataJumlahSiswa = Object.values(jumlahKota);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold p-0.5 text-xl text-gray-800 my-1 leading-tight">Chart</h2>}
        >
            <Head title="Chart">
            </Head>

            <div class="w-full">
                <div className="card p-2 container mt-20">
                    <Bar
                        data={{
                            labels: props.dataKota.map((data) => data.Nama),
                            datasets: [{
                                label: "Jumlah siswa : " + props.dataSiswa.length,
                                data: dataJumlahSiswa
                            }],
                        }}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
