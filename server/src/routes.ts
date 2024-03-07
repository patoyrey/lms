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
import { retrieveFieldHandler } from "./handlers/retrieveFieldHandler";
import { resetPasswordRequestHandler } from "./handlers/resetPasswordRequestHandler";
import { resetPasswordHandler } from "./handlers/resetPasswordHandler";
import { validateTokenHandler } from "./handlers/validateTokenHandler";
import { RetrieveTestHandler } from "./handlers/retrieveTestHandler";
import { RetrieveFieldTestHandler } from "./handlers/retrieveFieldTestHandler";
import { UpdateTestHandlers } from "./handlers/updateTestHandler";
import { DeleteTestHanders } from "./handlers/deleteTestHandler";
import { updateFieldHandler } from "./handlers/updateFieldHandler";
import { deleteFieldHandler } from "./handlers/deleteFieldHandler";
import { UpdateTestFieldsHandlers } from "./handlers/updateTestFieldsHandlers";

export const routes = express.Router();

routes.post("/add-user", middleware, addUserHandler);
routes.post("/add-fields", middleware, addFieldsHandler);
routes.post("/add-test", middleware, addTestHandler);
routes.post("/add-patientstest", middleware, addPatientsTestHandler);
routes.post("/add-patient", middleware, addPatientHandler);
routes.post("/add-nurse", middleware, addNurseHandler);
routes.post("/add-testfields", middleware, addTestFieldsHandler);
routes.post("/login-user", loginHandlers);

routes.get("/user-logout", logoutHandler);
routes.get("/get-auth", middleware, checkAuthHandler);
routes.get("/retrieve-field", middleware, retrieveFieldHandler);
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

routes.put("/update-fields/:fieldId", middleware, updateFieldHandler);
routes.delete("/delete-field/:fieldId", middleware, deleteFieldHandler);
routes.put("/update-testfields", middleware, UpdateTestFieldsHandlers);
