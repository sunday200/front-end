<template>
    <main>
        <!-- <div class="flex">
            <div class="rounded-r-full mt-6 w-[70%] md:w-[35%] h-28 font-inter bg-teal-400 -z-50 md:mt-5 drop-shadow-lg">
            <p class="text-center py-10 text-2xl md:text-2xl text-white font-semibold">Data Node 2 <span class=""></span> </p>
        </div>
        </div> -->

        <div class="container mx-auto mb-10 mt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-10 m-2">
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 1530<span class="block font-semibold">Metana (CH4)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData1" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 1530<span class="block font-semibold">Karbon Dioksida (CO)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData2" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 1530<span class="block font-semibold">Hidrogen (H2)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData3" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 2<span class="block font-semibold">Karbon Dioksida (C0)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData4" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 3<span class="block font-semibold">Metana (CH4)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData5" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 4<span class="block font-semibold">Amonia (NH3)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData6" :options="basicOptions" />
            </div>

            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 5<span class="block font-semibold">Hidrogen (H2)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData7" :options="basicOptions" />
            </div>

            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 6<span class="block font-semibold">Karbon Dioksida (CO)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData8" :options="basicOptions" />
            </div>

            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 6<span class="block font-semibold">Hidrogen (H2)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData9" :options="basicOptions" />
            </div>

            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 6<span class="block font-semibold">Butana (C4H10)</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData10" :options="basicOptions" />
            </div>
        </div>
        </div>
    </main>
</template>

<script>

let id_prev = 0 
import axios from 'axios';
export default{
    data(){
        return{
            dataRaw: [],
            basicData1: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 1',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3,
                    }
                ]
            },
            basicData2: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 2 ',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3,
                    }
                ]
            },
            basicData3: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 3',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData4: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 4',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData5: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 5',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData6: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 6',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData7: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 7',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData8: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 8',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData9: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 9',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
            basicData10: {
                labels: [],
                datasets: [
                    {
                        label: 'Sensor 10',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    }
                ]
            },
        }
    },

    created() {
        this.getId()
        setInterval(() => {
            this.getId()
        }, 1000)
    }
    ,

    methods: {
        getId() {
            axios
            .get('http://localhost:40027/alat-2-ppm')
            .then(response => {
                let x = response.data.data[0]['id']
                this.z(x)
            })
        },
        z(x) {
            let id_now = x
            if (id_now == id_prev) {
                console.log(`id data baru : ${id_now}`)
                this.getItems()}
                id_prev = id_now
            },

        getItems() {
        axios
        .get('http://localhost:40027/alat-2-ppm')
        .then(response => {
            console.log("awal")
            this.dataRaw = response.data.data;
            // console.log(response.data.data[0]['id'])
            // console.log(this.dataRaw.map(dt => dt.timestamp))    
            console.log(response.data.data[0]['waktu'])
            // let tanggal = response.data.data[0]['waktu']
            let tanggalConvert = new Date(response.data.data[0]['waktu']).toLocaleTimeString()
            console.log(tanggalConvert)
            console.log(this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString()));
            // console.log(response.data.data)

            console.log("akhir")

            this.basicData1.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData2.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData3.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData4.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData5.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData6.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData7.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData8.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData9.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData10.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());

            this.basicData1.datasets[0].data = this.dataRaw.map(dt => dt.sensor1_ch4);
            this.basicData2.datasets[0].data = this.dataRaw.map(dt => dt.sensor1_co);
            this.basicData3.datasets[0].data = this.dataRaw.map(dt => dt.sensor1_h2);
            this.basicData4.datasets[0].data = this.dataRaw.map(dt => dt.sensor2_co);
            this.basicData5.datasets[0].data = this.dataRaw.map(dt => dt.sensor3_ch4);
            this.basicData6.datasets[0].data = this.dataRaw.map(dt => dt.sensor4_nh3);
            this.basicData7.datasets[0].data = this.dataRaw.map(dt => dt.sensor5_h2);
            this.basicData8.datasets[0].data = this.dataRaw.map(dt => dt.sensor6_co);
            this.basicData9.datasets[0].data = this.dataRaw.map(dt => dt.sensor6_h2);
            this.basicData10.datasets[0].data = this.dataRaw.map(dt => dt.sensor6_c4h10);

        })
        .catch(error => console.log(error))
}
    }

}
</script>