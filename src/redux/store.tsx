import { configureStore } from "@reduxjs/toolkit";
import stepSlices from './slices/stepSlice'

export const store = configureStore({
    reducer: {
        steps: stepSlices
    },  
});
export type StoreState = ReturnType<typeof store.getState>;
export type MapDispatch = typeof store.dispatch;