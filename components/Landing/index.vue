<template>
    <div>
        <generateRequest/>
        <sendOTP/>
    </div>
</template>
<script>
    import generateRequest from '~/components/Landing/GenerateRequest.vue';
    import sendOTP from '~/components/Landing/SentOpt.vue';

    export default {
        components:{
            generateRequest,
            sendOTP
        },
        data(){
            return {

            }
        }
    }

</script>