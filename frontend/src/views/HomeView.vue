<script setup>
import Methods from '@/api/methods'
const Get = GetCookie()
const Cookie = Get[0]
const index = Get[1]

function GetCookie() {
    const Cookie = document.cookie.split(";")
    const Cookies = []
    const index = []
    for (let i=0;i<Cookie.length;i++) {
        let elem = Cookie[i].split("=")
        Cookies.push(elem)
        index.push(elem[0])
    }
    return [Cookies,index]
}

function leadCookie(key) {
    let i = index.indexOf(key)
    if (i !== -1) {
        return Cookie[i][1]
    } else {
        return null
    }
}
async function AuthReDirect() {
  let response = await Methods.Auth2URL()
  console.log(response["data"]["AuthURL"])
  window.open(response["data"]["AuthURL"],);
}
if (leadCookie("API_TOKEN") == null) {
    AuthReDirect()
}
</script>

<template>

</template>
