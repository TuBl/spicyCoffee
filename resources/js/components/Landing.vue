<template>
    <div class="showcase">
        <div class="image-container">
            <img src="../assets/coffee-drinks-cookie-cup.jpeg" alt="">
        </div>
        <div class="content">
            <h1>Start your coffee adventure today..</h1>
            <router-link to="products" class="btn">Products</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing.vue"
    }
</script>

<style scoped>
    .showcase {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
        color: #fff;
    }


    .image-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: var(--primary-color) url("../assets/coffee-drinks-cookie-cup.jpeg") no-repeat center
        center/cover;
    }

    .image-container img {
        min-width: 100%;
        min-height: 100%;
        /* similar to background size for image */
        background-size: cover;
        /* To make it stay in the middle when resized */
        position: absolute;
        top: 50%;
        left: 50%;
        /* to make it start from the middle instead of the edges */
        transform: translate(-50%, -50%);
    }

    .image-container::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    .content {
        z-index: 10;
    }


    .btn {
        display: inline-block;
        padding: 10px 30px;
        background: #3a4052;
        color: #fff;
        border: 1px #fff solid;
        border-radius: 5px;
        margin-top: 25px;
        opacity: 0.7;
    }

    .btn:hover {
        transform: scale(0.98);
    }



    /*.grid-container{*/
    /*    position: relative;*/
    /*    display: grid;*/
    /*    grid-template-columns: 1fr;*/
    /*    grid-template-rows: 1fr;*/
    /*    place-items: center;*/
    /*    text-align: center;*/
    /*    width: 100vw;*/
    /*    height: 100vh;*/
    /*}*/

    /*.landing-image{*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    overflow: hidden;*/
    /*    background: url("../assets/architecture-design-modern-house-pool-others-7016.jpg");*/
    /*}*/

</style>
