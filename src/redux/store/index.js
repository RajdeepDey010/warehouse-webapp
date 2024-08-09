import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from '../accordionSlice';
import warehouseReducer from '../warehouseSlice';

export const store = configureStore({
    reducer: {
        accordion: accordionReducer,
        warehouse: warehouseReducer,
    },
});

export default store;
