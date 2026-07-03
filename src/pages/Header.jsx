import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderRight from './HeaderRight';

function Header() {
    return (
        <div className='header'>
            <HeaderLogo/>
            <HeaderRight/>
        </div>
    );
}

export default Header;