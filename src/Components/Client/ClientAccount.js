import React from 'react';
import ClientHeader from './ClientHeader';
import ClientSidebar from './ClientSidebar';
import Tabs from './Tabs';

function ClientAccount() {
    return (
        <div className='container'>
            <ClientHeader />
            <ClientSidebar />
            <Tabs>
                <div label="Plans" className='tab-content'>
                    <h4 className='plan-title'>This month’s Plan</h4>
                    <div className="base-plan-block">
                        <div className="inner-block"></div>
                        <ul className="inner-content">
                            <li>Base Subscription Plan</li>
                            <li>
                                <button className='pause-btn'>Pause</button>
                                <button className='sub-btn'>End Subscription</button>
                            </li>
                        </ul>
                    </div>
                    <div className="base-plan-block-2">
                        <ul className="inner-content">
                            <li>Video Editor -  7 Days</li>
                            <li>
                                <span className='expiry-btn'>Expires in 3 Days</span>
                                <button className='sub-btn'>Renew</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div label="Account" className='tab-content'>
                    <div className="account_block">
                        <form>
                            <h3>Account Details</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>First Name</label><br />
                                    <input type="text" name='first-name' className='input-box' required />
                                </div>
                                <div className="col-md-6">
                                    <label>Last Name</label><br />
                                    <input type="text" name='last-name' className='input-box' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Company</label><br />
                                    <input type="text" name='company' className='input-box' required />
                                </div>
                                <div className="col-md-6">
                                    <label>Designation</label><br />
                                    <input type="text" name='designation' className='input-box' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Timezone</label><br />
                                    <input type="text" name='timezone' className='input-box' required />
                                </div>
                                <div className="col-md-6">
                                    <label>Phone Number</label><br />
                                    <input type="number" name='phone' className='input-box' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <label>Email</label><br />
                                    <input type="email" name='email' className='email-box' required />
                                </div>
                                <div className="col-md-4">
                                    <button className='save-btn'>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div label="Company" className='tab-content'>
                    <div className="account_block">
                        <form>
                            <h3>Company Details</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Company Name</label><br />
                                    <input type="text" name='company-name' className='cmp_name_box' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Website</label><br />
                                    <input type="text" name='website' className='input-box' required />
                                </div>
                                <div className="col-md-6">
                                    <label>Address</label><br />
                                    <input type="text" name='address' className='input-box' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Country</label><br />
                                    <input type="text" name='country' className='input-box-three' required />
                                </div>
                                <div className="col-md-4">
                                    <label>State</label><br />
                                    <input type="text" name='state' className='input-box-three' required />
                                </div>
                                <div className="col-md-4">
                                    <label>Postcode</label><br />
                                    <input type="text" name='postcode' className='input-box-three' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Taxcode</label><br />
                                    <input type="text" name='taxcode' className='input-box-three' required />
                                </div>
                                <div className="col-md-5">
                                    <label>Industry</label><br />
                                    <input type="text" name='industry' className='input-box-four' required />
                                </div>
                                <div className="col-md-3">
                                    <button className='save-btn'>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div label="Payments" className='tab-content'>
                    <em>Payments Details</em>!
                </div>
                <div label="Notification" className='tab-content'>
                    <div className="notification-list-items">
                        <ul>
                            <li>Status Notification</li>
                            <li>
                                <button className='on-btn'>ON</button>
                            </li>
                        </ul>
                    </div>
                    <div className="notification-list-items">
                        <ul>
                            <li>Message Notification</li>
                            <li>
                                <button className='on-btn off-btn'>OFF</button>
                            </li>
                        </ul>
                    </div>
                    <div className="notification-list-items">
                        <ul>
                            <li>Auto Renewal</li>
                            <li>
                                <button className='on-btn'>ON</button>
                            </li>
                        </ul>
                    </div>
                    <div className="notification-list-items">
                        <ul>
                            <li>Expiry Notification</li>
                            <li>
                                <button className='on-btn'>ON</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}

export default ClientAccount;