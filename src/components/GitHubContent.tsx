import type { IRepo } from "../App";

type GitHubContentProp = {
  repo: IRepo;
};
const GitHubContent: React.FC<GitHubContentProp> = (props) => {
  const { repo } = props;
  return (
    <div className="text-center m-2 p-2 bg-white  rounded-xl shadow-lg">
      <h4>Repository name - {repo.name}</h4> ⭐ {repo.stargazers_count}
      <p>{repo.description}</p>
      <p>{repo.owner.login}</p>
      <h5>{repo.stargazers_count}</h5>
      <h5>Updated: {new Date(repo.updated_at).toLocaleDateString()}</h5>
    </div>
  );
};

export default GitHubContent;
