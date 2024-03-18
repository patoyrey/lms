import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Doctor } from "../interface/doctor";
import { DoctorService } from "../services/doctorService";
import { Doctor_Entity } from "../entity/doctorEntity";

const initialState: Doctor = {
  doctor_info: {
    doc_fname: "",
    doc_lname: "",
    doc_mname: "",
    doc_gender: 0,
    doc_specialization: "",
    doc_prc_no: "",
    doc_philhealth_no: "",
    doc_tin_no: "",
    doc_room_no: "",
    doc_schedule: "",
    doc_phone: "",
    doc_price: 0,
    doc_email: "",
    doc_status: "",
    doc_created_at: "",
    doc_udpated_at: "",
    user_id: "",
    doc_id: "",
  },
  editDoctor: {
    doc_fname: "",
    doc_lname: "",
    doc_mname: "",
    doc_gender: 0,
    doc_specialization: "",
    doc_prc_no: "",
    doc_philhealth_no: "",
    doc_tin_no: "",
    doc_room_no: "",
    doc_schedule: "",
    doc_phone: "",
    doc_price: 0,
    doc_email: "",
    doc_status: "",
    doc_created_at: "",
    doc_udpated_at: "",
    user_id: "",
    doc_id: "",
  },
  doctor: [],
};

export const fetchAllDoctor: any = createAsyncThunk(
  "doctor/fetchAllDoctor",
  async () => {
    const res = await DoctorService.select("retrieve-doctor");
    return res;
  }
);

export const AddDoctor: any = createAsyncThunk(
  "doctor/AddDoctor",
  async (props) => {
    const res = await DoctorService.add(props, "add-doctor");
    return res;
  }
);

export const fetchDoctorById: any = createAsyncThunk(
  "doctor/fetchDoctorById",
  async (data: { doctorId: string; editDoctor: Doctor_Entity }) => {
    const res = await DoctorService.update(
      `update-doctor/${data.doctorId}`,
      data.editDoctor
    );
    return res;
  }
);

export const deleteDoctorById: any = createAsyncThunk(
  "doctor/deleteDoctorById",
  async (data: { doctorId: string }) => {
    const res = await DoctorService.delete(`delete-doctor/${data}`);
    console.log("Doctor Slice: ", data);
    return res;
  }
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setDoctor: (state, action) => {
      state.doctor_info = {
        ...state.doctor_info,
        [action.payload.name]: action.payload.value,
      };
    },

    setEditDoctor: (state, action) => {
      state.editDoctor = {
        ...state.editDoctor,
        [action.payload.name]: action.payload.value,
      };
    },

    clearDoctor: (state) => {
      state.doctor_info = {
        ...initialState.doctor_info,
      };
    },

    setDoctorUpdate: (state, action) => {
      state.editDoctor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllDoctor.pending, (state, action) => {});
    builder.addCase(fetchAllDoctor.fulfilled, (state, action) => {
      state.doctor = action.payload;
    });
    builder.addCase(fetchAllDoctor.rejected, (state, action) => {});

    builder.addCase(AddDoctor.pending, (state, action) => {});
    builder.addCase(AddDoctor.fulfilled, (state, action) => {
      state.doctor_info = action.payload;
    });
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export const { setDoctor, clearDoctor, setDoctorUpdate, setEditDoctor } =
  doctorSlice.actions;
export default doctorSlice.reducer;
