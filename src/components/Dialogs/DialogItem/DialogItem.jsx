import React from 'react';

import s from './DialogItem.module.css';

const DialogItem = ({ id, name, }) => {
  return (
    <div className={s.dialog}>
      <NavLink to="/dialogs/1">Henry</NavLink>
    </div>
  );
};

export default DialogItem;
