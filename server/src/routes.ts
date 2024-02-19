import express from "express";
import { addUserHandler } from "./handlers/addUserHandler";
import { addFieldsHandler } from "./handlers/addFieldsHandler";
import { addTestHandler } from "./handlers/addTestHandler";
import { addPatientsTestHandler } from "./handlers/addPatientsTestHandler";
export const routes = express.Router();

routes.post("/add-user", addUserHandler);
routes.post("/add-fields", addFieldsHandler);
routes.post("/add-test", addTestHandler);
routes.post("/add-patientstest", addPatientsTestHandler);
