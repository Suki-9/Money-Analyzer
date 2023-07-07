<script>

</script>
<script>
import Cookie from "@/components/js/Cookie.js"

export default {
  data() {
    return {
    }
  },
  setup() {
    if (!Cookie.read("refresh_token")) {
      window.location = "./OAuth"
    }
  },
  methods: {

  }
}
</script>


<template>
</template>
