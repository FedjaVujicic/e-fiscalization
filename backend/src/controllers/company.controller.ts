import express from "express";
import CompanyModel from "../models/company";

export class CompanyController {
    register(req: express.Request, res: express.Response) {
        let company = new CompanyModel({
            repName: req.body.repName,
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            email: req.body.email,
            name: req.body.name,
            address: req.body.address,
            pib: req.body.pib,
            mb: req.body.mb,
            logo: req.body.logo,
            status: "firstlogin",
        });

        company.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });
    }

    login(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let password = req.body.password;

        CompanyModel.findOne({ "username": username, "password": password }, (err, company) => {
            if (err) {
                console.log(err);
            } else {
                res.json(company);
            }
        });
    }

    getCompany(req: express.Request, res: express.Response) {
        let username = req.body.username;

        CompanyModel.findOne({ "username": username }, (err, company) => {
            if (err) {
                console.log(err);
            } else {
                res.json(company);
            }
        });
    }

    // Checks whether a user with a same username or email exists when registering
    exists(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let email = req.body.email;

        CompanyModel.findOne({
            $or: [
                { "username": username },
                { "email": email },
            ]
        }, (err, company) => {
            if (err) {
                console.log(err);
            } else {
                res.json(company);
            }
        });
    }

    finishRegister(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let category = req.body.category;
        let activityCodes = req.body.activityCodes;
        let pdv = req.body.pdv;
        let bankAccounts = req.body.bankAccounts;
        let warehouses = req.body.warehouses;
        let cashRegisters = req.body.cashRegisters;

        CompanyModel.updateOne({ "username": username }, {
            $set: {
                "category": category,
                "activityCodes": activityCodes,
                "pdv": pdv,
                "bankAccounts": bankAccounts,
                "warehouses": warehouses,
                "cashRegisters": cashRegisters,
                "status": "U obradi"
            }
        }, (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });
    }

    changePassword(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let newPassword = req.body.newPassword;

        CompanyModel.updateOne({ "username": username }, {
            $set: {
                "password": newPassword
            }
        }, (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });
    }

    // Admin get list of pending companies for confirmation
    getPendingCompanies(req: express.Request, res: express.Response) {
        const status = "U obradi";

        CompanyModel.find({ "status": status }, (err, companies) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(companies);
            }
        })        
    }

    getActiveCompanies(req: express.Request, res: express.Response) {
        const status = "Aktivan";

        CompanyModel.find({ "status": status }, (err, companies) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(companies);
            }
        })        
    }

    changeCompanyStatus(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let status = req.body.status;

        CompanyModel.updateOne({ "username": username }, {
            $set: {
                "status": status
            }
        }, (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });             
    }

    addBuyer(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let buyer = req.body.buyer;

        CompanyModel.updateOne({ "username": username }, {
            $push: {
                "buyers": buyer
            }
        }, (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });             
    }
    
}