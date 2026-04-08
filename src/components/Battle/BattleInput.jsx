import { useState } from "react";

const BattleInput = ({ onBattle }) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user1 || !user2) return;

    onBattle(user1, user2);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Warrior 1 (GitHub username)"
        value={user1}
        onChange={(e) => setUser1(e.target.value)}
      />

      <input
        type="text"
        placeholder="Warrior 2 (GitHub username)"
        value={user2}
        onChange={(e) => setUser2(e.target.value)}
      />

      <button type="submit">Battle ⚔️</button>
    </form>
  );
};

export default BattleInput;