import React from 'react';
import { Link } from 'react-router-dom';
import page5 from '../../assets/icons/page5.png';
import './page4.scss';

function Page4() {
    return (
        <div className="page4">
            <img src={page5} alt="Page 4" className="page4__screen"/>
            {/* <Link to='/5'> */}
                <div className="page4__button"/>
            {/* </Link> */}
        </div>
    );
};

export default Page4;
