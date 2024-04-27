import {apiSlice} from "../api/apiSlice.js";
import {SuccessToast} from "../../../helper/ValidationHelper.js";



export const appointmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAppointments: builder.query({
            query: () => `/appointment/get-appointments`,
            keepUnusedDataFor: 600,
            providesTags: ["Appointments"],
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
    }),
})


export const {useGetAppointmentsQuery, useDeleteAppointmentMutation} = appointmentApi;