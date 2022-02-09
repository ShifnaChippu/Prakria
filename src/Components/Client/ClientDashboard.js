import React from 'react';
import ReactDOM from "react-dom";
import './client.css';
import ClientHeader from './ClientHeader';
import ClientHome from './ClientHome';
import ClientSidebar from './ClientSidebar';

function ClientDashboard() {
    return (
        <div className='container'>
            <ClientHeader />
            <ClientSidebar />
            <div id="content-part">
                <ClientHome />
            </div>
        </div>
    );
}

export default ClientDashboard;