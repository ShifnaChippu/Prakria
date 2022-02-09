import React from 'react';
import ClientHeader from './ClientHeader';
import ClientSidebar from './ClientSidebar';

function ClientBrands() {
    return (
        <div className='container'>
            <ClientHeader />
            <ClientSidebar />
            <div className="home-bar">
                All Files
            </div>
            <section className="content-blocks">
                <div className="row">
                    <div className="col-md-6">
                        <div className="brand-block">Brand 1</div>
                    </div>
                    <div className="col-md-6">
                        <div className="brand-block">Brand 2</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="brand-block">Brand 3</div>
                    </div>
                    <div className="col-md-6">
                        <div className="brand-block">Brand 4</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientBrands;
