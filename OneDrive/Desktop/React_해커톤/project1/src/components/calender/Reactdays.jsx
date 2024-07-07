import React, {useState} from 'react'
import Calendar from 'react-calendar'

function Reactdays() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is   </p>
    </>
  )
}

export default Reactdays

{/* <b>{moment(dateState).format('MMMM Do YYYY')}</b> */}
