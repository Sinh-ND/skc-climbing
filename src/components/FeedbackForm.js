import React, { useState } from 'react';

const FeedbackForm = () => {
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Gửi dữ liệu feedback đi (Bạn có thể thêm logic gửi dữ liệu ở đây)
        console.log('Fullname:', fullname);
        console.log('Gender:', gender);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Feedback:', feedback);

        // Sau khi gửi, có thể xử lý thêm như hiển thị thông báo, xoá dữ liệu form, vv.
        // Ví dụ:
        alert('Thank you for submitting your feedback!');
        setFullname('');
        setGender('');
        setEmail('');
        setPhoneNumber('');
        setFeedback('');
    };

    return (
      

        <div className='col-md-4 mt-3 form-feedback'>
          
             <h3 className='form-feedback1'><strong>Feedback</strong></h3>
             <hr/>
           
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname"><strong>Fullname</strong></label>
                    <input
                        type="text"
                        id="fullname"
                        placeholder="NGUYEN DUC SINH" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gender"><strong>Gender</strong></label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>


                <div className="form-group">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email:abc@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber"><strong>Phone Number</strong></label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        placeholder="08498989[xxxx]"
                        pattern="\d{3}\d{5,9}"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback"><strong>Your Feedback</strong></label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={6}
                        required
                    />
                </div>
                <button className='submit-button' type="submit" >Submit</button>
            </form>
        </div>

    );
};

export default FeedbackForm;
