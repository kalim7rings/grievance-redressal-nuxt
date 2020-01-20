<template>
    <div>
        <!--{{ route('grievance.verify.otp') }}-->
        <form id="frmVerifyOtp" name="frmVerifyOtp" method="post" v-show="showVerifyOtpForm">
            <div id="otp-component" class="otp-component form-item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label for="otp-category" class="control-label ">Enter OTP</label>
                <input type="password" name="otp_code" maxlength="6" id="otp-category" autocomplete="false">
            </div>
            <div class="otp-category-button clearfix">
                <button class="submit-otp button btn" type="submit" id="btn-verify-otp" value="Submit">Submit otp</button>
                <a class="resend-otp button btn rounded-croner" id="btn-resend-otp">resend otp</a>
            </div>
        </form>
    </div>
</template>
<script>
        export default {
            data(){
                return {
                    showVerifyOtpForm : false,
                }
            },
            methods :{

            },
        }
</script>