import { createSlice } from "@reduxjs/toolkit";

const recSlice = createSlice({
    name: "rec",
    initialState:{
        recommendations:[]
    },
    reducers:{
        addRecommendations:(state, action)=>{
            console.log("Payload received:", action.payload);
            state.recommendations.push(...action.payload);
    
        }
    }
});

export const {addRecommendations} = recSlice.actions;

export default recSlice.reducer;