<script setup>
let now = new Date()
</script>
<script>
var memo_bool = 0
var tag_bool = 0 
function memo_Switch()
{
    if(memo_bool == 0)
    {
        memo_bool = 1
        document.getElementById("memo").innerHTML = "▽めも";
        document.getElementById("memo_tex").style.display = "flex"

    } else {
        memo_bool = 0
        document.getElementById("memo").innerHTML = "▷めも";
        document.getElementById("memo_tex").style.display = "none"
    }
}
function tag_Switch()
{
    if(tag_bool == 0)
    {
        tag_bool = 1
        document.getElementById("tag").innerHTML = "▽たぐ";
        document.getElementById("tag_select").style.display = "flex"

    } else {
        tag_bool = 0
        document.getElementById("tag").innerHTML = "▷たぐ";
        document.getElementById("tag_select").style.display = "none"
    }
}
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
                    <option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
                </select><p>日</p>
            </div>
            <div class="Value">
                <input value="" type="number" class="Value_input" />
                <p>円</p>
            </div>
            <div class="memo">
                <div class="memo_Bar">
                    <a @click="memo_Switch" id="memo">▷めも</a>
                </div>
                <textarea class="Tex" value="" id="memo_tex">
                </textarea>
            </div>
            <div class="tag">
                <div class="tag_Bar">
                    <a @click="tag_Switch" id="tag">▷たぐ</a>
                </div>
                <div class="tag_select" id="tag_select">
                    <img src="./icons/svg/tag.svg" class="tag_icon">
                    <select name="tag" class="tag_selectmenu">
                        <option></option>
                    </select>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
@import './css/popup.css';
.Add_Popup {
    width: 30vw;
    min-width: 450px;

    position: absolute;
    top: 20%;
    left: 35vw;

    border: solid 1px rgb(255, 255, 255);
    border-radius: 10px;

    background-color: rgb(0, 0, 0);

    box-shadow: 0 4px 3px #b91b653d;
}
</style>