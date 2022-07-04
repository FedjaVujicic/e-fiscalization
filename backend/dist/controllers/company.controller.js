"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_1 = __importDefault(require("../models/company"));
class CompanyController {
    register(req, res) {
        let company = new company_1.default({
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
            }
            else {
                res.json({ "message": "ok" });
            }
        });
    }
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        company_1.default.findOne({ "username": username, "password": password }, (err, company) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(company);
            }
        });
    }
    // Checks whether a user with a same username or email exists when registering
    exists(req, res) {
        let username = req.body.username;
        let email = req.body.email;
        company_1.default.findOne({
            $or: [
                { "username": username },
                { "email": email },
            ]
        }, (err, company) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(company);
            }
        });
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map