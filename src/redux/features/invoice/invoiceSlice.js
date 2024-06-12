import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    invoiceId:"", //patientId
    invoice:{
        status:"",
        deliveryStatus:"",
    }
}

const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        SetInvoiceId:(state,action)=>{
            state.invoiceId=action.payload
        },
        SetInvoice:(state, action)=>{
            state.invoice=action.payload
        },
        SetEditInvoice:(state, action)=>{
            const {property, value} = action.payload;
            state.invoice[property]=value
        }
    }

})


export const {SetInvoiceId, SetInvoice, SetEditInvoice} = invoiceSlice.actions;

const invoiceSliceReducer = invoiceSlice.reducer;
export default invoiceSliceReducer;