<script setup>
import Methods from '@/api/methods'
import axios from 'axios'
const Get = GetCookie()
const Cookie = Get[0]
const index = Get[1]

//Cookieを取ってきてindexを生成
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

//Cookie検索して任意もkeyを持つ値を返す
function leadCookie(key) {
    let i = index.indexOf(key)
    if (i !== -1) {
        return Cookie[i][1]
    } else {
        return null
    }
}

//URLをバックエンドから取ってきてリダイレクト
async function OAuthReDirect() {
    let response = await Methods.Auth2URL()
    window.open(response["data"]["OAuthURL"],)
    window.close()
}

//読み込み時にAuthorizatioCodeがなければ取ってくる
if (leadCookie("AuthorizatioCode") == null) {
    OAuthReDirect()
} else {
    let response = await Methods.GetToken(leadCookie("AuthorizatioCode"))
    alert(response["data"]["AccessToken"])
}
</script>
<script>
</script>


<template>
</template>
