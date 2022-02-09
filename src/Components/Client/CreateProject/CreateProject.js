import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import '../client.css'

function CreateProject() {
    const [projectInput, setProject] = useState({
        project_title: "",
        owner: "",
        starting_date: "",
        expected_duration: ""
    });

    const handleInput = (e) => {
        e.persist();
        setProject({ ...projectInput, [e.target.name]: e.target.value })
    }

    const saveStudent = (e) => {
        e.preventDefault();
        const data = {
            project_title: projectInput.project_title,
            owner: projectInput.owner,
            starting_date: projectInput.starting_date,
            expected_duration: projectInput.expected_duration
        }

        axios.post('http://127.0.0.1:8000/api/add-project', data).then(res => {
            if (res.data.status === 200) {
                console.log(res.data.message);
                swal("Success!",res.data.message,"success");
                setProject({
                    project_title: "",
                    owner: "",
                    starting_date: "",
                    expected_duration: ""
                });
            }
        });
    }

    return (
        <div className='create_project'>
            <NavLink to={'/client/projects'}>
                <img src={require('../Assets/resource_tag_2.png')} alt="" className='close-btn' />
            </NavLink>
            <div className="yellow-block"></div>
            <div className="blue-block"></div>
            <div className="create-form">
                <form onSubmit={saveStudent}>
                    <h3>Project Details</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Project Title</label><br />
                            <input type="text" name='project_title' onChange={handleInput} value={projectInput.project_title} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label>Owner</label><br />
                            <input type="text" name='owner' onChange={handleInput} value={projectInput.owner} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Starting Date</label><br />
                            <input type="date" name='starting_date' onChange={handleInput} value={projectInput.starting_date} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <label>Expected Duration</label><br />
                            <input type="number" name='expected_duration' placeholder='Number of Days' onChange={handleInput} value={projectInput.expected_duration} required />
                        </div>
                        <div className="col-md-4">
                            <button type='submit' className='save-btn'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProject;
