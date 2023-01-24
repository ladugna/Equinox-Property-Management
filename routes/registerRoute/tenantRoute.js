


const express = require("express");

const path = require("path");

const tenantController = require("../../controller/tenantControllor") ;

const tenantRouter = express.Router();



tenantRouter.get("/tenant/list",(req, res) => {
        
const tenants= tenantController.getTenantData();      //from controller
      res.render("form-change",{tenants:tenants}); //student-list.pug from view
    });


    tenantRouter.post("/tenant/list",(req, res) => {
        const result = tenantController.saveData(req ,res);
       
        res.redirect(303, "/tenant/list");
    });






   
    

    
    module.exports = tenantRouter;