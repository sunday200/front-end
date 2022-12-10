<template>

<main> 
  <div class="h-full w-full items-justify-center font-inter" v-if="close">
    
    <!-- {{-- <div class="sm:w-2/5 w-full sm:ml-auto sm:mr-[55px] h-24 bg-red-400 font-inter drop-shadow-md mt-5 rounded-md">
    <p class="text-center text-xl font-semibold text-white drop-shadow-md mt-4 uppercase">Menjauh Jika <span class="inline-block">Polusi Udara Melebihi 30 %</span></p>
    </div> --}} -->
</div>
    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-4 z-10 relative md:mt-2">
        <div class=" w-full sm:w-96 mt-5 rounded-md hover:bg-gray-100 h-48 bg-white py-2 px-4 border-r-4 relative border-red-500  drop-shadow-md ">
            <RouterLink to ="/node/1"><p class="font-semibold text-xl text-center ml-16 mt-4 ">Node 1</p>
            <div class="flex mt-1">
                <img src="../assets/stats.png" alt="Node" class="w-20 h-20">
                 <p class="text-center block m-auto font-league text-gray-600 font-normal text-3xl" v-for="data in node1M" :key="data.id" > {{ data.hasil }} Terdeteksi<span class="text-lg block font-arial">{{ new Date(data.waktu).toLocaleString() }}</span></p>
                <!-- <p class="text-center block m-auto font-league text-gray-600 font-normal text-3xl" v-for="data in arima1" :key="data.id"> {{ data.klasifikasi }}</p> -->
            </div>
            </RouterLink>
             <!-- <p class="text-center ml-16 block m-auto font-league  font-normal text-2xl text-red-400" > {{ info }} </p> -->
             <p class="text-center ml-16 block m-auto font-league  font-normal text-2xl text-red-400 mt-1" v-for="data in arima1" :key="data.id"> {{ data.klasifikasi }}</p>
        </div>
        <div class="w-full sm:w-96 mt-5 rounded-md h-48 hover:bg-gray-100 bg-white py-2 px-4 border-r-4 relative border-red-500 drop-shadow-md ">
            <RouterLink to="/node/2"><p class="font-semibold text-xl text-center ml-16 mt-4">Node 2</p>
            <div class="flex mt-1">
                <img src="../assets/stats.png" alt="Node" class="w-20 h-20">
                 <p class="text-center block m-auto font-league text-gray-600 font-normal text-3xl" v-for="data in node2M" :key="data.id" > {{ data.hasil }} Terdeteksi<span class="text-lg block font-arial">{{ new Date(data.waktu).toLocaleString() }}</span></p>

            </div>
            </RouterLink>
         <p class="text-center ml-16 block m-auto font-league  font-normal text-2xl text-red-400 mt-1" v-for="data in arima2" :key="data.id"> {{ data.klasifikasi }}</p>
            </div>
       <div class="w-full sm:w-96 mt-5 rounded-md h-48 hover:bg-gray-100 bg-white py-2 px-4 border-r-4 relative border-red-500 drop-shadow-md ">
            <RouterLink to="/node/3"><p class="font-semibold text-xl text-center ml-16 mt-4">Node 3</p> 
            <div class="flex mt-1">
                <img src="../assets/grafik-cancel.png" alt="Node" class="w-20 h-20">
                 <!-- <p class="text-center block m-auto font-league text-gray-600 font-normal text-3xl" v-for="data in node3" :key="data.id" > {{ data.klasifikasi }} <span class="text-lg block font-arial">{{ data.timestamp }}</span></p> -->
                 <p class="text-center block m-auto font-league text-gray-600 font-normal text-3xl">Dalam Perbaikan</p>
            </div>
            </RouterLink>
         <p class="text-center ml-16 block m-auto font-league  font-normal text-2xl text-red-400 mt-1" v-for="data in arima3" :key="data.id"> {{ data.klasifikasi }}</p>
            </div>
    </div>

    <div class="">
        
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:grid-cols-4 m-4 lg:m-10">
            <div class="w-full h-100 drop-shadow-xl bg-white mt-5 lg:col-span-3 rounded-md ">
                <!-- <h1 class="text-center mt-5 text-2xl font-semibold">Grafik Array Sensor</h1> -->
                <p class="text-center text-lg py-5 px-5 font-semibold">Grafik Sensor</p>
 
                <div class="card">
                    <div class="overflow-hidden card-container indigo-container">
                        <div class="overflow-auto border-round border-1 border-indigo-100" style="height: 400px">
                            <div>
                                <div class="sticky top-0 font-bold text-black bg-indigo-200 p-4">
                                    Node 1
                                </div>
                                <p class="surface-overlay p-4 m-0">
                                    <Chart type="line" :data="basicData" :options="basicOptions" />
                                </p>
                            </div>
                            <div>
                                <div class="sticky top-0 font-bold text-black bg-indigo-200 p-4">
                                    Node 2
                                </div>
                                <p class="surface-overlay p-4 m-0">
                                    <Chart type="line" :data="basicData" :options="basicOptions" />
                                </p>
                            </div>
                            <div>
                                <div class="sticky top-0 font-bold text-black bg-indigo-200 p-4">
                                    Descibe
                                </div>
                                
                                <p class="surface-overlay p-4 m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                                    Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                                    Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                                    Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                                    Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad? Repellendus cum voluptate soluta, expedita ex sit? Expedita commodi eligendi velit accusantium, earum laudantium ratione nisi laboriosam, repellat impedit harum?
                                    lorem * 10
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                                    Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                                    Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis.
                                    Maecenas pharetra convallis posuere morbi leo urna molestie. At in tellus integer feugiat scelerisque.
                                    Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad? Repellendus cum voluptate soluta, expedita ex sit? Expedita commodi eligendi velit accusantium, earum laudantium ratione nisi laboriosam, repellat impedit harum?
                                    lorem * 10
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam consequuntur repudiandae praesentium, itaque perspiciatis deserunt reprehenderit enim possimus cum sit nobis, odio blanditiis nesciunt consectetur est. Ab facilis ullam vero?
                                </p>
                            </div>
                         
                        </div>
                    </div>
                </div>


                <!-- <Chart type="line" :data="basicData" :options="basicOptions" /> -->
                <!-- <div class="flex align-items-center justify-content-center font-bold text-white m-2 border-round" style="min-width: 150px; min-height: 200px">
                </div> -->
                
                    <!-- <Chart type="line" :data="basicData1" :options="basicOptions" /> -->
                    <!-- <line-chart v-if="!isLoading" :data="data" /> -->
            </div>

            <div class="w-full h-64 drop-shadow-xl bg-white mt-5 mb-3 rounded-md ">
                <p class="text-center text-lg py-5 px-5 font-semibold">Nilai PPM Sensor E-Nose</p>
                <hr class="w-[95%]">
                <table class="min-w-full rounded-md">
                    <thead class="bg-gray-50 dark:bg-gray-100">
                        <!-- <tr>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                <p v-for="data in node1" :key="data.id" > CH4: {{ data.hasil }}</p>
                            </th>

                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                <p v-for="data in node1" :key="data.id" > CO: {{ data.hasil }}</p>
                            </th>
                        </tr>

                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                H2 : 12PPM
                            </th>

                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                CO : 12
                            </th>
                        </tr>

                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                CH4 : 12PPM
                            </th>

                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                NH3 : 19PPM
                            </th>
                        </tr>

                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                H2 : 12PPM
                            </th>

                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                CO : 12PPM
                            </th>
                        </tr>

                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                H2 : 112PPM
                            </th>

                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400">
                                C4H10 : 11PPM
                            </th>
                        </tr> -->
                    </thead>
                    <tbody>
                        <!-- Product 1 -->
                        
                        <tr class="bg-white border-b ">
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <!-- <p class="text-center block m-auto font-league text-gray-600 font-normal text-3xl" v-for="data in node1" :key="data.id" > {{ data.hasil }} <span class="text-lg block font-arial">{{ data.waktu }}</span></p> -->

                                <p v-for="data in node1" :key="data.id" class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md text-gray-600 text-1xl "> CH4 : {{ data.sensor1_ch4 }} PPM</p>
                            </td>
                            
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <!-- <p class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md ">Udara Bersih</p> -->
                                <p v-for="data in node1" :key="data.id" class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md text-gray-600 text-1xl"> CO : {{ data.sensor1_co }} PPM</p>
                            </td>
                        </tr>

                        <tr class="bg-white border-b ">
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <!-- <p class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md ">Udara Bersih</p> -->
                                <p v-for="data in node1" :key="data.id" class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md text-gray-600 text-1xl"> H2 : {{ data.sensor5_h2 }} PPM</p>
                            </td>
                            
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <!-- <p class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md ">Udara Bersih</p> -->
                                <p v-for="data in node1" :key="data.id" class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md text-gray-600 text-1xl"> NH3 : {{ data.sensor4_nh3 }} PPM</p>
                            </td>
                        </tr>

                        <tr class="bg-white border-b ">
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <!-- <p class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md ">Udara Bersih</p> -->
                                <p v-for="data in node1" :key="data.id" class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md text-green-600 text-1xl"> C4H10 : {{ data.sensor6_c4h10 }} PPM</p>
                            </td>
                            
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <p class="ring-offset-1 ring-1  py-1 px-1 text-center rounded-md ">nan</p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script>

    import axios from 'axios'

  export default{
      
    data(){
      return {
        basicData: {
                labels: [],
                datasets: [
                    {
                        label: 'CH4',
                        data: [],
                        fill: true,
                        borderColor: '#4E944F',
                        tension: .10,
                        borderWidth: 3
                    },
                    {
                        label: 'CO',
                        data: [],
                        fill: true,
                        borderColor: '#030802',
                        tension: .10,
                        borderWidth: 3
                    },
                    {
                        label: 'H2',
                        data: [],
                        fill: true,
                        borderColor: '#030802',
                        tension: .10,
                        borderWidth: 3
                    },
                    {
                        label: 'NH3',
                        data: [],
                        fill: true,
                        borderColor: '#030802',
                        tension: .10,
                        borderWidth: 3
                    },
                    {
                        label: 'C4H10',
                        data: [],
                        fill: true,
                        borderColor: '#030802',
                        tension: .10,
                        borderWidth: 3
                    }
                    // ,
                    // {
                    //     label: 'Sensor 1.3',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 2',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 3',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 4',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 5',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 6.1',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 6.2',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // },
                    // {
                    //     label: 'Sensor 6.3',
                    //     data: [],
                    //     fill: true,
                    //     borderColor: '#030802',
                    //     tension: .10,
                    //     borderWidth: 3
                    // }
                    
                ]
            },

        arima1: [],
        arima2: [],	
        arima3: [],	
        node1 : [],
        node1M : [],
        node2 : [],
        node2M : [],
        node3 : [],
        node3M : [],
        close: true,
        show: false,
        isLoading: true,

            data: [
            { 
            name: 'Node 1',
            data : {}
            },
            { 
                name: 'Node 2',
                 data: {}
            },
            {
                name: 'Node 3',
                data: {}
            },
            ]
      }
    },
    created() {
        this.getItems();
        setInterval(() => {
            this.getItems()
        }, 1000)
    },
    methods: {
        getItems() {
        // axios.get('https://be.enose-ypti.mbkm.stechoq.com/api/node/arima1')
        // .then(response => {
        //     this.arima1 = response.data
        //     if(response.data.status == true){
        //         this.arima1 = response.data.data
        //     }else{
        //         this.arima1 = '';
        //     }

        //     for(var i = 0; i < this.arima1.length; i++){
        //         this.data[0].data.arima1 = [this.arima1[i].arima1];
        //         this.data[0].data.arima2 = [this.arima1[i].arima2];
        //         this.data[0].data.arima3 = [this.arima1[i].arima3];
        //         this.data[0].data.arima4 = [this.arima1[i].arima4];
        //         this.data[0].data.arima5 = [this.arima1[i].arima5];
        //         this.data[0].data.arima6 = [this.arima1[i].arima6];
        //     }
        // });
        // axios.get('https://be.enose-ypti.mbkm.stechoq.com/api/node/arima2')
        // .then(response => {
        //     this.arima2 = response.data.data;
        //     if(response.data.status == true){
        //         this.arima2 = response.data.data
        //     }else{
        //         this.arima2 = '';
        //     }

        //     for(var i = 0; i < this.arima2.length; i++){
        //         this.data[1].data.arima1 = [this.arima2[i].arima1];
        //         this.data[1].data.arima2 = [this.arima2[i].arima2];
        //         this.data[1].data.arima3 = [this.arima2[i].arima3];
        //         this.data[1].data.arima4 = [this.arima2[i].arima4];
        //         this.data[1].data.arima5 = [this.arima2[i].arima5];
        //         this.data[1].data.arima6 = [this.arima2[i].arima6];
        //     }
            
        // });
        // axios.get('https://be.enose-ypti.mbkm.stechoq.com/api/node/arima3')
        // .then(response => {
        //     this.arima3 = response.data.data;
        //     if(response.data.status == true){
        //         this.arima3 = response.data.data
        //     }else{
        //         this.arima3 = '';
        //     }

        //     for(var i = 0; i < this.arima3.length; i++){
        //         this.data[2].data.arima1 = [this.arima3[i].arima1];
        //         this.data[2].data.arima2 = [this.arima3[i].arima2];
        //         this.data[2].data.arima3 = [this.arima3[i].arima3];
        //         this.data[2].data.arima4 = [this.arima3[i].arima4];
        //         this.data[2].data.arima5 = [this.arima3[i].arima5];
        //         this.data[2].data.arima6 = [this.arima3[i].arima6];
        //     }
        //     this.isLoading = false;
        // });

        axios.get('http://localhost:40027/hasil-1')
        .then(response => {
            console.log(response.data.data)
            this.node1M = response.data.data;  
        });

        axios.get('http://localhost:40027/hasil-1')
        .then(response => {
            console.log(response.data.data)
            this.node2M = response.data.data;  
        });
        // axios.get('https://be.enose-ypti.mbkm.stechoq.com/api/node/klasifikasi2')
        // .then(response => {
        //     this.node2 = response.data.data;
        // });
        // axios.get('https://be.enose-ypti.mbkm.stechoq.com/api/node/klasifikasi3')
        // .then(response => {
        //     this.node3 = response.data.data;
        // });

        
        // TRYYYY UNTUK PPM
        axios.get('http://localhost:40027/alat-1-ppm-hasil')  // API nya cuma berisi 1 data aja
        .then(response => {
            console.log(response.data.data)
            this.node1 = response.data.data; 
        });

        axios
        .get('http://localhost:40027/alat-1-ppm') // Berisi 20 Data
        .then(response => {
            console.log("awal")
            this.dataRaw = response.data.data;
            this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            console.log(this.dataRaw)
            this.basicData.labels = this.dataRaw.map(dt => new Date(dt.waktu).toLocaleTimeString());
            this.basicData.datasets[0].data = this.dataRaw.map(dt => dt.sensor1_ch4);
            this.basicData.datasets[1].data = this.dataRaw.map(dt => dt.sensor1_co);
            this.basicData.datasets[2].data = this.dataRaw.map(dt => dt.sensor5_h2);
            this.basicData.datasets[3].data = this.dataRaw.map(dt => dt.sensor4_nh3);
            this.basicData.datasets[4].data = this.dataRaw.map(dt => dt.sensor6_c4h10);
            // this.basicData.datasets[5].data = this.dataRaw.map(dt => dt.sensor4_nh3);
            // this.basicData.datasets[6].data = this.dataRaw.map(dt => dt.sensor5_h2);
            // this.basicData.datasets[7].data = this.dataRaw.map(dt => dt.sensor6_co);
            // this.basicData.datasets[8].data = this.dataRaw.map(dt => dt.sensor6_h2);
            // this.basicData.datasets[9].data = this.dataRaw.map(dt => dt.sensor6_c4h10);

            



        })
        
    }
}


}
</script>

<!-- <style>
#resize{
    height: 20px;
}
</style> -->
