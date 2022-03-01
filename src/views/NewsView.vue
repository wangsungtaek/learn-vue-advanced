<template>
    <div>
        <div v-for="user in getNews" v-bind:key="user.title">{{ user.title }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getNews']),
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>