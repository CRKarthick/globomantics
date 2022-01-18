import './house.css';
import { useState } from 'react';
import emailIcon from './Email.png';
import Inquiry from './Inquiry';
import PropTypes from 'prop-types';

const House = ({ house }) => {
    const [inquiryShown, setinquiryShown] = useState(false);
    const inquiryClick = () => {
        setinquiryShown(!inquiryShown);
    };

    return (
        <div>
            <div className='row mt-2'>
                <h5 className='col-md-12'>{house.country}</h5>
            </div>
            <div className='row'>
                <h3 className='col-md-12'>{house.address}</h3>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={`/images/${house.photo}.jpeg`} alt='House' />
                </div>
                <div className='col-md-5'>
                    <p className='price'>${house.price}</p>
                    <p>{house.description}</p>
                    <img
                        src={emailIcon}
                        alt='Inquiry'
                        height='50'
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry></Inquiry>}
                </div>
            </div>
        </div>
    );
};

House.prototypes = {
    house: PropTypes.object.isRequired,
};

export default House;
