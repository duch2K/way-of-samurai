import React from 'react';

import s from './Message.module.css';

const Message = ({ message }) => {
  return (
    <div className={s.message}>{ message }</div>
  );
};

export default Message;
