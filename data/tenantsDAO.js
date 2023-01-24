/**
 * tenantsDAO.js
 */
"use strict";

const Tenant = require("../model/tenant");

const tenantsDAO = (function() {
    const tenants = [
        new Tenant("Excelsior North Tower", 3, "301A", "Alan K. Jones", "(641) 123-0009", "akjones@domain.com"),
        new Tenant("Excelsior south Tower", 3, "301A", "Alan K. Jones", "(641) 123-0009", "akjones@domain.com"),
        new Tenant("south East", 3, "301A", "Alan K. Jones", "(641) 123-0009", "romio@domain.com")
        
        
        
    ];

    const getData = function() {
        return tenants;
    }

    const saveData=function(newData){

        tenants.push(newData) ;
    }

    return {
        getData: getData,
        saveData:saveData
    }

})();


module.exports = tenantsDAO;