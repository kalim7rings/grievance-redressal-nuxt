<template>
    <div class="header">
        <div class="logo">
            <img :src="logo">
        </div>
    </div>
</template>
<script>

    import Logo from '@/assets/images/logo_hdfc.png';

    export default {
        data(){
            return {
                logo : Logo,
                //logo : `${process.env.imageUrl}logo_hdfc.png`,
            }
        },
        mounted : function () {

        }
    }
</script>