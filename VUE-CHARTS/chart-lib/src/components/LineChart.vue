<template>
    <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
</template>

<script>
export default {
    props: {
        propsdata: Array
    },
    mounted() {
        new this.$_Chart(this.$refs.lineChart, { 
            type: 'line',
            data: {
                datasets: this.propsdata
            }
        });
        // this.handler(chart);
    },
}
</script>

<style>

</style>