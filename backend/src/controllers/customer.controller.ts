import express from "express";
import CustomerModel from "../models/customer";

export class CustomerController {
    
    addCustomer(req: express.Request, res: express.Response) {
        let customer = new CustomerModel({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            idNumber: req.body.idNumber,
        });

        customer.save((err, resp) => {
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

        CustomerModel.findOne({ "username": username, "password": password }, (err, customer) => {
            if (err) {
                console.log(err);
            } else {
                res.json(customer);
            }
        });
    }

    changePassword(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let newPassword = req.body.newPassword;

        CustomerModel.updateOne({ "username": username }, {
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
}