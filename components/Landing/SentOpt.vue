<template>
    <div class="panel panel-default panel-default-1 user_consent_section" v-show="showSendOtpSection">
        <div id="collapse1" class="panel-collapse collapse show" aria-expanded="true">
            <div class="panel-body">
                <div class="panel-group" id="nested1">
                    <div id="user-consent">
                        <span class="error-msg block font-size10 red-color text-center"></span>

                        <div class="form-item is_allowed_section" v-show="showIsAllowedSection">
                            <span class="send_otp_msg"></span>
                            <div class="clearfix">
                                <a href="https://www.hdfc.com" class="next-button btn btn-ok" data-flag="" style="margin-top: 25px;">OK</a>
                                <a href="https://www.hdfc.com" class="btn rounded-croner btn-cancel" style="margin-top: 25px;">Cancel</a>
                            </div>
                        </div>

                        <!--{{ route('grievance.send.otp') }}-->
                        <form id="frmConsentConfirmation" name="frmConsentConfirmation" method="post" v-show="showConsentConfirmationForm">
                            <div class="form-item form-type-checkbox form-item-conformation checkbox">
                                <label for="edit-conformation" class="control-label option">
                                    <input class="form-checkbox required" type="checkbox" id="edit-conformation" name="confirmation" value="YES" required="required" aria-required="true">
                                    I hereby give my consent to HDFC Ltd to use my mobile number & email ID for sending me the OTP.
                                </label>
                            </div>
                            <button class="next-button btn clearfix submit-for-otp" type="submit" id="btn-send-otp" value="Submit">Submit for otp</button>
                        </form>

                      @@@@  {{ storeIsAllowedFlag }}

                        <verifyOTP/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import verifyOTP from '~/components/Landing/VerifyOtp.vue';
    import abortOrAllow from '~/plugins/generateRequest/abortOrAllowToConsents';

    export default {
        components:{
            verifyOTP,
        },
        data(){
            return {
                showSendOtpSection : true,
                showIsAllowedSection : false,
                showConsentConfirmationForm : false,
                isAllowedFlag : this.$store.state.storeIsAllowedFlag ? 'YES' : 'not AWAILABLE',
            }
        },
        created(){
            console.log('storeIsAllowedFlag created:');
            console.log(this.$store.state.storeIsAllowedFlag);
        },
        methods:{
            showHideRespectiveDiv(){
                /*console.log('storeIsAllowedFlag methods:');
                console.log(this.$store.state.storeIsAllowedFlag);
                console.log('methods storeIsAllowedFlag methods:');
                console.log(this.storeIsAllowedFlag);*/
                abortOrAllow(this.storeIsAllowedFlag);
            },
        },
        mounted() {
            //this.showHideRespectiveDiv();
            this.$store.watch(
                function(state) {
                    state.storeIsAllowedFlag;
                },
                () => {
                    console.log('call watch...');
                    this.showHideRespectiveDiv();
                },
                { deep: true }
            )
        },
        computed : {
            ...mapState([
                'storeIsAllowedFlag',
            ]),
            /*...mapState({    // use spread operator to merge this into computed properties object
                mycount: count => state.count  // gets 'count' from root-store
            }),*/
        },
       /* watch: {
            color: {
                deep: true,
                handler(newColor) {
                    this.showHideRespectiveDiv();
                    console.log("Oh, look, a new color!");
                }
            }
        },*/
    }
</script>