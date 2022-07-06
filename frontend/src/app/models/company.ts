export class Company {
    repName: string;
    username: string;
    password: string;
    passwordSecond: string;
    phone: string;
    email: string;
    name: string;
    address: string;
    pib: string;
    mb: string;
    category: string;
    activityCodes: Array<String>;
    pdv: boolean;
    bankAccounts: Array<{
        bankName: string;
        bankNumber: string;
    }>;
    warehouses: Array<{
        warehouseId: string;
        warehouseName: string;
    }>;
    cashRegisters: Array<{
        cashRegisterLocation: string;
        cashRegisterType: string;
    }>;
    logo: string;
    buyers: string;
    status: string;
}