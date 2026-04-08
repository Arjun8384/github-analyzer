import { formatDate } from "../../utils/formatDate";
import "./RepoList.css";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      <h3>Top 5 Latest Repositories</h3>

      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>

          <p>⭐ {repo.stargazers_count}</p>
          <p>Created: {formatDate(repo.created_at)}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;