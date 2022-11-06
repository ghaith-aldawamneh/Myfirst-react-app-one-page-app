import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Tasks = ({tasks}) => {
  return (

        <>{tasks.map((ee)=>(<h3 key={ee.id}>{ee.text}</h3>))}</>
  )
}

export default Tasks

