import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Company = new Schema({
    repName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    pib: {
        type: String
    },
    mb: {
        type: String
    },
    category: {
        type: String
    },
    activityCodes: {
        type: Array<String>
    },
    pdv: {
        type: Boolean
    },
    bankAccounts: {
        type: Array<{
            bankName: string;
            bankNumber: string;
        }>
    },
    warehouses: {
        type: Array<{
            warehouseId: string;
            warehouseName: string;
        }>
    },
    cashRegisters: {
        type: Array<{
            cashRegisterLocation: string;
            cashRegisterType: string;
        }>
    },
    logo: {
        type: String
    },
    buyers: {
        type: Array<{
            buyerUsername: string;
            daysToPay: number;
            rebate: number;
        }>
    },
    status: {
        type: String
    },
    departments: {
        type: Array<{
            name: string;
            tables: Array<{
                top: string;
                left: string;
                borderRadius: string;
            }>;
        }>
    }
});

export default mongoose.model("CompanyModel", Company, "company");