import React, { createContext, useState } from 'react';

const ReportContext = createContext(null);

const ReportProvider = ({ children }) => {
	const initialReport = { raid: { name: '', encounters: [], participants: [] } };
	const [report, setReport] = useState(initialReport);

	const updateReport = (value) => {
		console.log("PROVIDER: ", value);
		setReport(value);
	}

	return (
		<ReportContext.Provider value={{ report, updateReport }}>
			{ children }
		</ReportContext.Provider>
	)
}

export { ReportProvider, ReportContext };