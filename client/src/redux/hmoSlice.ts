import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HmoInterface } from "../interface/hmoInterface";
import { HmoService } from "../services/hmoService";
import { fetchAllPatients } from "./patientsSlice";
import { Hmo_Entity } from "../entity/hmoEntity";

const initialState: HmoInterface = {
  hmo_data: {
    hmo_id: "",
    hmo_name: "",
    contact_person: "",
    email_address: "",
    contact_number: "",
    link_to_rates: "",
    hmo_status: "",
    created_At: "",
    updated_At: "",
  },
  hmo_array: [],
  editHmo: {
    hmo_id: "",
    hmo_name: "",
    contact_person: "",
    email_address: "",
    contact_number: "",
    link_to_rates: "",
    hmo_status: "",
    created_At: "",
    updated_At: "",
  },
};
export const fetchAllHmo: any = createAsyncThunk(
  "hmo/fetchAllHmo",
  async () => {
    const res = await HmoService.select("retrieve-hmo");
    return res;
  }
);
export const fetchHmoById: any = createAsyncThunk(
  "hmo/fetchHmoById",
  async (data: { hmoId: string; editHmo: Hmo_Entity }) => {
    const response = await HmoService.update(
      `update-hmo/${data.hmoId}`,
      data.editHmo
    );
    return response;
  }
);
export const deleteHmoById: any = createAsyncThunk(
  "hmo/deleteHmoById",
  async (data: { hmoId: string }) => {
    const res = await HmoService.delete(`delete-hmo/${data}`);
    console.log(data);
    return res;
  }
);
// export const UpdateHmo: any = createAsyncThunk(
//   "update/Hmo",
//   async(props)=>{
//     const res = await HmoService.update(props, "update-hmo")
//     return res;
//   }
// )

const hmoSlice = createSlice({
  name: "hmo",
  initialState,
  reducers: {
    setHmo: (state, action) => {
      state.hmo_data = {
        ...state.hmo_data,
        [action.payload.name]: action.payload.value,
      };
    },
    setEditHmo: (state, action) => {
      state.editHmo = {
        ...state.editHmo,
        [action.payload.name]: action.payload.value,
      };
    },
    setHmoData: (state, action) => {
      state.editHmo = action.payload;
    },
    clearHmoField: (state) => {
      state.hmo_data = {
        ...initialState.hmo_data,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllHmo.pending, (state, action) => {});
    builder.addCase(fetchAllHmo.fulfilled, (state, action) => {
      state.hmo_array = action.payload;
    });
    builder.addCase(fetchAllHmo.rejected, (state, action) => {});
    builder.addCase(fetchHmoById.pending, (state, action) => {});
    builder.addCase(fetchHmoById.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchHmoById.rejected, (state, action) => {});
    builder.addCase(deleteHmoById.pending, (state, action) => {});
    builder.addCase(deleteHmoById.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addDefaultCase((state, action) => {
      // console.warn("Unhandled action type: ${action.type}");
      return state;
    });
  },
});
export const { setHmo, clearHmoField, setHmoData, setEditHmo } =
  hmoSlice.actions;
export default hmoSlice.reducer;
