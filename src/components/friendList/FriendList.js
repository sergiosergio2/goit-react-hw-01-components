import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default
function FriendList ({friends}) {
    return (<ul className={s.friendList}>
        {friends.map(friend => (<FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnLine={friend.isOnLine}
            />
            ))}
            
   
  </ul>);
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}