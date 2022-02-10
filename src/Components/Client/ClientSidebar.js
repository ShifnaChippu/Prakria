import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function ClientSidebar() {
    return (
        <aside className="sidenav">
            <img src={require('./Assets/PrakriaLogo_Final.png')} alt="Prakria Direct Logo" className='Logo' />
            <NavLink to={"/client/create-project"} className='create-btn'>
                Create a project
            </NavLink>
            <nav className='nav-menu'>
                <ul>
                    <li><NavLink className='menu-item' to={"/client/projects"}>Projects</NavLink></li>
                    <li><NavLink className='menu-item' to={"/client/brands"}>Brands</NavLink></li>
                    <li><NavLink className='menu-item' to={"/client/files"}>Files</NavLink></li>
                    <li><NavLink className='menu-item' to={"/client/resource"}>Add a Resource</NavLink></li>
                    <li><NavLink className='menu-item' to={"/client/account"}>Account</NavLink></li>
                    <li><NavLink className='menu-item' to={"/"}>Logout</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
}

export default ClientSidebar;
