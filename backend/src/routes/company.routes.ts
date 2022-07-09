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

companyRouter.route("/finishRegister").post(
    (req, res) => new CompanyController().finishRegister(req, res)
);

companyRouter.route("/changePassword").post(
    (req, res) => new CompanyController().changePassword(req, res)
);

companyRouter.route("/getPendingCompanies").get(
    (req, res) => new CompanyController().getPendingCompanies(req, res)
);

companyRouter.route("/changeCompanyStatus").post(
    (req, res) => new CompanyController().changeCompanyStatus(req, res)
);

export default companyRouter;