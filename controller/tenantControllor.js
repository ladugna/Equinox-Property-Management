
const datastore = require("../data/tenantsDAO") ; //we need data store



const tenant = require("../model/tenant") ; //we need model


const regiControllor = (function(){


        const getTenantData=function(){
                return datastore.getData() ;
        }


        

const saveData = function(req,res){

        const AppartmentNumber = req.body.AppartmentNumber ; //body.-> the name in the inpit or form-tetx.pug

        const floorNo = req.body.floorNo.AppartmentNumber ;
    const apartmentNo = req.body.apartmentNo.AppartmentNumber ;
    
        
        
        const fullName =req.body.fullName ; //give the same name as in the .pug name when declering 
        const  phoneNumber = req.body.phoneNumber;
        const  email = req.body.email;
        
        const s = new tenant (AppartmentNumber,floorNo,apartmentNo,fullName,phoneNumber ,email);

        datastore.saveData(s);
}

return{
                getTenantData:getTenantData,
                saveData:saveData
        }

}

)();

module.exports =regiControllor ;
