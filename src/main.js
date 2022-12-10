import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/css/style.css'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import PrimeVue from 'primevue/config'
import VueApexCharts from "vue3-apexcharts";


import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


import Chart from 'primevue/chart';

const app = createApp(App)
app.use(VueChartkick)
app.use(PrimeVue);

app.use(VueApexCharts);
app.component('Chart', Chart)
app.use(router)

app.mount('#app')