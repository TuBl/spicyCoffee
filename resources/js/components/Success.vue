<template>
    <div class="grid-container">
        <div class="message">
            <h1>Success... </h1>
            <h2>Thank you for your purchase..</h2>
        </div>
        <div>
            <router-link to="products" class="btn">Products</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Success",


    }
</script>

<style scoped>
.grid-container{
    background-color: #171a1d;

    color: #4dc0b5;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
h1{
    text-align: justify;
}
.btn {
    display: inline-block;
    padding: 10px 30px;
    background: #3a4052;
    color: #4dc0b5;
    border: 1px #fff solid;
    border-radius: 5px;
    margin-top: 25px;
    opacity: 0.7;

}

.btn:hover {
    transform: scale(0.98);
    cursor: pointer;
}
</style>
