<template>
  <div>
    <h2>Chart.js</h2>
    <bar-chart></bar-chart>
    <h2>Line Chart</h2>
    <line-chart v-bind:propsdata="lineChartData"></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  data() {
    return {
      lineChartData: []
    }
  },
  components: {
    BarChart,
    LineChart
  },
  created() {
    this.lineChartData = [{ data: [{x: 10, y: 20}, {x: 15, y: 10}, {x: 20, y: 20}] }];
  }
}
</script>

<style>

</style>