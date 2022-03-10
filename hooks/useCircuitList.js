import { useState, useEffect } from "react";
import { getCircuitList } from "service/";
import { usePage } from "hooks/usePage";

/*
	Hook that gets circuit list at startup
*/

const useCircuitList = () => {
	const [circuitList, setCircuitList] = useState([]);
	const { unload } = usePage();

	useEffect(() => {
		getCircuitList()
			.then(data => {
				setCircuitList(data.payload);
				setTimeout(() => {
					unload();
				}, 100);
			})
			.catch(e => {
				console.error(e);
			});
	}, []);

	return circuitList;
};

export default useCircuitList;