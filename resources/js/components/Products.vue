<template>
    <div>
        <div class="products-container">
            <header class="nav">
                <router-link to="/" class="btn">Back</router-link>
            </header>
            <div  class="brewing-devices">
                <product-display v-for="product in productsGetter[0].products"
                                 :key="product.product_id"
                                 :url="product.url"
                                 :title="product.title"
                                 :id="product.product_id"
                                 :product="product"
                ></product-display>
            </div>
            <div  class="coffee-beans">
                <product-display v-for="product in productsGetter[1].products"
                                 :key="product.product_id"  :url="product.url" :title="product.title"
                                 :id="product.product_id"
                                 :product="product"


                ></product-display>

            </div>
            <div   class="supplies">
                <product-display v-for="product in productsGetter[2].products"
                                 :key="product.product_id" :url="product.url" :title="product.title"
                                 :id="product.product_id"
                                 :product="product"

                ></product-display>

            </div>
        </div>
    </div>

</template>

<script>
    import ProductDisplay from "./ProductDisplay";
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "Products",
        components: {
            ProductDisplay
        },
        computed: {
            ...mapGetters(['productsGetter'])
        },
        methods: {
            ...mapActions(['getProducts'])
        },
        mounted() {
            this.getProducts();
        }
    }
</script>

<style scoped>

    .products-container{
        display: grid;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: #171a1d;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-template-rows: .2fr 1fr 1fr 1fr;
        grid-template-areas:
            "nav                nav                 nav"
            "coffee-beans       coffee-beans        coffee-beans"
            "brewing-devices    brewing-devices     brewing-devices"
            "supplies           supplies            supplies";
    }
    header{
        grid-area: nav;
        padding: 10px 16px;
        width: 100%;
        height: 100%;
        /*background-color: #4dc0b5;*/
        display: flex;
        position: relative;

    }

    .btn {
        display: inline-block;
        margin-right: auto;
        text-align: center;
        position: absolute;
        top: 20%;
        left: 4.9%;
        padding: 10px 30px;
        background: #4dc0b5;;
        color: #fff;
        border: 1px #fff solid;
        border-radius: 5px;
        opacity: 0.7;
    }

    .btn:hover {
        transform: scale(0.98);
    }


    .coffee-beans{
        grid-area: coffee-beans;
        /*background-color: #7d512c;*/
        width: 100%;
        height: 100%;
        padding: 2rem;;
        place-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;

    }


    .brewing-devices{
        grid-area: brewing-devices;
        /*background-color: #6f5444;*/
        width: 100%;
        height: 100%;
        padding: 2rem;
        place-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;


    }

    .supplies{
        grid-area: supplies;
        /*background-color: #544a39;*/
        width: 100%;
        height: 100%;
        padding: 2rem;
        place-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;


    }

    @media only screen and (max-width: 1650px){
        .btn{
            margin-left: 9px;
        }
    }
    @media only screen and (max-width: 1450px){
        .btn{
            margin-left: 12px;
        }
    }

    @media only screen and (max-width: 1250px){
        .btn{
            margin-left: 15px;
        }
    }

    @media only screen and (max-width: 1000px){
        .btn{
            margin-left: 18px;
        }
    }

    @media only screen and (max-width: 700px){
        .btn{
            margin-left: 21px;
        }
    }
</style>
