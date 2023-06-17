<script setup>

</script>

<template>
    <div class="Head_Bar">
        <div class="SiteTitle">
            <img class="SiteTitle_icon" src="./icons/analysis.svg">
            <p>Money-Analyzer!</p>
        </div>
        <div class="Link_Box">
            <a class="Head_Bar_Link">一覧</a>
            <a class="Head_Bar_Link">グラフ</a>
            <a class="Head_Bar_Link">設定</a>
        </div>
    </div>
</template>

<style scoped>
.Head_Bar {
    display: flex;
    align-items: center;
    min-width: max(100vw, 900px);

    text-align: center;

    border-bottom: solid 1px rgb(255, 255, 255);
}
.Link_Box {
    width: max(68vw, 580px);
    margin: 0.3% max(2vw, 20px) 0.3% 0;

    display: flex;
    justify-content: space-around;
    
}
.SiteTitle {
    width: max(28vw, 280px);
    margin: 0.3% 0 0.3% max(2vw, 20px);

    display: flex;
    align-items: center;
    justify-content: center;

    border-right: solid 1px rgb(209,27,179);
    border-left: solid 1px rgb(209,27,179);

    font-size: 160%;
}
.SiteTitle_icon{
    margin: 0 2% 0 0;
    height: 20px;
}
.Head_Bar_Link {
    width: max(10vw, 100px);
    border-right: solid 1px rgb(209,27,179);
    border-left: solid 1px rgb(209,27,179);
}
</style>