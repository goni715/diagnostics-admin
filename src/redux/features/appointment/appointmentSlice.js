import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    appointmentId:""
}

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        SetAppointmentId:(state,action)=>{
            state.appointmentId=action.payload
        },
    }

})


export const {SetAppointmentId} = appointmentSlice.actions;

const appointmentSliceReducer = appointmentSlice.reducer;
export default appointmentSliceReducer;