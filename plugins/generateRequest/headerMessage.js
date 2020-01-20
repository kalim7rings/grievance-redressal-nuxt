let message = (param) => {

      switch (param){
          case '50' :
              return {
                  'header' : 'Grievance Redressal Level 2',
                  'breadcrum' : 'Grievance Redressal Level 2',
              };
          case '44' :
              return {
                  'header' : 'Grievance Redressal Level 1',
                  'breadcrum' : 'Grievance Redressal Level 1',
              };
          default:
              return{
                  'header' : 'Complaints Form',
                  'breadcrum' : 'Complaints Form',
              };
      }
};

export default message;