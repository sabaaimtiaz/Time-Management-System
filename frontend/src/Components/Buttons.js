// src/Components/Buttons.js
import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'; 
import './Buttons.css'; 

function Buttons({ buttons }) {
  return (
    <div className="buttons-container">
      {buttons.map((button, index) => (
        <Button
          key={index}
          type="dashed" 
          icon={<UserOutlined />} 
          className="custom-button" 
        >
          {button}
        </Button>
      ))}
    </div>
  );
}

export default Buttons;
