<script>
import axios from 'axios';

export default {
  data(){
    return{
      変数名: 初期値
    }
  },
  mounted(){
    axios
      .get('URL')
      .then(response => (this.変数名 = response))
  }
}
</script>

<template>

</template>
