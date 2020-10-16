import React from 'react';
import { Link } from 'react-router-dom';
import page2 from '../../assets/icons/page2.png';
import './page1.scss';

function Page1() {
    return (
        <div className="page1">
            <img src={page2} alt="Page 1" className="page1__screen"/>
            {/* <Link to='/2'> */}
                <div className="page1__button"/>
            {/* </Link> */}
        </div>
    );
};

export default Page1;
