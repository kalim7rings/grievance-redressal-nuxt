<template>
    <div class="panel panel-default panel-default-2">
        <div id="collapse2" class="panel-collapse collapse show" aria-expanded="true">
            <div class="panel-body">
                <div class="panel-group" id="nested2">
                    <div id="write-a-complaint">
                        <!--{{ route('grievance.complaint.store') }}-->
                        <form name="frmComplaint" id="frmComplaint" method="post" action="">
                            <!--{{ csrf_field() }}-->
                            <div class="home-loan-account form-item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="home-loan-account" class="control-label"> header label </label>
                                <input type="text" name="loan_account_number" maxlength="20" value="" readonly="true" id="home-loan-account">
                            </div>
                            <div class="home-loan-Name form-item col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="home-loan-Name" class="control-label ">Name</label>
                                <input type="text" name="customer_name" id="home-loan-Name" value="" readonly="true">
                            </div>
                            <div id="type-of-inquiry-category" class="form-item col-lg-6 col-md-6 col-sm-12 col-xs-12 form-type-select form-group">
                                <label for="inquiry-category" class="control-label ">Type of Inquiry</label>
                                <div class="input-group">
                                    <div class="select-wrapper">
                                        <select class="form-select required form-control get-data" id="inquiry-category" name="inquiry_type" data-data_for="SUB_CATEGORY" data-selector="sub-category" required="required" aria-required="true">
                                            <option value="" selected="selected">--Select--</option>
                                            <option value="" selected="selected">--Select--</option>
                                            <!-- @foreach(data_get($data, 'CATEGORY', []) as $val)
                                             <option value="{{$val['CODE_VALUE']}}" data-type="{{$val['CODE_TYPE']}}">{{$val['CODE_DESC']}}</option>
                                             @endforeach-->
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="type-of-inquiry-sub-category" class="form-item col-lg-6 col-md-6 col-sm-12 col-xs-12 form-type-select form-group sub-category" style="display: none">
                                <label for="sub-category" class="control-label ">Sub Category</label>
                                <div class="input-group">
                                    <div class="select-wrapper">
                                        <select class="form-select required form-control" id="sub-category" name="sub_category" required="required" aria-required="true">
                                            <option value="">--Select--</option>
                                            <option value="">--Select--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="select-country-category" class="form-item col-lg-6 col-md-6 col-sm-12 col-xs-12 form-type-select form-group">
                                <label for="country-category" class="control-label ">Select Country</label>
                                <div class="input-group">
                                    <div class="select-wrapper">
                                        <select class="form-select required form-control get-data" id="country" name="country" data-data_for="STATE" data-selector="state-list" required="required" aria-required="true">
                                            <option value="" selected="selected">Select Country</option>
                                            <option value="" selected="selected">Select Country</option>
                                            <!--@foreach(data_get($data, 'COUNTRY', []) as $val)
                                            <option value="{{$val['CODE_VALUE']}}" data-type="{{$val['CODE_TYPE']}}">{{$val['CODE_DESC']}}</option>
                                            @endforeach-->
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="select-state-category" class="form-item col-lg-6 col-md-6 col-sm-12 col-xs-12 form-type-select form-group country_fields" style="display: none">
                                <label for="state-category" class="control-label ">Select State</label>
                                <div class="input-group">
                                    <div class="select-wrapper">
                                        <select class="form-select required form-control get-data" id="state-list" name="state" data-data_for="CITY" data-selector="city-list"  required="required" aria-required="true">
                                            <option value="">--Select--</option>
                                            <option value="">--Select--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="select-city-category" class="form-item col-lg-6 col-md-6 col-sm-12 col-xs-12 form-type-select form-group country_fields" style="display: none">
                                <label for="city-category" class="control-label ">Select City</label>
                                <div class="input-group">
                                    <div class="select-wrapper">
                                        <select class="form-select required form-control" id="city-list" name="city" required="required" aria-required="true">
                                            <option value="">--Select--</option>
                                            <option value="">--Select--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="select-branch-category" class="form-item col-lg-6 col-md-6 col-sm-12 col-xs-12 form-type-select form-group country_fields" style="display: none">
                                <label for="branch-category" class="control-label ">Reporting Branch</label>
                                <div class="input-group">
                                    <div class="select-wrapper">
                                        <select class="form-select required form-control" id="branch-list" name="branch" required="required" aria-required="true">
                                            <option value="">--Select--</option>
                                            <option value="">--Select--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="write-a-query form-item ">
                                <label for="write-query" class="control-label ">Write a Complaint</label>
                                <textarea name="query" id="write-query" maxlength="4001" rows="2"></textarea>
                            </div>
                            <div class="form-item form-type-checkbox form-item-conformation checkbox">
                                <label for="edit-conformation1" class="control-label option">
                                    <input class="form-checkbox required" type="checkbox" id="edit-conformation1" name="conformation" value="1" required="required" aria-required="true">
                                    I declare that the information I have provided is accurate & complete to the best of my knowledge. I hereby authorize HDFC Ltd. and its affiliates to call and/or send a text through the Short messaging Service (SMS) to me in relation to any of their products.
                                </label>
                            </div>

                            <button class="submit-otp button btn" type="submit" id="btn-submit" value="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>