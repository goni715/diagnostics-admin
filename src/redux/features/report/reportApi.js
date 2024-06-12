import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";



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
                    //console.log(err);
                }
            },
        }),
        getReport: builder.query({
            query: (id) => `/report/get-report/${id}`,
            keepUnusedDataFor: 600,
            providesTags: (result, error, arg) => [
                {type: "Report", id:arg}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    //ErrorToast("Something Went Wrong!");
                    //do nothing
                   // console.log(err);
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
    }),
})


export const {useGetReportsQuery, useGetReportQuery, useCreateReportMutation} = reportApi;