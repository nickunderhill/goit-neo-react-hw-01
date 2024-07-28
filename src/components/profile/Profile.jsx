import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileInfo}>
        <img className={css.profileImg} src={image} alt={name} />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
