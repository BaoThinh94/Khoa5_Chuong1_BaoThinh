import React from 'react';
import { Button, notification, Space } from 'antd';



// type NotificationType = 'success' | 'info' | 'warning' | 'error'
  

  export const openNotificationWithIcon = (type, des) => {
    notification[type]({
      message: '',
      description:des,
    });
  };

