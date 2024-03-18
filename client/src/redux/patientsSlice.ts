import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Patients } from "../interface/patients";
import { PatientService } from "../services/pateintsService";
import { UpdateTest } from "./testSlice";
import { Patient_Entity } from "../entity/patientEntity";

const initialState: Patients = {
  patient_lab: {
    patient_id: "",
    user_id: "",
    patient_fname: "",
    patient_mname: "",
    patient_lname: "",
    patient_gender: "",
    patient_address: "",
    company: "",
    date_of_visit: `${new Date().toISOString().slice(0, 10)}`,
    referred_name: "",
    patient_dob: "",
    patient_age: 0,
    created_at: "",
    updated_at: "",
  },
  patient_labTest: {
    patient_id: [],
    test_id: [],
  },
  patients: [],
  editPatient: {
    patient_id: "",
    user_id: "",
    patient_fname: "",
    patient_mname: "",
    patient_lname: "",
    patient_gender: "",
    patient_address: "",
    company: "",
    date_of_visit: "",
    referred_name: "",
    patient_dob: "",
    patient_age: 0,
    created_at: "",
    updated_at: "",
  },
};
export const fetchAllPatients: any = createAsyncThunk(
  "patient/fetchAllPatients",
  async () => {
    const res = await PatientService.select("retrieve-patient");
    return res;
  }
);
export const fetchPatientById: any = createAsyncThunk(
  "field/fetchPatientById",
  async (data: { patientId: string; editPatient: Patient_Entity }) => {
    const res = await PatientService.update(
      `update-patient/${data.patientId}`,
      data.editPatient
    );
    return res;
  }
);
export const addPatients: any = createAsyncThunk(
  "patient/addPatients",
  async (props: Patients) => {
    const res = await PatientService.add(props, "add-patient");
    return res;
  }
);

// export const UpdatePatient: any = createAsyncThunk(
//   "update/Patient",
//   async (props) => {
//     const res = await PatientService.update(props, "update-patient");

//     return res;
//   }
// );
export const DeletePatient: any = createAsyncThunk(
  "delete/Patient",
  async (data: { patientId: string }) => {
    const res = await PatientService.delete(`delete-patient/${data}`);
    console.log(data);

    return res;
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatients: (state, action) => {
      state.patient_lab = {
        ...state.patient_lab,
        [action.payload.name]: action.payload.value,
      };
    },

    setSelectPatientId: (state, action) => {
      const patient_id = action.payload.patient_id;
      const arrayIndex = action.payload.index;
      state.patient_labTest.patient_id = [];
      state.patient_labTest.patient_id.push({
        patient_id,
        patient_row: arrayIndex + 1,
      });
    },
    setSelectTestId: (state, action) => {
      const test_id = action.payload.test_id;
      const item = action.payload.item;
      const arrayIndex = action.payload.index;

      const index = state.patient_labTest.test_id.findIndex(
        (item: any) => item.test_id === test_id
      );
      console.log("Test Index: ", index);
      if (index === -1) {
        state.patient_labTest.test_id.push({
          test_id,
          ...item,
        });
      } else {
        state.patient_labTest.test_id.splice(index, 1);
      }
    },
    setEditPatient: (state, action) => {
      state.editPatient = {
        ...state.editPatient,
        [action.payload.name]: action.payload.value,
      };
    },
    getPatientToUpdate: (state, action) => {
      state.editPatient = action.payload;
    },
    clearPatient: (state) => {
      state.patient_lab = {
        ...initialState.patient_lab,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPatients.pending, (state, action) => {});
    builder.addCase(fetchAllPatients.fulfilled, (state, action) => {
      state.patients = action.payload;
    });
    builder.addCase(fetchAllPatients.rejected, (state, action) => {});
    builder.addCase(UpdateTest.pending, (state, action) => {});
    builder.addCase(UpdateTest.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchPatientById.pending, (state, action) => {});
    builder.addCase(fetchPatientById.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchPatientById.rejected, (state, action) => {});
    builder.addCase(DeletePatient.pending, (state, action) => {});
    builder.addCase(DeletePatient.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export const {
  setPatients,
  clearPatient,
  setEditPatient,
  getPatientToUpdate,
  setSelectPatientId,
  setSelectTestId,
} = patientSlice.actions;
export default patientSlice.reducer;
