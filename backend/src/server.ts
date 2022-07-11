import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import companyRouter from './routes/company.routes';
import adminRouter from './routes/admin.routes';
import customerRouter from './routes/customer.routes';
import productRouter from './routes/product.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/fiscalization");
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("db connected");
});

const router = express.Router();
router.use("/company", companyRouter);
router.use("/admin", adminRouter);
router.use("/customer", customerRouter);
router.use("/product", productRouter);

app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));