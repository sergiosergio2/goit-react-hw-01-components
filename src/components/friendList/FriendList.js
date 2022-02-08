import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import FriendListItem from './FriendListItem';

export default
function FriendList (props) {
    return (<ul className={s.friendList}>
        {props.friends.map(friend => (<FriendListItem
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