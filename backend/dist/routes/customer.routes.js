"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("../controllers/customer.controller");
const customerRouter = express_1.default.Router();
customerRouter.route("/login").post((req, res) => new customer_controller_1.CustomerController().login(req, res));
customerRouter.route("/changePassword").post((req, res) => new customer_controller_1.CustomerController().changePassword(req, res));
customerRouter.route("/addCustomer").post((req, res) => new customer_controller_1.CustomerController().addCustomer(req, res));
exports.default = customerRouter;
//# sourceMappingURL=customer.routes.js.map