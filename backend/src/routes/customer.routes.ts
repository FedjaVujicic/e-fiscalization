import express from "express";
import { CustomerController } from "../controllers/customer.controller";

const customerRouter = express.Router();

customerRouter.route("/login").post(
    (req, res) => new CustomerController().login(req, res)
);

customerRouter.route("/changePassword").post(
    (req, res) => new CustomerController().changePassword(req, res)
);

customerRouter.route("/addCustomer").post(
    (req, res) => new CustomerController().addCustomer(req, res)
);

export default customerRouter;