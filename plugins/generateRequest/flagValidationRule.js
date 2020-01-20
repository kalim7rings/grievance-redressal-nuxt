let flagRule = (categoryType) => {
    switch (categoryType){
        case 'D':
            return 'deposit_no';
        case 'E' :
            return 'email';
        case 'M' :
            return 'mobile_no';
        case 'F' :
            return 'file_no';
        case 'L' :
            return 'file_no';
        case 'S' :
            return 'file_no';
        default:
            return '';
    }
}

export default flagRule;