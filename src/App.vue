<template>
    <div id="app" class="wrapper">
        <router-view></router-view>
        <main-tab-bar/>
    </div>
</template>

<script>

    import MainTabBar from "./components/content/MainTabBar";

    export default {
        name: 'app',
        components: {MainTabBar}
    }
</script>

<style>
    /*@import 引用css文件*/
    @import "./assets/css/base.css";
</style>
