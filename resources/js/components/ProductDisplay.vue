<template>
    <div class="display">
        <img :src="url" alt="">
        <router-link :to="`product/${id}`" ><h2>{{title}}</h2></router-link>
    </div>
</template>

<script>
    export default {
        name: "ProductDisplay",
        props: ['url', 'title', 'id', 'product']
    }
</script>

<style scoped>
    .display{
        position: relative;
        box-shadow: 10px 10px 30px rgba(77, 192, 181, .2);

        height: 90%;
        width: 80%;
        text-align: center;
        scroll-behavior: smooth;

    }
    .display:hover{
        transform: scale(.98);
    }

    img{
        height: 100%;
        width: 100%;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    h2{
        position: absolute;
        color: #95c5ed;
        top: 100%;
    }
    @media only screen and (max-width: 1350px) {
        h2 {
            font-size: 14px;
        }
    }


    @media only screen and (max-width: 750px) {
        h2 {
            font-size: 12px;
        }
    }


    @media only screen and (max-width: 600px) {
        h2 {
            font-size: 10px;
        }
    }
</style>
