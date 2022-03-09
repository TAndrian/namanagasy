import { useState, useEffect } from "react";
import { getCircuitList } from "service/";

/*
	Hook that gets circuit list at startup
*/

const useCircuitList = () => {
	const [circuitList, setCircuitList] = useState([]);

	useEffect(() => {
		getCircuitList()
			.then(data => {
				setCircuitList(data.payload);
			})
			.catch(e => {
				console.error(e);
			});
	}, []);

	return circuitList;
};

export default useCircuitList;