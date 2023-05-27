<script setup>

</script>

<template>
  <div class="BottomBox">
      <form @submit.prevent="addTodo" class="AddForm">
        <div class="BottomBox_upper">
          <input v-model="NewElem_name" name="NewElem_name" placeholder="名目を入力" class="AddTextForm AddTextForm_name" >
          <input v-model="NewElem_value" name="NewElem_value" placeholder="金額を入力" class="AddTextForm AddTextForm_value">
        </div>
        <div class="BottomBox_lower">
          <div class="DropDownListBox">
            <select class="DropDownList_Y DropDownList">
              <option v-for="n in 40" :key="n" :value="n + 1999">{{ n + 1999 }} </option>
            </select><p class="DropDownList_text">年</p>
            <select class="DropDownList_M DropDownList">
              <option v-for="n in 12" :key="n" :value="n">{{ n }} </option>
            </select><p class="DropDownList_text">月</p>
            <select class="DropDownList_D DropDownList">
              <option v-for="n in 31" :key="n" :value="n">{{ n }} </option>
            </select><p class="DropDownList_text">日</p>
          </div>
          <input name="NewElem_tag" placeholder="タグを入力" value="" class="AddTextForm AddTextForm_tag">
          <button class="AddFormButton">
            <img src="./icons/task_alt.svg" class="AddFormButton_img">
            <p>Add!</p>
          </button>
        </div>
      </form>
  </div>
</template>

<style scoped>
@import './css/AddForm.css';
.BottomBox {
  margin: 0;
  position: absolute;
  bottom: 0vh;

  border-radius: 1vh 0 0 0;

  background-color: rgba(127, 255, 212, 0.863);
}
</style>
