<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    User
                </div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${getItem.user}`">
                        {{ getItem.user }}
                    </router-link>
                </div>
                <div class="time">
                    {{ getItem.time_ago }}
                </div>
            </div>
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
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getItem'])
    },
    created() {
        const askid = this.$route.params.id;
        
        this.$store.dispatch("FETCH_ITEM", askid);
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