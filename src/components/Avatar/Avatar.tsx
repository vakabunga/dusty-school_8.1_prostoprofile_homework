import React, { FC } from 'react';
import './Avatar.css';
import { cnAvatar } from './Avatar.classname';
import AvatarImage from '../../img/avatar.svg';

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
          src={AvatarImage}
          alt="back"
        />
        <button className={cnAvatar('Button-Edit')}>
        </button>
      </div>
      <p className={cnAvatar('Name')}>{name}</p>
      <p className={cnAvatar('Bio')}>{bio}</p>
    </div>
  );
};

export { Avatar };
