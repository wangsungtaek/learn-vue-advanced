<template>
    <div class="user-container">
        <div>
            이미지 영역
        </div>
        <div class="user-description">
            <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <div class="time">
                <slot name="time">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
            <slot name="karma">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
        </div>
    </div> 
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
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