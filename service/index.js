import http from "service/http";

/*
	Functions for doing API calls
*/

export const getCircuitList = () => http.get("circuitList");
