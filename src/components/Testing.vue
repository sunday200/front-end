<template>
  <main>
    <TableData :chart-data="datacolletion"></TableData>
  </main>
</template>

<script> 
import TableData from './TableData.js'	
export default{
  components: {
   TableData
  },
  data(){
      return{
        datacolletion: null,
        loaded : false
      }
  },
  mounted(){
    this.fillData()
  },
  methods:{
    fillData(){
      this.datacolletion = {
        labels: [0,1,2,3,4,5,6,7,8,9],
        datasets: [
          {
            label: 'Sensor 1',
            data: [1,2,3,4,5,6,7,8,8],
            borderColor: '#4E944F',
            pointBackgroundColor: '#000',
            borderWidth: 1,
            pointBorderColor: '#4E944F',
            
          }
        ]
        }
      }
    }
  }
</script>
