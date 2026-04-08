import { useState } from "react";
import BattleInput from "../components/Battle/BattleInput";
import BattleResult from "../components/Battle/BattleResult";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/Error/ErrorMessage";
import { fetchUser, fetchRepos } from "../services/githubApi";
import { calculateStars } from "../utils/calculateStars";

const Battle = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBattle = async (username1, username2) => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      // Parallel fetch users
      const [user1, user2] = await Promise.all([
        fetchUser(username1),
        fetchUser(username2),
      ]);

      // Parallel fetch repos
      const [repos1, repos2] = await Promise.all([
        fetchRepos(user1.repos_url),
        fetchRepos(user2.repos_url),
      ]);

      // Calculate stars
      const stars1 = calculateStars(repos1);
      const stars2 = calculateStars(repos2);

      // Decide winner
      let winner = "draw";
      if (stars1 > stars2) winner = "player1";
      else if (stars2 > stars1) winner = "player2";

      setResult({
        player1: { user: user1, stars: stars1 },
        player2: { user: user2, stars: stars2 },
        winner,
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <BattleInput onBattle={handleBattle} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {result && (
        <BattleResult
          player1={result.player1}
          player2={result.player2}
          winner={result.winner}
        />
      )}
    </div>
  );
};

export default Battle;