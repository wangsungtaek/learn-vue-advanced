<template>
    <div>
        <user-profile>
            <div slot="username">{{ getUser.id }}</div>
            <span slot="time">{{ 'Joined ' + getUser.created }},</span>
            <span slot="karma">{{ getUser.karma }}</span>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/Userprofile.vue';

export default {
    computed: {
        getUser() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;

        this.$store.dispatch("FETCH_USER", userName);
    },
    components: {
        UserProfile,
    }
}
</script>

<style>

</style>