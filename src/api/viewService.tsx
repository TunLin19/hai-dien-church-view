import {apiClient} from "./apiFormat";

export const getBanner = () => apiClient.get("/banner");
export const getHistory = () => apiClient.get("/history");