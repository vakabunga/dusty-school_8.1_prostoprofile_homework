import React, { FC } from 'react';
import './Avatar.css';
import { cnAvatar } from './Avatar.classname';
import avatarImage from '../../img/avatar.svg';


type AvatarProps = {
  name: string;
  bio: string;
};

const Avatar: FC<AvatarProps> = ({ name, bio }) => {
  return (
    <div className={cnAvatar()}>
      <div className={cnAvatar('ImageContainer')}>
        <img
          className={cnAvatar('ImageContainer-Image')}
          src={avatarImage}
          alt="back"
        />
        <button className={cnAvatar('ImageContainer-EditButton')}>
        </button>
      </div>
      <p className={cnAvatar('Name')}>{name}</p>
      <p className={cnAvatar('Bio')}>{bio}</p>
    </div>
  );
};

export { Avatar };
