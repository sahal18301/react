import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PassportState {
  fullName: string;
  passportNumber: string;
  nationality: string;
  dateOfBirth: string;
  issueDate: string;
  expiryDate: string;
  destinationCountry: string;
}

const initialState: PassportState = {
  fullName: "",
  passportNumber: "",
  nationality: "",
  dateOfBirth: "",
  issueDate: "",
  expiryDate: "",
  destinationCountry: "",
};

const passportSlice = createSlice({
  name: "passport",
  initialState,
  reducers: {
    setPassport: (_state, action: PayloadAction<PassportState>) =>
      action.payload,

    resetPassport: () => initialState,
  },
});

export const { setPassport, resetPassport } = passportSlice.actions;
export default passportSlice.reducer;
