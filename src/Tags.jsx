import React from 'react';
import style from './app.module.css';
import { TiDelete } from 'react-icons/ti';

const Tags = (props) => {
  return (
    <ul className={style.list}>
      {props.tags.map((tag, index) => {
        return (
          <li className={style.tag}>
            <span className={style.tagTitle}>{tag}</span>
            <TiDelete onClick={() => props.removeTags(index)} className={style.deleteBtn} />
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
