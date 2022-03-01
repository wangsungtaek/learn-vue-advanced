<template>
    <div>
        <div v-for="ask in getAsk" v-bind:key="ask.title">{{ ask.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getAsk'])
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>