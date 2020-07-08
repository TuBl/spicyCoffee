<template>
    <div class="grid-container">
        <header>
            <router-link to="/products" class="btn a-btn">Return to browsing</router-link>
        </header>
        <form action="/charge" method="POST" id="payment-form" @submit.prevent="pay()">
            <div class="form-group">
                <label for="name_on_card">Name on Card</label>
                <input type="text" class="form-control" id="name_on_card" name="name_on_card" v-model="name_on_card">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="card-element">Credit Card</label>
                <CardElement></CardElement>
            </div>

            <!-- CSRF Field -->
            <input type="hidden" name="_token" :value="csrf">
            <input type="hidden" name="total" v-model="total">
            <div class="spacer"></div>

            <button type="submit" class="btn btn-success">Submit Payment</button>
        </form>
    </div>

</template>

<script>
    import { createToken, Card } from 'vue-stripe-elements-plus'
    import CardElement from "./CardElement";
    export default {
        components: {CardElement},
        data () {
            return {
                csrf: document.head.querySelector('meta[name="csrf-token"]').content,
                name_on_card: '',
                email: '',
                total: this.$route.params.total,

            }
        },
        methods: {
            pay () {
                // createToken returns a Promise which resolves in a result object with
                // either a token or an error key.
                // See https://stripe.com/docs/api#tokens for the token object.
                // See https://stripe.com/docs/api#errors for the error object.
                // More general https://stripe.com/docs/stripe.js#stripe-create-token.
                let options = {
                    name: this.name_on_card,
                    email: this.email,
                }
                createToken(options).then(result => {
                    // var form = document.getElementById('payment-form');
                    let hiddenInput = document.createElement('input');
                    hiddenInput.setAttribute('type', 'hidden');
                    hiddenInput.setAttribute('name', 'stripeToken');
                    hiddenInput.setAttribute('value', result.token.id);
                    this.$el.getElementsByTagName('form')[0].appendChild(hiddenInput);
                    // Submit the form
                    this.$el.getElementsByTagName('form')[0].submit();
                })
            }
        }
    }
</script>
<style>


    .grid-container{
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: .1fr auto;
        grid-template-areas:
            "head"
            "form"
    ;
    }
    header{
        grid-area: head;
        padding: 10px 16px;
        width: 100%;
        height: 100%;
        background-color: #171a1d;
        display: flex;

    }

    header > a{
        margin-left: 1rem;
    }
    form{
        grid-area: form;
        width: 100%;
        height: 100%;
        padding: 2rem;
        background-color: #171a1d;
        color: #4dc0b5;



    }

    .form-control{
        background-color: white;
        width: 100%;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #ccd0d2;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }

    .form-group{
        width: 80%;
        margin-bottom: 1rem;

    }
    .spacer {
        margin-bottom: 24px;
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

    /**
     * The CSS shown here will not be introduced in the Quickstart guide, but shows
     * how you can use CSS to style your Element's container.
     */
    .StripeElement {
        background-color: white;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #ccd0d2;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }
    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }
    .StripeElement--invalid {
        border-color: #fa755a;
    }
    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
    #card-errors {
        color: #fa755a;
    }

    @media only screen and (max-width: 1650px){
       header > a{
            margin-left: 1.1rem;
        }
    }
    /*@media only screen and (max-width: 1450px){*/
    /*    header > a{*/
    /*        margin-left: 1.15rem;*/
    /*    }*/
    /*}*/

    /*@media only screen and (max-width: 1250px){*/
    /*    header > a{*/
    /*        margin-left: 1.3rem;*/
    /*    }*/
    /*}*/

    /*@media only screen and (max-width: 1000px){*/
    /*    header > a{*/
    /*        margin-left: 1.4rem;*/
    /*    }*/
    /*}*/

    /*@media only screen and (max-width: 700px){*/
    /*    header > a{*/
    /*        margin-left: 1.6rem;*/
    /*    }*/
    /*}*/
</style>
