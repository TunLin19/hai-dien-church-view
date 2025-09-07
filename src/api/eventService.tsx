import {apiClient} from "./apiFormat";

export const getEvents = () => apiClient.get("/event");
