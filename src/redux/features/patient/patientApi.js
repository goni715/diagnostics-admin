import {apiSlice} from "../api/apiSlice.js";
import {SuccessToast} from "../../../helper/ValidationHelper.js";



export const patientApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: () => `/patient/get-patients`,
            keepUnusedDataFor: 600,
            providesTags: ["Patients"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    //ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        createPatient: builder.mutation({
            query: (data) => ({
                url: "/patient/create-patient",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Appointments"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("AppointmentList Create Success");
                }catch(err) {
                    console.log(err)
                }
            }
        }),
        deleteAppointment: builder.mutation({
            query: (id) => ({
                url: `/appointment/delete-appointment/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Appointments"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast(" Success");
                    }
                }catch(err) {
                    console.log(err);
                }
            }
        }),
        updateAppointment: builder.mutation({
            query: ({id, data}) => ({
                url: `/appointment/update-appointment/${id}`,
                method: "PUT",
                body:data
            }),
            invalidatesTags: ["Appointments"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast(" Success");
                    }
                }catch(err) {
                    console.log(err);
                }
            }
        }),
    }),
})


export const {useGetPatientsQuery, useCreatePatientMutation, useDeleteAppointmentMutation, useUpdateAppointmentMutation} = patientApi;