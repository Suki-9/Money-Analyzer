<script setup>
let n = 5
</script>

<template>
    <div class="main_content">
        <a>{{ n }}</a>
        <a @click="createDriveFile">たぐ</a>
    </div>
</template>

<style scoped>
.main_content {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1000px;
}
</style>