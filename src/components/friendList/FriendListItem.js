import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, isOnline })  {
  
  const online = isOnline ?  s.statusActive : s.status;
  // console.log(FriendListItem);
  return (
    <li className={s.item} key={id}>
      <span className={online}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={id} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};