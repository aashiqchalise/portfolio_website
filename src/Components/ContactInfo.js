import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-1 icon ">
                    <FontAwesomeIcon icon={props.iconn} />
                </div>
                <div className="col-sm-11">
                    <h5 className='font-poppins mb-0'>{props.title}</h5>
                    <p className='font-poppins'>{props.ans}</p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo
