import ProfileCard from "../ProfileCard/ProfileCard";
import "./Battle.css";

const BattleResult = ({ player1, player2, winner }) => {
  return (
    <div className="battle-container">
      
      <div className={`battle-card ${winner === "player1" ? "winner" : "loser"}`}>
        <h3>Player 1</h3>
        <ProfileCard user={player1.user} />
        <p>Total Stars: {player1.stars}</p>
      </div>

      <div className={`battle-card ${winner === "player2" ? "winner" : "loser"}`}>
        <h3>Player 2</h3>
        <ProfileCard user={player2.user} />
        <p>Total Stars: {player2.stars}</p>
      </div>

    </div>
  );
};

export default BattleResult;