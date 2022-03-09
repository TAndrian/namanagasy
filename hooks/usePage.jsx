import React, {
	useState,
	useMemo,
	useContext,
	createContext
} from "react";

/*
	Page hook and context
*/

// Setup context
const PageContext = createContext({});

// Setup provider wrapper
const PageProvider = ({ children, defaultLoading }) => {
	const [loading, setLoading] = useState(defaultLoading ? true : false);

	// Switch loading
	const load = () => setLoading(true);
	const unload = () => setLoading(false);

	// Memoize values to prevent futile re-renders
	const memoizedValues = useMemo(() => ({
		loading, load, unload
	}), [loading]);

	return (
		<PageContext.Provider value={ memoizedValues }>
			{ children }
		</PageContext.Provider>
	);
};

const usePage = () => useContext(PageContext);

export {
	usePage,
	PageProvider
};