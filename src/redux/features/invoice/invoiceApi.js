import {apiSlice} from "../api/apiSlice.js";
import {SuccessToast} from "../../../helper/ValidationHelper.js";



export const invoiceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getInvoices: builder.query({
            query: () => `/invoice/get-invoices`,
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


export const {useGetInvoicesQuery, useCreatePatientMutation, useDeleteAppointmentMutation, useUpdateAppointmentMutation} = invoiceApi;