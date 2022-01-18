import { useState } from 'react';

const Inquiry = () => {
    const [contactInfo, setcontactInfo] = useState({
        name: '',
        email: '',
        remarks: '',
    });

    const onChange = e => {
        setcontactInfo({ ...contactInfo, [e.target.id]: [e.target.value] });
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(contactInfo);
        // send
    };
    return (
        <form className='mt-2'>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    id='name'
                    value={contactInfo.name}
                    onChange={onChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Email'
                    id='email'
                    value={contactInfo.email}
                    onChange={onChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='remarks'>Remarks</label>
                <input
                    type='remarks'
                    className='form-control'
                    placeholder='Remarks'
                    id='remarks'
                    value={contactInfo.remarks}
                    onChange={onChange}
                />
            </div>
            <button
                className='btn btn-primary mt-2'
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
};

export default Inquiry;
