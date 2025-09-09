import React from 'react'
import {HashLoader } from 'react-spinners'
function spinner({loading}) {
  return (
      <div>
      <HashLoader color = "#0a7bff" size={20} 
    cssOverride = {{margin: "48px auto", Textalign: "center"}}
    loading={loading} 
    />
    </div>
  )
}

export default spinner