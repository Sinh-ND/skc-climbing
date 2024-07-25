import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';


const ScrollToTopButton = () => {
  // State để theo dõi sự hiện diện của nút "Scroll to Top"
  const [isVisible, setIsVisible] = useState(false);

  // Hàm kiểm tra vị trí cuộn trang và thay đổi trạng thái hiển thị của nút
  const toggleVisibility = () => {
    // window.scrollY trả về khoảng cách từ đầu trang đến vị trí hiện tại của cuộn trang theo trục Y
    if (window.scrollY > 300) {
      setIsVisible(true);  // Hiển thị nút nếu cuộn trang vượt quá 300px
    } else {
      setIsVisible(false); // Ẩn nút nếu không vượt quá 300px
    }
  };

  // Hàm cuộn trang về đầu trang với hiệu ứng cuộn mượt mà
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,          // Vị trí cuộn trở về đầu trang
      behavior: 'smooth', // Hiệu ứng cuộn mượt mà
    });
  };

 
  // useEffect để gán và dỡ bỏ sự kiện cuộn khi component được lắp ráp và dỡ bỏ
  useEffect(() => {
    // Gán sự kiện 'scroll' để kiểm tra sự thay đổi vị trí cuộn trang
    window.addEventListener('scroll', toggleVisibility);

    // Hàm dỡ bỏ sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Mảng rỗng nghĩa là useEffect chỉ chạy khi component được lắp ráp và dỡ bỏ

  return (
    <div className="scroll-to-top">
      {/* Hiển thị nút "Scroll to Top" chỉ khi isVisible là true */}
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
        </button>
      )}
     
    </div>
  );
};

export default ScrollToTopButton;
