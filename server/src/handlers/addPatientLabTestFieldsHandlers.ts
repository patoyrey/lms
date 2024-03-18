import { Request, Response } from "express";
import { PatientLabTestFields } from "../models/PatientLabTestFields";
import { PateintLabTestFieldsResponse } from "../response/patientlabtestfieldsResponse";

export const addPatientLabTestFieldsHandlers = async (
  req: Request,
  res: Response
) => {
  const data = req.body.props;

  const response = (await new Promise(async (resolve, reject) => {
    await data.forEach(async (item: any) => {
      const labtestfields = {
        patient_labtest_id: item.patient_labtest_id,
        field_id: item.field_id,
      } as PatientLabTestFields;

      console.log("Patient Lab test fields", labtestfields);
      const query = "insert into patient_labtest_fields set ?";

      const patientlabtestfields = new PatientLabTestFields(labtestfields);
      const patientlabtestfieldsresponse = await patientlabtestfields.add(
        query
      );

      patientlabtestfieldsresponse.succeeded
        ? resolve(patientlabtestfieldsresponse)
        : reject(patientlabtestfieldsresponse);
    });
  })) as PateintLabTestFieldsResponse;

  console.log("Response In Patient Lab test fields", response);
  if (response.succeeded) {
    return res.status(200).json(response);
  } else {
    res.status(400).json(response);
  }

  //   return res.status(200).json()
};
