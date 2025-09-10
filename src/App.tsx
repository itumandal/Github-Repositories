import { useState } from "react";
import "./App.css";
import GitHubContent from "./components/GitHubContent";
import GithubFormElements from "./components/GithubFormElements";

/**
 * 
 * @returns - You are given a task to fetch github repo where you will pass param as 1 and per page it should fetch 10
- on scroll bar it should load more and show loading as you move down
- url - https://api.github.com/
 */
export interface IRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  owner: { login: string };
  updated_at: string;
}
function App() {
  const [repoName, setRepoName] = useState("");
  const [allRepoData, setAllRepoData] = useState<IRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetchGithubRepositories = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.github.com/search/repositories?q=${repoName}`
      );
      if (!data.ok) {
        throw new Error("Error loading repos...");
      }
      const parsedRepos = await data.json();
      console.log(parsedRepos.items);
      setAllRepoData(parsedRepos.items);
    } catch (error) {
      setIsError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchRepo = () => {
    if (!repoName.trim) return;
    fetchGithubRepositories();
    setRepoName("");
  };
  return (
    <div>
      <h1 className="text-center p-2 font-bold">Github Repositories Search</h1>
      <GithubFormElements
        reponame={repoName}
        handleSetRepoName={setRepoName}
        handleSearchRepo={handleSearchRepo}
      />
      {isLoading && !isError && (
        <h2 className="text-center font-bold">Loading...</h2>
      )}
      {isError && (
        <p className="text-center font-black text-red-600">{isError}</p>
      )}
      {!isLoading &&
      !isError &&
      allRepoData.length === 0 &&
      !repoName.trim() ? (
        <p className="text-center font-bold">No results found</p>
      ) : (
        allRepoData.map((repodata) => (
          <GitHubContent key={repodata.id} repo={repodata} />
        ))
      )}
    </div>
  );
}

export default App;
