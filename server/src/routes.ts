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
import { checkAuthHandler } from "./handlers/checkAuthHandler";
import { logoutHandler } from "./handlers/logouthandler";
import { resetPasswordRequestHandler } from "./handlers/resetPasswordRequestHandler";
import { resetPasswordHandler } from "./handlers/resetPasswordHandler";
import { validateTokenHandler } from "./handlers/validateTokenHandler";
import { retrieveFieldHandler } from "./handlers/retrieveFieldHandler";
import { RetrieveTestHandler } from "./handlers/retrieveTestHandler";
import { RetrieveFieldTestHandler } from "./handlers/retrieveFieldTestHandler";
import { UpdateTestHandlers } from "./handlers/updateTestHandler";
import { DeleteTestHanders } from "./handlers/deleteTestHandler";

export const routes = express.Router();

routes.post("/add-user", middleware, addUserHandler);
routes.post("/add-fields", middleware, addFieldsHandler);
routes.post("/add-test", middleware, addTestHandler);
routes.post("/add-patientstest", middleware, addPatientsTestHandler);
routes.post("/add-patient", middleware, addPatientHandler);
routes.post("/add-nurse", middleware, addNurseHandler);
routes.post("/add-testfields", middleware, addTestFieldsHandler);
routes.get("/user-logout", logoutHandler);
routes.post("/login-user", loginHandlers);

routes.get("/get-auth", middleware, checkAuthHandler);
routes.post("/reset-password-request", resetPasswordRequestHandler);
routes.post("/reset-password", resetPasswordHandler);
routes.post("/validate-token", validateTokenHandler);


routes.get("/retrieve-field", middleware, retrieveFieldHandler);
routes.post("/retrieve-testfield", middleware, RetrieveFieldTestHandler);
//Select Routes

routes.get("/retrieve-test", middleware, RetrieveTestHandler);
routes.delete(`/delete-test/:test_id`, middleware, DeleteTestHanders);

//Update Routes
routes.post("/update-test", middleware, UpdateTestHandlers);
