import React, { useState, useEffect } from 'react';
import './client.css';
import ClientHeader from './ClientHeader';
import ClientSidebar from './ClientSidebar';
import Tabs from './Tabs';
import { Link } from 'react-router-dom';
import JsonData from './data.json'
import axios from 'axios';
import swal from 'sweetalert';

function ClientProjects() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projects').then(res => {
            if (res.status === 200) {
                setProjects(res.data.projects)
                setLoading(false);
            }
        });

    }, []);

    const deleteProject = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`http://127.0.0.1:8000/api/delete-project/${id}`).then(res => {
            if (res.data.status === 200) {
                swal("Deleted!",res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if (res.data.status === 404) {
                console.log(res.data.message);
                swal("Error",res.data.message,"error");
                thisClicked.innerText = "Delete";
            }
        });
    }

    if (loading) {
        // return <h4>Loading Project Data...</h4>
    }
    else {
        var project_HTMLTABLE = "";

        project_HTMLTABLE = projects.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        {item.expected_duration >= 35 ?
                            <img src={require('./Assets/project-arrow.png')} alt='' className='project-arrow' /> :
                            <img src={require('./Assets/project-arrow-1.png')} alt='' className='project-arrow' />}
                    </td>
                    <td>{item.project_title}</td>
                    {/* <td>{item.owner}</td> */}
                    <td>{item.starting_date}</td>
                    <td>{item.expected_duration}</td>
                    <td>
                        <Link to={`edit-project/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        <button type="button" onClick={(e) => deleteProject(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            );
        });
    }

    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr className="tbl_data">
                    <td>
                        {info.active === 'true' ?
                            <img src={require('./Assets/project-arrow.png')} alt='' className='project-arrow' /> :
                            <img src={require('./Assets/project-arrow-1.png')} alt='' className='project-arrow' />}
                    </td>
                    <td className='project-name'>{info.name}</td>
                    <td>{info.last_update}</td>
                    <td>{info.expected_date}</td>
                </tr>
            )
        }
    )
    return (
        <div className='container'>
            <ClientHeader />
            <ClientSidebar />
            <Tabs>
                <div label="On-Going" className='tab-content'>
                    <div className="all_projects">
                        <div className="row">
                            <div className="col-md-12">
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Project Title</th>
                                            {/* <th>Owner</th> */}
                                            <th>Starting Date</th>
                                            <th>Expected Duration</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div label="Completed" className='tab-content'>
                    <em>Completed</em> Projects!
                </div>
                <div label="All" className='tab-content'>
                    <table className='project-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>PROJECT NAME</th>
                                <th>LAST UPDATE</th>
                                <th>EXPECTED DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayData}
                        </tbody>
                    </table>
                </div>
            </Tabs>
        </div>
    );
}

export default ClientProjects;
