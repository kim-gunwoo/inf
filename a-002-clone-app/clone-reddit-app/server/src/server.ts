import cors from "cors";
import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth";

const app = express();
const PORT = 4000;
const origin = "http://localhost:3000";
app.use(cors({ origin }));

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  AppDataSource.initialize()
    .then(() => {
      console.log("database init");
    })
    .catch((error) => console.log(error));
});
