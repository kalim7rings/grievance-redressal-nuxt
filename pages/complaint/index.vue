<template>
    <div class="hdfc-grievance-wrapper two-column">
        <div class="grievance-middle-content">
            <Sidebar></Sidebar>
            <div class="right-column hdfc-grievance hdfc-write-to-us-form">
                <div class="grievance-breadcrumbs">
                    <ol class="breadcrumb">
                        <li><a href="https://www.hdfc.com">Home</a></li>
                        <li> {{ stateMessages.breadcrum }} </li>
                    </ol>
                </div>
                <div class="hdfc-grievance-content">
                    <div class="hdfc-grievance-title">
                        <h1> {{ stateMessages.header }} </h1>
                    </div>
                    <div id="write-to-us">
                        <div class="panel-group" id="hdfc-grievance-redressal">
                            <ComplaintForm></ComplaintForm>
                        </div>
                    </div>
                </div>

            <!--@include('grievance::pages.complaint.success')
                @include('grievance::pages.complaint.fail')
                -->

            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import Sidebar from '~/components/Partials/SideBar.vue';
    import ComplaintForm from '~/components/Complaint/ComplaintForm.vue';
    //import Success from './../Complaint/SuccessComponent.vue';
    //import Fail from './../Complaint/FailComponent.vue';

    export default {
        components : {
            Sidebar,
            ComplaintForm,
            //Success,
            //Fail
        },
        data() {
            return {

            }
        },
        computed : {
            ...mapState(['stateMessages'])
        }

    }

</script>