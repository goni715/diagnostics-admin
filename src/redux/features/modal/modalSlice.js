import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    doctorCreateModalOpen:false,
    doctorEditModalOpen:false,
    doctorDeleteModalOpen:false,
    appointmentDeleteModalOpen:false,
    appointmentEditModalOpen:false,
    appointmentCreateModalOpen:false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        SetDoctorCreateModalOpen:(state,action)=>{
            state.doctorCreateModalOpen=action.payload
        },
        SetDoctorEditModalOpen:(state,action)=>{
            state.doctorEditModalOpen=action.payload
        },
        SetDoctorDeleteModalOpen:(state,action)=>{
            state.doctorDeleteModalOpen=action.payload
        },
        SetAppointmentDeleteModalOpen:(state,action)=>{
            state.appointmentDeleteModalOpen=action.payload
        },
        SetAppointmentEditModalOpen:(state,action)=>{
            state.appointmentEditModalOpen=action.payload
        },
        SetAppointmentCreateModalOpen:(state,action)=>{
            state.appointmentCreateModalOpen=action.payload
        },
    }

})


export const {SetDoctorCreateModalOpen, SetDoctorEditModalOpen, SetDoctorDeleteModalOpen, SetAppointmentDeleteModalOpen, SetAppointmentEditModalOpen, SetAppointmentCreateModalOpen} = modalSlice.actions;

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;