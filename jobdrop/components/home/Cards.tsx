'use client';

import React from 'react';

type CardProps = {
  title: string;
  description: string;
  date: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, date, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-[210px] p-4 bg-[#f1f1f3] rounded-xl shadow-md hover:shadow-lg transition relative font-sans"
    >
      <h3 className="text-[1.3rem] font-bold text-[#3c3852] hover:text-[#7257fa] hover:underline">
        {title}
      </h3>
      <p className="text-[0.86rem] text-[#3c3852] mt-4">{description}</p>
      <div className="text-[0.8rem] text-[#6e6b80] mt-4">{date}</div>

      <div className="absolute bottom-0 right-0 bg-[#7257fa] p-2 rounded-bl-xl rounded-tr-xl transition hover:bg-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15"
          width="15"
        >
          <path
            fill="#fff"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;
