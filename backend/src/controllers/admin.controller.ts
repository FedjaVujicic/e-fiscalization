import express from "express";
import AdminModel from "../models/admin";

export class AdminController {
    login(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let password = req.body.password;

        AdminModel.findOne({ "username": username, "password": password }, (err, admin) => {
            if (err) {
                console.log(err);
            } else {
                res.json(admin);
            }
        });
    }

    changePassword(req: express.Request, res: express.Response) {
        let username = req.body.username;
        let newPassword = req.body.newPassword;

        AdminModel.updateOne({ "username": username }, {
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