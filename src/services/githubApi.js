export const fetchUser = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    throw new Error("User not found");
  }

  return await res.json();
};

export const fetchRepos = async (repos_url) => {
  const res = await fetch(repos_url);

  if (!res.ok) {
    throw new Error("Failed to fetch repos");
  }

  return await res.json();
};