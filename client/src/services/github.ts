// Service to handle GitHub API interactions
const API_URL = "https://api.github.com";

export interface GitConfig {
  owner: string;
  repo: string;
  branch: string;
  token: string;
}

export const getFileContent = async (config: GitConfig, path: string) => {
  const response = await fetch(`${API_URL}/repos/${config.owner}/${config.repo}/contents/${path}?ref=${config.branch}`, {
    headers: {
      Authorization: `token ${config.token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch file from GitHub. Check permissions.");
  
  const data = await response.json();
  // Decode Base64 content using browser API
  const content = atob(data.content);
  return { content, sha: data.sha };
};

export const updateFile = async (config: GitConfig, path: string, content: string, sha: string, message: string) => {
  const response = await fetch(`${API_URL}/repos/${config.owner}/${config.repo}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${config.token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: btoa(content), // Encode content to Base64
      sha,
      branch: config.branch,
    }),
  });

  if (!response.ok) throw new Error("Failed to update file on GitHub.");
  return await response.json();
};
