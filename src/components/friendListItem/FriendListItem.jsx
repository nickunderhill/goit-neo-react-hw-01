import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? 'online' : 'offline';
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" />
      <p className={css.friendName}>{name}</p>
      <p className={css[status]}>{status}</p>
    </div>
  );
};

export default FriendListItem;
