import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {SetLoginError} from "../auth/authSlice.js";



export const reportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReports: builder.query({
            query: () => `/report/get-reports`,
            keepUnusedDataFor: 600,
            providesTags: ["Reports"],
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
        createReport: builder.mutation({
            query: (data) => ({
                url: "/report/create-report",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Reports"],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("Report Create Success");
                }catch(err) {
                    //console.log(err)
                    const status = err?.error?.status;
                    if(status === 404){
                        ErrorToast("Could not Match this Invoice Number!");
                    }
                    else if(status === 409){
                        ErrorToast("This Invoice Number already associated with Report!");
                    }else{
                        //ErrorToast("Something Went Wrong!");
                    }
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


export const {useGetReportsQuery, useCreateReportMutation, useDeleteAppointmentMutation, useUpdateAppointmentMutation} = reportApi;