<template>
    <div>
        <div v-for="ask in this.$store.state.ask" v-bind:key="ask.title">{{ ask.title }}</div>
    </div>
</template>

<script>

export default {
    created() {
        this.$stroe.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>