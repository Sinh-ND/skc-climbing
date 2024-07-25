import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZaloIcon from './zalo.svg'; // Đường dẫn tới tệp SVG của Zalo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';



const FeedbackButton = () => {
    //-----------------kích chuyển về đầu trang-----------
    // Hook để điều hướng trang
    const navigate = useNavigate();
    // Xử lý sự kiện khi người dùng nhấp vào liên kết điều hướng
    const handleNavLinkClick = (path) => {
        // Điều hướng đến đường dẫn mới
        navigate(path);
        // Cuộn lên đầu trang một cách mượt mà
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleZaloClick = () => {
        // Điều hướng đến link Zalo
        window.open('https://zalo.me/g/idiyqa927', '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <button className="feedback-button" onClick={() => handleNavLinkClick('/feedback')}>
                {/* <FontAwesomeIcon icon={faComment} size="3x" /> */}
                {/* <FontAwesomeIcon icon={faCommentDots} size="3x" /> */}
                {/* <FontAwesomeIcon icon={faStar} size="3x" /> */}
                {/* <FontAwesomeIcon icon={faQuestionCircle} size="3x" /> */}
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                {/* <FontAwesomeIcon icon={faExclamationCircle} size="3x" /> */}
            </button>
            <div className=" zalo-button" onClick={handleZaloClick}>
                <img src={ZaloIcon} alt="Zalo" />
                {/* Hoặc nếu bạn muốn sử dụng Font Awesome cho biểu tượng Zalo */}
                {/* <FontAwesomeIcon icon={faZalo} size="lg" /> */}

            </div>
        </div>
    );
};

export default FeedbackButton;
