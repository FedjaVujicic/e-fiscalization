import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import companyRouter from './routes/company.routes';

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

app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));