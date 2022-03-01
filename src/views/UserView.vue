<template>
    <div>
        <p>name : {{ getUser.id }}</p>
        <p>karma : {{ getUser.karma }}</p>
        <p>created : {{ getUser.created }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getUser'])
    },
    created() {
        const userName = this.$route.params.id;

        this.$store.dispatch("FETCH_USER", userName);
    }
}
</script>

<style>

</style>