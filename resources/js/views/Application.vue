<template>
    <div>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "Application"
    }
</script>

<style >

    :root {
        --primary-color: #3a4052;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        font-family: "Open Sans", sans-serif;
        line-height: 1.5;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: var(--primary-color);
    }

    h1 {
        font-weight: 300;
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 15px;
    }

</style>
