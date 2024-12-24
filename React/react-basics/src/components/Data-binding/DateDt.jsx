import React, { useState } from 'react'

function DateDt() {
    const [mfd]=useState(new Date());
  return (
    <div>
      <h2>{mfd.toTimeString()}</h2>
      <h2>{mfd.toDateString()}</h2>
    </div>

  )
}

export default DateDt
