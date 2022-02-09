import React from 'react';
import ClientHeader from './ClientHeader';
import ClientSidebar from './ClientSidebar';

function ClientResource() {
    const DisplayData = [{
        "id": 1,
        "name": "Graphic Designer",
        "status": "normal"
    },

    {
        "id": 2,
        "name": "Web Designer",
        "status": "urgent"
    },

    {
        "id": 3,
        "name": "Graphic Designer",
        "status": "urgent"
    },

    {
        "id": 4,
        "name": "Graphic Designer",
        "status": "none"
    }];
    const handleTag=(status)=>{
        if(status === 'urgent') {
           return <img src={require('./Assets/resource_tag_1.png')} alt="" className='resource_tag' />
        }
        else if (status === 'normal') {
            return <img src={require('./Assets/resource_tag.png')} alt='' className='resource_tag' />
        }
        else{
            return <img src={require('./Assets/resource_tag_2.png')} alt='' className='resource_tag' />
        }
    }
    return (
        <div className='container'>
            <ClientHeader />
            <ClientSidebar />
            <div className="home-bar">
                Add a Resource
            </div>
            <section className="content-blocks">
                {DisplayData.map(
                    (info) => {
                        return (
                            <div className="resource-list-items">
                                <ul>
                                    <li>
                                        {handleTag(info.status)}
                                    </li>
                                    <li>{info.name}</li>
                                    <li>
                                        <button className='add-to-plan'>Add to Plan</button>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                )}
            </section>
        </div>
    );
}

export default ClientResource;