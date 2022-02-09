import React from 'react';

function ClientHome() {
    return (
        <div>
            <div className="home-bar">
                Home
            </div>
            <section className="content-blocks">
                <div className="row">
                    <div className="block-1">
                        <h2>
                            Now Customize Your <br />
                            Plan according to <br />
                            your need
                        </h2>
                        <h5>
                            Update your current plan
                        </h5>
                    </div>
                    <img src={require('./Assets/block-2.png')} alt="" className='block-2' />
                </div>
                <div className="row">
                    <img src={require('./Assets/block-3.png')} alt="" className="block-3" />
                    <div className="block-4">
                        <h2>
                            Run Multiple Tasks <br />
                            Simultaneously
                        </h2>
                        <h5>
                            Update your current plan
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <img src={require('./Assets/block-5.png')} alt="" className="block-5" />
                </div>
                <div className="row">
                    <img src={require('./Assets/block-6.png')} alt="" className="block-6" />
                    <div className="block-7">
                        <h2>
                            Pause your<br />
                            plan when<br />
                            you want to.
                        </h2>
                        <h5>
                            7 Days Pause on 6 &<br />
                            12 months packages
                        </h5>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientHome;
