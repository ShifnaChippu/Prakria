import React from 'react';

function ClientHeader() {
    return (
        <header>
            <div className="header-content">
                Welcome Raghav, Let's Get Started...
                <img src={require('./Assets/HeaderIcon-1.png')} alt="Icon 1" className='icon-1' />
                <img src={require('./Assets/round-red.png')} alt="Icon 1" className='icon-round-1' />
                <img src={require('./Assets/round-yellow.png')} alt="Icon 1" className='icon-round-2' />
                <img src={require('./Assets/HeaderIcon-2.png')} alt="Icon 1" className='icon-2' />
                <img src={require('./Assets/round-red.png')} alt="Icon 1" className='icon-round-3' />
            </div>
        </header>
    );
}

export default ClientHeader;
