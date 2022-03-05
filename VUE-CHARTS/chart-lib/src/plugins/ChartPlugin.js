import Chart from 'chart.js';

export default {
    install(Vue) {
        
        Vue.config.globalProperties.$_Chart = Chart
    }
}