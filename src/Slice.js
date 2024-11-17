import { createSlice } from "@reduxjs/toolkit"

const allData = createSlice({
    name:'data',
    initialState:[],
    reducers:{
        setAllCardData(state,action){
            state.push(action.payload)
        },
    }
})

export {allData}
export const {setAllCardData} = allData.actions 