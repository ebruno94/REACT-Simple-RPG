import React from 'react';

export default function Footer(){
  return(
    <div>
      <style jsx>{`
        .footer{
          position: fixed;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: black;
          color: white;
          text-align: center;
        }
      `}</style>
      <div className='footer'>
        <p>Copyright (c) 2018 All Rights Reserved.</p>
      </div>
    </div>
  );
}
