import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// for calling APIs in Redux/Slice we use Thunk 
// Thunk is a Method provided by redux to make API calls 
// API calls are asychronus function, so Thunk make use of, concept of promise 


// function to call API 
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
   const result =  axios.get('/restaurant.json').then(response=>response.data)
    // console.log("Result in slice");
    // console.log(result);     
    return result;
})

const restaurentSlice = createSlice({
    name:"restaurantList",
    initialState:{
        loading:false, // pending 
        allRestaurant :[], // resolve
        err:"" ,// reject 
        searchRestaurant:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading = false;
            state.allRestaurant = [];
            state.error = action.error.message
        })
    },
    reducers:{
        search:(state,action) => {
            state.allRestaurant.restaurants = 
             state.searchRestaurant.restaurants.filter(
                item=>item.neighborhood.toLowerCase().includes(action.payload)
            )
        }
    }
})

export default restaurentSlice.reducer;
export const {search} = restaurentSlice.actions