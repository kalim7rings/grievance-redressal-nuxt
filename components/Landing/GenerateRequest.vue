<template>
    <div class="panel panel-default panel-default-0 user_input_section">
        <div id="collapse0" class="panel-collapse show">
            <div class="panel-body">
                <div class="panel-group" id="nested0">
                    <div id="user-input">
                        <span class="error-msg block font-size10 red-color text-center"></span>

                        <ValidationObserver v-slot="{ passes }">
                            <!--{{ route('grievance.generate.request') }}-->
                            <form @submit.prevent="passes(generateRequest)" id="frmProductType" name="frmProductType" class="product-type" method="post">
                                <!--{{ csrf_field() }}-->
                                <div class="product_type_section">
                                    <div class="loan-type">
                                        <div class="form-item form-type-radio form-item-product-type radio">
                                            <label for="edit-product-type-home-loan" class="control-label option" :class="{checked:productsDetails.product_type == 'LOANS'}" @click="setCategoryType('LOANS')">
                                                <input class="edit-product-type--wrapper form-radio" type="radio" id="edit-product-type-home-loan" v-model="productsDetails.product_type" name="product_type" value="LOANS" checked="checked" required="required" aria-required="true">HOME LOAN
                                            </label>
                                        </div>
                                        <div class="form-item form-type-radio form-item-product-type radio">
                                            <label for="edit-product-type-deposits" class="control-label option" :class="{checked:productsDetails.product_type == 'DEPOSITS'}"  @click="setCategoryType('DEPOSITS')">
                                                <input class="edit-product-type--wrapper form-radio" type="radio" id="edit-product-type-deposits" v-model="productsDetails.product_type" name="product_type" value="DEPOSITS" required="required" aria-required="true">DEPOSITS
                                            </label>
                                        </div>
                                    </div>


                                    <ValidationProvider name="This" rules="required" v-slot="{ errors }">
                                        <div id="component-category" class="form-item form-type-select form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="category" class="control-label ">Please choose any of the options below</label>
                                            <div class="input-group">
                                                <div class="select-wrapper">
                                                    <select class="form-select required form-control" v-model="productsDetails.category_type" @change="setFlagLabel($event)" id="category" name="category_type">
                                                        <option value="" selected>--Select--</option>
                                                        <option v-for="category in getCategoryList" :value="category.value">{{category.name}}</option>
                                                    </select>
                                                    <span class="red-color">{{ errors[0] }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </ValidationProvider>
                                    <!--<button class="next-button btn clearfix" type="button" id="btn-next" name="op" value="Submit">NEXT</button>-->
                                </div>

                                <div class="loan_account_section clearfix" v-if="productsDetails.category_type">

                                    <ValidationProvider :name="getFlagLabel" :rules="`required|${flagValidationType}`" v-slot="{ errors }">
                                        <div id="selected-component-category" class="selected-component-category form-item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label for="choose-category" class="control-label" id="flagLabel"> Enter {{flagLabel}}</label>
                                            <input type="text" v-model="productsDetails.flag_value" name="flag_value" id="choose-category" placeholder="">
                                            <span class="red-color">{{ errors[0] }}</span>
                                            <!--<span class="red-color">{{ getFlagLabel }} is required.</span>-->
                                        </div>
                                    </ValidationProvider>


                                    <div class="clearfix form-group form-item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <ValidationProvider name="recaptcha" rules="recaptcha" v-slot="{ errors }">
                                            <div class="form-group">
                                                <GoogleRecaptcha v-model="productsDetails.recaptcha"/>
                                            </div>
                                            <span class="red-color">{{ getRecaptchaMessage }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="clearfix form-item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <button class="next-button btn " type="submit" id="edit-submit" name="op" value="Submit">Submit to verify</button>
                                        <!--<a class="btn-back cursor">Back</a>-->
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import { ValidationObserver, ValidationProvider} from 'vee-validate';
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    import Categories from '~/plugins/generateRequest/productType';
    import FlagRule from '~/plugins/generateRequest/flagValidationRule';
    import ExtendRules from '~/plugins/generateRequest/exportRules';
    import GoogleRecaptcha from '~/components/Lib/RecaptchaComponent.vue';

    export default {
        name: 'SendOtp',
        components : {
            ValidationObserver,
            ValidationProvider,
            GoogleRecaptcha
        },
        mounted() {
            ExtendRules;
        },
        data() {
            return {
                productsDetails : {
                    product_type : this.$store.state.storeBusinessType,
                    category_type : '',
                    flag_value : '',
                    recaptchaVal : '',
                },
                recaptchaMessage : '',
                flagLabel : '',
                flagValidationType : '',
            }
        },
        methods: {
            //...mapMutations(['SET_HEADER_MASSAGE_BASIS_OF_REFCODE','SET_REFCODE','SET_CURRENT_URL']),
            ...mapMutations([
                'SET_BUSINESS_TYPE', 'SET_FLAG', 'SET_FLAG_VALUE', 'SET_REQUEST_ID', 'SET_IS_ALLOWED_FLAG', 'SET_SUBMODE', 'ADD_LINK','REMOVE_ALL'
            ]),
            ...mapActions([
                'removeLink',
                'removeAll',
            ]),
           async generateRequest() {

               console.log('storeRefCode22');
               console.log(this.$store.state.storeRefCode);

                try {
                    const token = await this.$recaptcha.getResponse();
                    this.recaptchaMessage = '';
                    //console.log('ReCaptcha token:', token)

                    let payloads = {
                        //_token: document.head.querySelector('meta[name="csrf-token"]').content,
                        'g-recaptcha-response' : token,
                        i_flag : this.productsDetails.category_type,
                        i_flag_value : this.productsDetails.flag_value,
                        i_business_type : this.productsDetails.product_type,
                        i_key1: this.$store.state.storeRefCode,
                    };


                    let response = await this.$axios.$post(`/generate-request`, payloads);

                    console.log("@@response : ");
                    console.log(response);

                    if(response.status){
                        console.log("payloads: ******* ");
                        console.log(payloads);
                        console.log(this.productsDetails);

                        //this.SET_FLAG(this.productsDetails.category_type);
                        //commit('SET_FLAG', this.productsDetails.category_type);

                        this.SET_FLAG(this.productsDetails.category_type);
                        this.SET_FLAG_VALUE(this.productsDetails.flag_value);
                        this.SET_REQUEST_ID(response.data.RequestId);
                        //this.SET_IS_ALLOWED_FLAG(response.data.ALLOWED_TO_PROCEED);
                        let keyVal = 'N';
                        this.SET_IS_ALLOWED_FLAG(keyVal);
                        this.SET_SUBMODE(response.data.SUBMODE);
                        return;
                    }

                    /*this.$axios
                        .$post(`/generate-request`, payloads)
                        .then(function(response) {
                            debugger;
                            if(response.status){

                                console.log(": " + );
                                
                                commit('SET_FLAG', this.productsDetails.category_type);


                                this.SET_FLAG(this.productsDetails.category_type);
                                this.SET_FLAG_VALUE(this.productsDetails.flag_value);
                                this.SET_REQUEST_ID(response.data.RequestId);
                                this.SET_SUBMODE(response.data.SUBMODE);
                                //this.SET_IS_ALLOWED_FLAG(response.data.ALLOWED_TO_PROCEED);
                                this.SET_IS_ALLOWED_FLAG('Hii Kalim');

                                //response.data.ReqMsg
                                //response.data.ALLOWED_TO_PROCEED

                                console.log("@@response : ");
                                console.log(response);
                            }
                        })
                        .catch((e) => {
//                            debugger;
//                            if(e.response.status === 422){
//                                this.likedText = e.response.data.data;
//                            }
                        });*/
                    return;
                } catch (error) {
                    this.recaptchaMessage = 'Recaptcha field is required.';
                    console.log('Login error:', error)
                }
            },
            setCategoryType(productType) {
                this.SET_BUSINESS_TYPE(productType);
            },
            setFlagLabel(event) {
                this.flagLabel = (event.target.options[event.target.options.selectedIndex].text).toLocaleLowerCase();
                this.productsDetails.flag_value = '';
                this.flagValidationType = FlagRule(this.productsDetails.category_type);
            },
        },
        computed : {
            ...mapState([
                'storeBusinessType',
                'storeRefCode',
                'title',
                'links',
            ]),
            ...mapGetters([
                'countLinks',
            ]),
            getCategoryList : function() {
                return collect(Categories).where('type', this.productsDetails.product_type).all();
            },
            getFlagLabel: function() {
                return this.flagLabel
            },
            getRecaptchaMessage(){
                return this.recaptchaMessage;
            }
        },
        created() {
            /*this.$root.$on('recaptchaVerify', (data) => {
                this.recaptchaMessage = '';
                this.productsDetails.recaptchaVal = data.recaptchaVerifyVal;
            });*/
        },
    }
</script>