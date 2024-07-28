import css from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li className={css.friendListItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
