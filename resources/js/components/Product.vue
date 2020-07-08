<template>
    <div style="display: flex; justify-content: center; align-items: center; text-align: center;">
        <router-link to="/products" class="a-top">Products</router-link>

        <div class="product">
            <header class="nav">
                <h3 class="nav-btn">{{product.price}} $</h3>
            </header>
            <div class="image">
                <img :src="product.url" alt="">
            </div>
            <div class="title"><h1>{{product.title}}</h1></div>
            <div class="price"><h1>{{product.price}}$</h1></div>
            <div class="description">
                <p>
                    {{product.description}}
                </p>
            </div>
            <div class="quantity">
                <label for="qty">Quantity:</label>
                    <select name="qty" id="qty" v-model="amount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

            </div>
            <div class="total"><h1>{{total}}$</h1></div>
            <div class="btn-container">
                <router-link :to="`/payment/${total}`" class="btn">Purchase</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Product.vue",
        data(){
            return {
                productId: this.$route.params.id,
                amount: 0
            }
        },
        methods: {
            ...mapActions(['getProducts'])
        },
        mounted() {
          this.getProducts()
        },
        computed:{
            product(){
                return this.$store.state.products.products.find(el => el.product_id === parseInt(this.productId))
            },
            total(){
                return (this.product.price *this.amount).toFixed(2);

            }
        }
    }
</script>

<style scoped>

    h1{
        font-size: 3rem;
    }

    .product{
        display: grid;
        height: 100vh;
        width: 100vw;
        color: #4dc0b5;
        padding: 5rem;
        background-color: #171a1d;
        overflow: hidden;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        /*grid-template-columns: 1fr 1fr 1fr 1fr;*/
        grid-template-rows: .1fr .2fr .6fr .2fr .2fr;

        grid-template-areas:
            "nav         nav        .                   .               ."
            "image      image       title       title    price"
            "image      image       description         description     ."
            "quantity   quantity    total               total           ."
            ".          btn           btn               .               ."
    ;
    }

    header{
        display: none;
        grid-area: nav;
        padding: .625rem 1rem;
        width: 100%;
        height: 100%;
        background-color: #4dc0b5;
        /*display: flex;*/
        justify-content: center;
        position: relative;

    }


    .a-top{
        display: inline-block;
        /*margin-right: auto;*/
        text-align: center;
        position: absolute;
        top: 5%;
        left: 4.4%;
        padding: 6px 20px;
        background: #3a4052;
        justify-self: start;
        color: #fff;
        border: 1px #fff solid;
        border-radius: 10px;
        opacity: 0.7;
    }
    .a-top:hover{
        transform: scale(0.98)
    }
     .nav-btn {
        display: inline-block;
        /*margin-right: auto;*/
        text-align: center;
        position: absolute;
        top: 5%;
        /*left: 5%;*/
        padding: 6px 20px;
        background: #4dc0b5;
        color: #fff;
        /*border: 1px #fff solid;*/
        /*border-radius: 10px;*/
        opacity: 0.7;
    }

    .nav-btn:hover {
        transform: scale(0.98);
    }



    .image{
        grid-area: image;
        border: #4dc0b5 1px solid;
        background-color: #171a1d;
        /*background-color: #1b1e21;*/
    }
    img{
        height: 100%;
        width: 100%;
    }
    .title{
        grid-area: title;
        white-space: pre;
        text-align: justify;
        padding-left: 30px;
        /*background-color: #1b4b72;*/
    }

    .price{
        grid-area: price;
        /*background-color: #1d643b;*/
    }

    .description{
        grid-area: description;
        /*background-color: #4c110f;*/
    }
    .description > p{
        padding: 2rem;
        text-align: justify;
    }

    .quantity{
        grid-area: quantity;
        margin-top: 2rem;
        /*background-color: #4dc0b5;*/

    }

    select{
        width: 50%;
        color: #4dc0b5;
        background-color: #3a4052;
        font-size: 1.2rem;
        text-align: center;
        border: none;
    }


    .total{
        grid-area: total;
        /*background-color: #95c5ed;*/
    }
    .btn-container{
        grid-area: btn;
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


    @media only screen and (max-width: 1650px){
        header{
            display: flex;
        }
        .price{
            display: none;
        }
        .a-top{
            top: 2%;

        }
    }

    @media only screen and (max-width: 1570px){

        .a-top{
            left: 5.5%;

        }
    }
    @media only screen and (max-width: 1470px){

        .a-top{
            left: 6%;

        }
    }

    @media only screen and (max-width: 1270px){
        h1{
            font-size: 2.6rem;
        }

        .a-top{
            left: 6.5%;

        }
    }

    @media only screen and (max-width: 1160px){
        h1{
            font-size: 1.6rem;
        }
        .a-top{
            left: 7%;

        }
    }

    @media only screen and (max-width: 980px){

        .a-top{
            left: 9%;

        }
    }

</style>
