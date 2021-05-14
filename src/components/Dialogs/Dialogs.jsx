import React from 'react';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id="1" name="John" />
        <DialogItem id="2" name="Jay" />
        <DialogItem id="3" name="Alex" />
      </div>
      <div className={s.messages}>
        <Message message="Hey" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;