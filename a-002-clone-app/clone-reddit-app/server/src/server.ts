import cors from "cors";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth";
import subRoutes from "./routes/subs";
import postRoutes from "./routes/posts";
import voteRoutes from "./routes/votes";
import cookieParser from "cookie-parser";

dotenv.config({ path: ".env.development" });

const app = express();
const PORT = process.env.PORT;

const origin = process.env.ORIGIN;

app.use(express.static("public"));
app.use(cors({ origin, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoutes);
app.use("/api/subs", subRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/votes", voteRoutes);

app.listen(PORT, async () => {
  console.log(`Server running at ${process.env.APP_URL}`);
  AppDataSource.initialize()
    .then(() => {
      console.log("database init");
    })
    .catch((error) => console.log(error));
});
