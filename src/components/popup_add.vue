<script setup>
let now = new Date()
</script>

<template>
    <div class="Add_Popup">
        <form>
            <div class="Date">
                <select name="Year" id="Year">
                    <option hidden>{{ now.getFullYear() }}</option>
                    <option v-for="i in 10" :key="i" :value="i + 2020">{{ i + 2020 }} </option>
                </select><p>年</p>
                <select name="Month" id="Month">
                    <option hidden>{{ now.getMonth() + 1 }}</option>
                    <option v-for="i in 12" :key="i" :value="i">{{ i }} </option>
                </select><p>月</p>
                <select name="Day" id="Day">
                    <option hidden>{{ now.getDate() }}</option>
                    <option v-for="i in n" :key="i" :value="i">{{ i }}</option>
                </select><p>日</p>
            </div>
        </form>
    </div>
</template>

<style scoped>
@import './css/popup.css';
.Add_Popup {
    width: 30vw;

    position: absolute;
    bottom: 50%;
    left: 35vw;

    border: solid 1px rgb(255, 255, 255);
    border-radius: 10px;

    background-color: rgb(0, 0, 0);
}
</style>
