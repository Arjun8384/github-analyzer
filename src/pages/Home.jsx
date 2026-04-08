import { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import RepoList from "../components/RepoList/RepoList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/Error/ErrorMessage";
import { fetchUser, fetchRepos } from "../services/githubApi";

const Home = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");
      setUser(null);

      const userData = await fetchUser(username);
      const repoData = await fetchRepos(userData.repos_url);

      // Sort + top 5 latest
      const topRepos = repoData
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 5);

      setUser(userData);
      setRepos(topRepos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {user && <ProfileCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
};

export default Home;