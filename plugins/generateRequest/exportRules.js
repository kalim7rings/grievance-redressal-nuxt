import { extend as ValidationRulesExtend} from 'vee-validate';
//import { min, required, email as email, oneOf } from "vee-validate/dist/rules";

//ValidationRulesExtend("required", required);
//ValidationRulesExtend("email", email);

/*ValidationRulesExtend("email", {
    validate: v => {
        return {
            //required: true,
            email: true
        };
    },
    message: 'Enter valid email id...'
});*/

ValidationRulesExtend("required", {
    computesRequired: true,
    validate: v => {
        return {
            valid: v.trim().length > 0,
            required: true
        };
    },
    message: field => `${field} is required.`
});

ValidationRulesExtend('deposit_no', {
                validate: value => value.match(/^[A-Za-z]{2}\/[0-9]*$/g) !== null,
                message: 'Invalid deposit number.'
            });

ValidationRulesExtend('mobile_no', {
    validate: value => value.match(/^\d{10}$/g) !== null,
    message: 'Invalid mobile number.'
});

ValidationRulesExtend('file_no', {
    validate: value => value.match(/^\d{10}$/g) !== null,
    //message: 'Enter valid data.'
});

ValidationRulesExtend('email', {
    validate: value => value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g) !== null,
    message: 'Enter valid email id.'
});

/*extend("required", required);
extend("min", min);
extend("email", email);
extend("oneOf", oneOf);*/

/*extend('upCase', {
    getMessage: () => "One uppercase character",
    validate: value => value.match(/[A-Z]/g) !== null
});*/

/*extend('number', {
    getMessage: () => "One number",
    validate: value => value.match(/[0-9]/g) !== null
});*/

ValidationRulesExtend('recaptcha', {
    validate(value){
        console.log(value);
        console.log(recaptcha.getResponse());
        return grecaptcha.getResponse() != '';
    },
    message: 'Recaptcha field is required.'
});

ValidationRulesExtend('lengthBetween', {
    validate: (value, { min, max }) => {
        const length = value && value.length;

        return length >= min && length <= max;
    },
    params: ['min', 'max'],
    message: 'The {_field_} length must be between {min} and {max}'
});

ValidationRulesExtend('secret', {
    validate: value => value === 'example',
    message: 'Invalid deposit number.'
});


export default ValidationRulesExtend;