import React from 'react'
import Header from '../Other/Header'
import TaskNummber from '../Other/TaskNummber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashbord(props) {

  return (
    <div>
        <div className='p-10 h-screen'>

            <Header changeUser={props.changeUser} data={props.data} />
            <TaskNummber data={props.data} />
            <TaskList data={props.data} />
        </div>
    </div>
  )
}

export default EmployeeDashbord