import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <div>i am ther header</div>
        <section>
            <Outlet />
        </section>
        <div>i am the Footer</div>

    </div>
  )
}

export default Dashboard