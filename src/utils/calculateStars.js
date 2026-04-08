export const calculateStars = (repos) => {
    return repos.reduce((total, repo) => {
        return total + repo.stargazers_count;
    }, 0);
};