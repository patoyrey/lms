import express from "express";
import { addUserHandler } from "./handlers/addUserHandler";
import { addFieldsHandler } from "./handlers/addFieldsHandler";
import { addTestHandler } from "./handlers/addTestHandler";
import { addPatientsTestHandler } from "./handlers/addPatientsTestHandler";
import { addPatientHandler } from "./handlers/addPatientHandler";
import { addNurseHandler } from "./handlers/addNurseHandler";
import { addTestFieldsHandler } from "./handlers/addTestFieldsHandler";
import { loginHandlers } from "./handlers/loginHandlers";
import { middleware } from "./middleware/middleware";
import { jwtToken } from "./jwt/jwttoken";
export const routes = express.Router();

routes.post("/add-user", middleware, addUserHandler);
routes.post("/add-fields", addFieldsHandler);
routes.post("/add-test", addTestHandler);
routes.post("/add-patientstest", addPatientsTestHandler);
routes.post("/add-patient", addPatientHandler);
routes.post("/add-nurse", addNurseHandler);
routes.post("/add-testfields", addTestFieldsHandler);

routes.post("/login-user", loginHandlers);
