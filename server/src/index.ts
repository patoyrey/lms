require("dotenv").config();
import express, { Express } from "express";
import { connect } from "./utils/schema";
import { routes } from "./routes";
const session = require("express-session");

const cors = require("cors");
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.set("trust proxy", 1);
app.use(
  session({
    name: "jwt",
    secret: `${process.env.SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
    },
  })
);

app.use("/api", routes);

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log(`Running ${port}...`);
  connect();
});
