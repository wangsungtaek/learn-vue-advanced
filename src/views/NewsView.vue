<template>
    <div>
        <!-- <div v-for="user in getNews" v-bind:key="user.title">{{ user.title }}</div> -->
        <p v-for="item in getNews" v-bind:key="item.title">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>
                {{ item.time_ago }} by 
                <router-link v-bind:to="`/user/${ item.user }`">
                    {{ item.user }}
                </router-link>
            </small>
        </p>
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