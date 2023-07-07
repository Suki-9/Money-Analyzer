<script>
import Cookie from "@/components/js/Cookie.js"

export default {
  data() {
    return {
    }
  },
  setup() {
    //トークンがない場合認証画面に飛ばす
    if (!Cookie.read("refresh_token"))
      window.location = "./OAuth"
  },
  methods: {

  }
}
</script>

<template>
  
</template>
