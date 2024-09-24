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
                    //console.log(err);
                }
            },
        }),
        getRecentInvoices: builder.query({
            query: () => `/invoice/get-recent-invoices`,
            keepUnusedDataFor: 600,
            providesTags: ["RecentInvoices"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    //ErrorToast("Something Went Wrong!");
                    //do nothing
                    //console.log(err);
                }
            },
        }),
        getPatient: builder.query({
            query: (id) => `/patient/get-patient/${id}`,
            keepUnusedDataFor: 600,
            providesTags: (result, error, arg) => [
                {type: "Patient", id:arg}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    //ErrorToast("Something Went Wrong!");
                    //do nothing
                    //console.log(err);
                }
            },
        }),
        createPatient: builder.mutation({
            query: (data) => ({
                url: "/patient/create-patient",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Patients", "RecentInvoices"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("Patient Create Success");
                }catch(err) {
                    //console.log(err)
                }
            }
        }),
        updatePatient: builder.mutation({
            query: ({id, data}) => ({
                url: `/patient/update-patient/${id}`,
                method: "PUT",
                body:data
            }),
            invalidatesTags: (result, error, arg) => [
                "Patients",
                "RecentInvoices",
                {type: "Patient", id:arg.id}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    //console.log(err);
                }
            }
        }),
    }),
})


export const {useGetPatientsQuery, useGetRecentInvoicesQuery, useGetPatientQuery, useCreatePatientMutation, useUpdatePatientMutation} = patientApi;