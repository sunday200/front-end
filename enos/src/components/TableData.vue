<template>

<main> 
  <div class="h-full w-full items-justify-center font-inter" v-if="close">
    <div class="w-[92%] sm:max-w-[50%] sm:mx-14 mx-auto bg-red-300 bg-opacity-100 border-[1px] border-red-600 rounded-xl h-20 relative mt-5 drop-shadow-xl">
        <div class="w-full flex items-center justify-between ">
            <h1 class="text-sm sm:text-lg text-white font-semibold mx-auto mt-5"> Warning Jahui sensor 1 polusi udara melebihi 30%</h1>
            <div class="relative mr-4 mb-4">
                <button class="right-0 ml-5 text-white" @click="close = !close" >X</button>
            </div>
        </div>
        <div class="z-10">
            <!-- <img src="https://images.unsplash.com/photo-1478013073526-0cd2639ac897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80" alt="" class="h-36 w-96 rounded-r-full object-cover drop-shadow-md"> -->
        </div>
    </div>
    <!-- {{-- <div class="sm:w-2/5 w-full sm:ml-auto sm:mr-[55px] h-24 bg-red-400 font-inter drop-shadow-md mt-5 rounded-md">
    <p class="text-center text-xl font-semibold text-white drop-shadow-md mt-4 uppercase">Menjauh Jika <span class="inline-block">Polusi Udara Melebihi 30 %</span></p>
    </div> --}} -->
</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-4">
        <div class=" w-full sm:w-96 mt-5 rounded-md h-32 bg-white py-2 px-4 border-r-4 border-red-500 drop-shadow-md ">
            <a href="#"><p class="text-gray-500 text-xl text-center ml-16 mt-4">Node 1</p>
            <div class="flex mt-1">
                <img src="img/grafk.png" alt="" class="w-16 h-16">
                <p class="text-center block m-auto font-league text-4xl">10%</p>
            </div>
            </a>
        </div>
        <div class="w-full sm:w-96 mt-5 rounded-md h-32 bg-white py-2 px-4 border-r-4 border-red-500 drop-shadow-md ">
            <a href="#"><p class="text-gray-500 text-xl text-center ml-16 mt-4">Node 2</p>
            <div class="flex mt-1">
                <img src="img/grafk.png" alt="" class="w-16 h-16">
                <p class="text-center block m-auto font-league text-4xl">40%</p>
            </div>
            </a>
        </div>
        <div class="w-full sm:w-96 mt-5 rounded-md h-32 bg-white py-2 px-4 border-r-4 border-red-500 drop-shadow-md ">
            <a href="#"> <p class="text-gray-500 text-xl text-center ml-16 mt-4">Node 3</p>
            <div class="flex mt-1">
                <img src="img/grafk.png" alt="" class="w-16 h-16">
                <p class="text-center block m-auto font-league text-4xl">20%</p>
            </div>
            </a>
        </div>
    </div>

    <div class="min-h-screen">
        <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:grid-cols-4 m-4 lg:m-10">
            <div class="w-full h-auto drop-shadow-xl bg-white mt-5 lg:col-span-3 rounded-md ">
                <h1 class="text-center mt-5 text-2xl font-semibold">Grafik Array Sensor</h1>
                <div class="items-center justify-center flex w-[80%] h-2 border-b-2 mt-4 m-auto">
                </div>
                <div class="mt-4 m-5">
                    <canvas id="myChart"></canvas>
                </div>
            </div>

            <div class="w-full h-96 drop-shadow-xl bg-white mt-5 mb-10 rounded-md ">
                <p class="text-center text-lg py-5 px-5 font-semibold">Table Array Sensor E-Nose</p>
                <hr class="w-[95%]">
                <table class="min-w-full rounded-md">
                    <thead class="bg-gray-50 dark:bg-gray-100">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Tingkat Keamanan
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs sm:text-md font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Presentase
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Product 1 -->
                        <tr class="bg-white border-b ">
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <p class="ring-offset-2 ring-2 ring-green-600 py-2 px-3 text-center rounded-md text-green-500">Aman</p>
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                                20%
                            </td>
                        </tr>
                        <!-- Product 2 -->
                        <tr class="bg-white border-b ">
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <p class="ring-offset-2 ring-2 ring-yellow-600 py-2 px-3 text-center rounded-md text-yellow-500">Sedang</p>
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                                30%
                            </td>
                        </tr>
                        <tr class="bg-white border-b ">
                            <td class="py-4 px-6 text-sm whitespace-nowrap ">
                               <p class="ring-offset-2 ring-2 ring-red-600 py-2 px-3 text-center rounded-md text-red-500"> Bahaya</p>
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                40%
                            </td>
                        </tr>
                        <!-- Product 2 -->
                        <tr class="bg-white">
                            <td class="py-4 px-6 text-sm whitespace-nowrap">
                                <p class="ring-offset-2 ring-2 ring-red-700 py-2 px-3 text-center rounded-md text-red-600">Sangat Bahaya</p>
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                50%
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
  export default{
    data(){
      return {
        close: true,
        show: false,
      }
    }
  }
</script>