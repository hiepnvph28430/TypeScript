import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <aside>
                <img src="https://picsum.photos/300/300" alt="" />
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout