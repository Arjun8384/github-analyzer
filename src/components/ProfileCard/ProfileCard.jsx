import "./ProfileCard.css";
import { formatDate } from "../../utils/formatDate";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt="avatar" />

      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available"}</p>

      <p>Joined: {formatDate(user.created_at)}</p>

      {user.blog && (
        <a href={user.blog} target="_blank" rel="noreferrer">
          Portfolio
        </a>
      )}
    </div>
  );
};

export default ProfileCard;