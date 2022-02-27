<template>
    <div>
        <div v-for="job in this.$store.state.jobs" v-bind:key="job.titl">{{ job.title }}</div>
    </div>
</template>

<script>

export default {
    created() {
        this.$stroe.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>