import { Request, Response } from "express";
import { Patient } from "../models/Patient";
import { UserResponse } from "../response/userResponse";
import { retrieveData } from "../utils/QueryFields";
import { PatientLabTest } from "../models/PatientLabTest";
import { Gender } from "../enums/Gender";

export const addPatientHandler = async (req: Request, res: Response) => {
  const { patient_lab, test } = req.body;

  let patient = new Patient(patient_lab);
  // todo: santize or parse
  if (String(patient.patient_gender) === "") {
    patient.patient_gender = Gender.null;
  }
  const response = await patient.add();

  console.log("Add Patient Response : ", response);
  const { succeeded, msg, patient_id } = response as unknown as UserResponse;

  console.log("Test", test);

  if (succeeded) {
    test.forEach(async (item: any) => {
      //Query to get all the lab test id
      const query = `select labtest_id from labtest where test_id = "${item.test_id}"`;

      //Response form the lab test
      const labtestres = (await retrieveData(query)) as unknown as [];

      console.log("Lab Test Id", labtestres);
      if (labtestres) {
        //Looping the Lab test result
        labtestres.forEach(async (item: any) => {
          const data = {
            labtest_id: item.labtest_id,
            patient_id,
          } as PatientLabTest;

          //Adding the labtest_id to the PatientLabTest Table
          const patientLabTest = new PatientLabTest(data);
          await patientLabTest.add();

          // console.log("Adding PatientLab Tets", patienLabTestRes);
          // console.log("Lab Test Id", item.labtest_id);
        });
      }
    });

    //Get patientLabtest_id;
  }
  return res.status(200).json(response);
};
