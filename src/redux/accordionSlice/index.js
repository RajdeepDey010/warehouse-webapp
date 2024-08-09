import { createSlice } from "@reduxjs/toolkit";
import workData from '../../warehouse.json';

const city = workData.warehouse.map((item) => item.city);
const cluster = workData.warehouse.map((item) => item.cluster);

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const cityD = removeDuplicates(city);
const clusterD = removeDuplicates(cluster);

const initialState = [
    { category: "city", item: cityD },
    { category: "cluster", item: clusterD }
];

const accordionSlice = createSlice({
    name: "accordion",
    initialState,
    reducers: {}
});

export default accordionSlice.reducer;
