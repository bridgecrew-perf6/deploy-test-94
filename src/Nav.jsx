import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Outlet />
        </div>
    )
}