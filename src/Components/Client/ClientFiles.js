import React from 'react';
import ClientHeader from './ClientHeader';
import ClientSidebar from './ClientSidebar';

function ClientFiles() {
    const DisplayData = [{
        "id":1,
        "brand_name":"BRAND ONE",
        "last_update":"02 March, 17:00",
        "file_size":"300 MB"
    },
    
    {
        "id":2,
        "brand_name":"BRAND TWO",
        "last_update":"02 March, 17:00",
        "file_size":"300 MB"
    },
    
    {
        "id":3,
        "brand_name":"BRAND THREE",
        "last_update":"02 March, 17:00",
        "file_size":"300 MB"
    },
    
    {
        "id":4,
        "brand_name":"BRAND FOUR",
        "last_update":"02 March, 17:00",
        "file_size":"300 MB"
    }];
    return (
        <div className='container'>
            <ClientHeader />
            <ClientSidebar />
            <div className="home-bar">
                Files
            </div>
            <section className="content-blocks">
                <ul className='list-heads'>
                    <li>BRANDS</li>
                    <li>LAST UPDATE</li>
                    <li>FILE SIZE</li>
                </ul>
                {DisplayData.map(
                    (info) => {
                        return (
                            <div className="list-items">
                                <ul>
                                    <li>
                                        <span className="brand_green_tag">
                                            <img src={require('./Assets/drop-down.png')} alt="" className='drop-down'/>
                                        </span>
                                    </li>
                                    <li>{info.brand_name}</li>
                                    <li>{info.last_update}</li>
                                    <li>{info.file_size}</li>
                                </ul>
                            </div>
                        )
                    }
                )}
            </section>
        </div>
    );
}

export default ClientFiles;
