<template>
    <div>
        <recaptcha
                @error="onError"
                @success="onSuccess"
                @expired="onExpired"
        />
    </div>
</template>

<script>

    export default {
        data(){
            return {

            }
        },
        methods: {
           /* onSubmit: function () {
                this.$refs.otpRecaptcha.execute()
            },
            onVerify: function (response) {
                //console.log('Verify: ' + response);
                this.$root.$emit('recaptchaVerify', {
                    recaptchaVerifyVal: response,
                });
            },
            onExpired: function () {
                //console.log('Expired');
                this.resetRecaptcha();
            },
            resetRecaptcha () {
                //console.log("called resetRecaptcha : " );
                this.$refs.otpRecaptcha.reset() // Direct call reset method
            }*/
            onError (error) {
                console.log('Error happened:', error)
            },
            onSuccess (token) {
                console.log('Succeeded:', token);
                /*this.$root.$emit('recaptchaVerify', {
                    recaptchaVerifyVal: token,
                });*/
            },
            onExpired () {
                console.log('Expired')
            }
        }
    }
</script>