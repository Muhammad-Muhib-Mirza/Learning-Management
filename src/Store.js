import {configureStore} from "@reduxjs/toolkit"
import { allData } from "./Slice"

const Store = configureStore({
    reducer:{
        data:allData.reducer
    }
})

export default Store;