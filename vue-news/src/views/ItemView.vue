<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile>
                <div slot="username">
                    <router-link v-bind:to="`/user/${getItem.user}`">
                        {{ getItem.user }}
                    </router-link>
                </div>
                <template slot="time">{{ 'Posted ' + getItem.time_ago }},</template>
            </user-profile>
        </section>
        <section>
            <h2>{{ getItem.title }}</h2>
        </section>
        <hr>
        <section>
            <div v-html="getItem.content">
            </div>
        </section>
    </div>
</template>

<script>
import UserProfile from '../components/Userprofile.vue';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getItem'])
    },
    created() {
        const askid = this.$route.params.id;
        
        this.$store.dispatch("FETCH_ITEM", askid);
    },
    components: {
        UserProfile,
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-content: center;
    padding: 0.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>