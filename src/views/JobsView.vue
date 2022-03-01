<template>
    <div>
        <div v-for="job in getJobs" v-bind:key="job.titl">{{ job.title }}</div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getJobs']),
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>