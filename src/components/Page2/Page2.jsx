import React from 'react';
import { Link } from 'react-router-dom';
import page3 from '../../assets/icons/page3.png';
import './page2.scss';

function Page2() {
    return (
        <div className="page2">
            <img src={page3} alt="Page 2" className="page2__screen"/>
            {/* <Link to='/3'> */}
                <div className="page2__button"/>
            {/* </Link> */}
        </div>
    );
};

export default Page2;
