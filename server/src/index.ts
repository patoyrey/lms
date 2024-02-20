require("dotenv").config();
import express, { Express } from "express";
import { connect } from "./utils/schema";
import { routes } from "./routes";
import cookieSession from "cookie-session";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);
app.set("trust proxy", true);
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log(`Running ${port}...`);
  connect();
});
