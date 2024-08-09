import { createSlice } from "@reduxjs/toolkit";
import workData from '../../warehouse.json';

const initialState = {
    warehouses: workData.warehouse.map(({ name, city, space_available, cluster }) => ({
        name,
        city,
        space_available,
        cluster
    })),
    filteredWarehouses: workData.warehouse.map(({ name, city, space_available, cluster }) => ({
        name,
        city,
        space_available,
        cluster
    })),
};

const warehouseSlice = createSlice({
    name: "warehouse",
    initialState,
    reducers: {
        filterWarehouses: (state, action) => {
            const { city, cluster, minSpace, maxSpace } = action.payload;
            state.filteredWarehouses = state.warehouses.filter(warehouse =>
                (!city || warehouse.city === city) &&
                (!cluster || warehouse.cluster === cluster) &&
                warehouse.space_available >= minSpace &&
                warehouse.space_available <= maxSpace
            );
        },
        filterWarehousesByName: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredWarehouses = state.warehouses.filter(warehouse =>
                warehouse.name.toLowerCase().includes(searchTerm)
            );
        },
    },
});

export const { filterWarehouses, filterWarehousesByName } = warehouseSlice.actions;
export default warehouseSlice.reducer;
