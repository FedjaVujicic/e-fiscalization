import express from "express";
import { CompanyController } from "../controllers/company.controller";

const companyRouter = express.Router();

companyRouter.route("/register").post(
    (req, res) => new CompanyController().register(req, res)
);

companyRouter.route("/login").post(
    (req, res) => new CompanyController().login(req, res)
);

companyRouter.route("/exists").post(
    (req, res) => new CompanyController().exists(req, res)
);

export default companyRouter;