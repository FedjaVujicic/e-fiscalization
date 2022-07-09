"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const customer_1 = __importDefault(require("../models/customer"));
class CustomerController {
    addCustomer(req, res) {
        let customer = new customer_1.default({
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
            }
            else {
                res.json({ "message": "ok" });
            }
        });
    }
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        customer_1.default.findOne({ "username": username, "password": password }, (err, customer) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(customer);
            }
        });
    }
    changePassword(req, res) {
        let username = req.body.username;
        let newPassword = req.body.newPassword;
        customer_1.default.updateOne({ "username": username }, {
            $set: {
                "password": newPassword
            }
        }, (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            }
            else {
                res.json({ "message": "ok" });
            }
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map