import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface VisaState {
  fullName: string;
  passport: string;
  country: string;
}

const initialState: VisaState = {
  fullName: "",
  passport: "",
  country: "",
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    setVisa: (_state, action: PayloadAction<VisaState>) => action.payload,
    resetVisa: () => initialState, // for success page
  },
});

export const { setVisa, resetVisa } = visaSlice.actions;
export default visaSlice.reducer;
