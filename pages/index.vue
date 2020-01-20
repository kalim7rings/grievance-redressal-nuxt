<template>
  <div class="hdfc-grievance-wrapper two-column">
    <div class="grievance-middle-content">
      <sideBar/>
      <div class="right-column hdfc-grievance hdfc-write-to-us-form">
        <div class="grievance-breadcrumbs">
          <ol class="breadcrumb">
            <li><a href="https://www.hdfc.com">Home</a></li>
            <li> {{ storeHeaderMessage.breadcrum }}</li>
          </ol>
        </div>
        <div class="hdfc-grievance-content">
          <div class="hdfc-grievance-title">
            <h1> {{ storeHeaderMessage.header }}</h1>
          </div>
          <div id="write-to-us">
            <div class="panel-group" id="hdfc-grievance-redressal">
              <!--<generateRequest/>
              <verifyOtp></verifyOtp>-->
              <landingPage/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';
import HeaderMessages from '~/plugins/generateRequest/headerMessage';

import sideBar from './../components/Partials/SideBar.vue';
import landingPage from './../components/Landing/index.vue';
//import generateRequest from './../components/Landing/GenerateRequest.vue';
//import sendOtp from './../components/SentOpt.vue';
//import verifyOtp from './../components/VerifyOtp.vue';

export default {
    layout: 'index',
    /*validate ({ params }) {
        console.log(params);
        //return !isNaN(+params.id)
    },*/
    components: {
        sideBar,
        landingPage,
        //sendOtp,
        //generateRequest,
        //verifyOtp
    },
    data() {
        return {

        }
    },
    methods :{
        ...mapMutations(['SET_HEADER_MASSAGE_BASIS_OF_REFCODE','SET_REFCODE','SET_CURRENT_URL']),
        setHeaderMessages(){
            //console.log(this.$route.query.refcode);
            //console.log(this.$route.query.refcode);
            this.SET_HEADER_MASSAGE_BASIS_OF_REFCODE(HeaderMessages(this.$route.query.refcode));
        },
    },
    created () {

    },
    mounted(){
        this.SET_REFCODE(this.$route.query.refcode);
        this.SET_CURRENT_URL(window.location.href);
        this.setHeaderMessages();
        console.log('storeRefCode');
        console.log(this.$store.state.storeRefCode);
        console.log(this.$store.state.storeCurrentURL);
        //console.log(process.env.baseUrl);
        //console.log(process.env.WEB_API_URL);
        //console.log(process.env.imageUrl);
        //console.log(process.cwd());
    },
    computed:{
        ...mapState(['storeHeaderMessage']),
    }
}
</script>