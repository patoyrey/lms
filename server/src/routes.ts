import express from "express";
import { addUserHandler } from "./handlers/addUserHandler";
import { addFieldsHandler } from "./handlers/addFieldsHandler";
import { addTestHandler } from "./handlers/addTestHandler";
import { addNurseHandler } from "./handlers/addNurseHandler";
import { addTestFieldsHandler } from "./handlers/addTestFieldsHandler";
export const routes = express.Router();

routes.post("/add-user", addUserHandler);
routes.post("/add-fields", addFieldsHandler);
routes.post("/add-test", addTestHandler);
routes.post("/add-nurse", addNurseHandler);
routes.post("/add-testfields", addTestFieldsHandler);



