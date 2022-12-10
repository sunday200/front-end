<template>
    <main>
        <div class="flex">
            <div class="rounded-r-full mt-6 w-[70%] md:w-[55%] h-28 font-inter bg-teal-400 -z-50 md:mt-10 drop-shadow-lg">
            <p class="text-center py-10 text-2xl md:text-3xl text-white font-semibold">Data Node 3  </p>
        </div>
        </div>

        <div class="container mx-auto mb-10 mt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-10 m-2">
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 1530<span class="block font-semibold">Hidrokarbon, H2, Alkohol</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData1" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 2530<span class="block font-semibold">H2, CO, Alkohol, SO2, VOC</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData2" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 3530<span class="block font-semibold">Hidrokarbon, Alkohol</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData3" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 5430<span class="block font-semibold">NH3</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData4" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 6530<span class="block font-semibold">H2</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData5" :options="basicOptions" />
            </div>
            <div class="w-full h-auto bg-white drop-shadow-md rounded-md  ">
                <p class="text-center font-inter text-2xl mt-10">Grafik Sensor GGS 10530<span class="block font-semibold">CO, VOC</span></p>
                <hr class="w-[85%] border-[1px] border-teal-500 mx-auto mt-4">
                <Chart type="line" :data="basicData6" :options="basicOptions" />
            </div>
        </div>
        </div>
    </main>
</template>

<script>
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
                        borderWidth: 3
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
        }
    },
    // async mounted(){
    //    axios.get('http://localhost:10000/api/node').then(response => {
    //         this.basicData.datasets.data = response.data.data;
    //     })
   async mounted() {
    await axios.get('https://be.enose-ypti.mbkm.stechoq.com/api/node/node3').then(response => {
        this.dataRaw = response.data.data;
        this.basicData1.datasets[0].data = this.dataRaw.sensors.map(dt => dt.sensor1);
        this.basicData2.datasets[0].data = this.dataRaw.sensors.map(dt => dt.sensor2);
        this.basicData3.datasets[0].data = this.dataRaw.sensors.map(dt => dt.sensor3);
        this.basicData4.datasets[0].data = this.dataRaw.sensors.map(dt => dt.sensor4);
        this.basicData5.datasets[0].data = this.dataRaw.sensors.map(dt => dt.sensor5);
        this.basicData6.datasets[0].data = this.dataRaw.sensors.map(dt => dt.sensor6);

        this.basicData1.labels = this.dataRaw.sensors.map(dt => dt.timestamp);
        this.basicData2.labels = this.dataRaw.sensors.map(dt => dt.timestamp);
        this.basicData3.labels = this.dataRaw.sensors.map(dt => dt.timestamp);
        this.basicData4.labels = this.dataRaw.sensors.map(dt => dt.timestamp);
        this.basicData5.labels = this.dataRaw.sensors.map(dt => dt.timestamp);
        this.basicData6.labels = this.dataRaw.sensors.map(dt => dt.timestamp);

        for (var i = 0; i < this.dataRaw.arima.length; i++) {
            this[`basicData${i + 1}`].datasets[0].data.push(this.dataRaw.arima[i]);
            this[`basicData${i + 1}`].labels.push("Prediksi");
        }
     
    })

    }
}
</script>