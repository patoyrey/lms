import express from "express";
import { addUserHandler } from "./handlers/addUserHandler";
import { addFieldsHandler } from "./handlers/addFieldsHandler";

export const routes = express.Router();

routes.post("/add-user", addUserHandler);
routes.post("/add-fields", addFieldsHandler);
