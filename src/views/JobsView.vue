<template>
    <div>
        <div v-for="job in JobsList" v-bind:key="job.titl">{{ job.title }}</div>
    </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';

export default {
    data() {
        return {
            JobsList: []
        }
    },
    created() {
        fetchJobsList()
            .then(response => this.JobsList = response.data)
            .catch(error => console.log(error));
    }
}
</script>

<style>

</style>