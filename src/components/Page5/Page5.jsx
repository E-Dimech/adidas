import React from 'react';
import { Link } from 'react-router-dom';
import page6 from '../../assets/icons/page6.png';
import './page5.scss';

function Page5() {
    return (
        <div className="page5">
            <img src={page6} alt="Page 5" className="page5__screen"/>
            {/* <Link to='/6'> */}
                <div className="page5__button"/>
            {/* </Link> */}
        </div>
    );
};

export default Page5;
