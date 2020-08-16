import React, { createContext, useState } from 'react'

const ReportContext = createContext(null)

// eslint-disable-next-line react/prop-types
const ReportProvider = ({ children }) => {
  const initialReport = { code: '', fights: [], friendlies: [] }
  const [report, setReport] = useState(initialReport)

  const updateReport = (value) => {
    setReport(value)
  }

  return (
    <ReportContext.Provider value={{ report, updateReport }}>
      {children}
    </ReportContext.Provider>
  )
}

export { ReportProvider, ReportContext }
