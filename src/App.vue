<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>

    <nav>
          <!-- This example requires Tailwind CSS v2.0+ -->
    <div>
        <nav class="bg-white h-auto drop-shadow-sm " >
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button" @click="show = !show" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 border-2 border-blue-400 hover:text-gray-100 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <h1 class="font-inter text-teal-600 font-semibold text-2xl sm:block hidden">Data Sensor E-Nose</h1>
                            <!-- <h1 class="font-inter text-teal-600 font-semibold px-4 text-lg sm:hidden">E-NOSE</h1> -->
                            <router-link to="/" class="font-inter text-teal-600 font-semibold px-4 text-lg sm:hidden">E-Nose</router-link>
                        </div>
                        <div class="hidden sm:block sm:ml-6 z-40">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <RouterLink to="/" class="text-teal-500 hover:bg-teal-500 hover:text-white px-3 py-3 rounded-md text-sm font-medium flex" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                  </svg> Home</RouterLink>

                                <RouterLink to="/node/1" class="text-teal-500 hover:bg-teal-500 hover:text-white px-3 py-3 rounded-md text-sm font-medium flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                  </svg> Node 1</RouterLink>
                                  <RouterLink to="/node/2" class="text-teal-500 hover:bg-teal-500 hover:text-white px-3 py-3 rounded-md text-sm font-medium flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                  </svg> Node 2</RouterLink>
                                  <RouterLink to="/node/3" class="text-teal-500 hover:bg-teal-500 hover:text-white px-3 py-3 rounded-md text-sm font-medium flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                  </svg> Node 3 </RouterLink>

                                  <div class="w-10 cover -mr-10 inline-block bg-white">

                                  </div>
                                <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a> -->

                                <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a> -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
              <Transition>          
                <div class="sm:hidden" id="mobile-menu" v-if="show">

                <div class="px-2 pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                     <RouterLink to="/" class="bg-teal-500 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home </RouterLink>

                     <!-- <RouterLink to="/data" class="text-teal-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Data</RouterLink> -->
                     <RouterLink to="/node/1" class="text-teal-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Node 1</RouterLink>
                     <RouterLink to="/node/2" class="text-teal-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Node 2</RouterLink>
                     <RouterLink to="/node/3" class="text-teal-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Node 3</RouterLink>
                    
                  
                                      
                    
                    <!-- <button type="button" @click="drop = !drop" class="text-teal-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                               Node</button> -->

                    <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a> -->

                    <!-- <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a> -->
                </div>
            </div>
            
            </Transition>

        </nav>

    </div>

      </nav>
  </header>

  <RouterView />
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
        show: false,
        drop: false
      }
    },
    }
</script>
