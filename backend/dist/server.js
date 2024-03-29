"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const company_routes_1 = __importDefault(require("./routes/company.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const customer_routes_1 = __importDefault(require("./routes/customer.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const receipt_routes_1 = __importDefault(require("./routes/receipt.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/fiscalization");
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("db connected");
});
const router = express_1.default.Router();
router.use("/company", company_routes_1.default);
router.use("/admin", admin_routes_1.default);
router.use("/customer", customer_routes_1.default);
router.use("/product", product_routes_1.default);
router.use("/receipt", receipt_routes_1.default);
app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map