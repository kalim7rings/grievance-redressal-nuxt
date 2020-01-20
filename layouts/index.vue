<template>
    <div>
        <div class="is-vertical">
            <Header></Header>
            <nuxt/>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
    import Header from './../components/Partials/Header.vue';
    import Footer from './../components/Partials/Footer.vue';

    export default {
        components : {
            Header,
            Footer
        }
    }
</script>