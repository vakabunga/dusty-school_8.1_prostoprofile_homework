import React, { FC } from 'react';
import './Avatar.css';
import { cnAvatar } from './Avatar.classname';
// import back from './back.svg';

type AvatarProps = {
  name: string;
  bio: string;
};

const Avatar: FC<AvatarProps> = ({ name, bio }) => {
  return (
    <div className={cnAvatar('Container')}>
      <div className={cnAvatar('')}>
        <img
          className={cnAvatar('Image')}
          src="../../img/avatar.svg"
          alt="back"
        />
        <button className={cnAvatar('Button-Edit')}>
          {/* <img className={cnAvatar('Edit-Image')} src="../../img/edit.svg" alt="" /> */}
        </button>
      </div>
      <p className={cnAvatar('Name')}>{name}</p>
      <p className={cnAvatar('Bio')}>{bio}</p>
    </div>
  );
};

export { Avatar };
