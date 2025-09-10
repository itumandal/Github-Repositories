interface IGithubFormElementsProps {
  reponame: string;
  handleSetRepoName: React.Dispatch<React.SetStateAction<string>>;
  handleSearchRepo: () => void;
}
const GithubFormElements: React.FC<IGithubFormElementsProps> = (props) => {
  const { reponame, handleSetRepoName, handleSearchRepo } = props;
  return (
    <div className="p-2 my-auto mx-60">
      <input
        type="text"
        id="repo"
        placeholder="Enter repository name..."
        className="border border-gray-400 rounded px-2 py-1 text-black"
        value={reponame}
        onChange={(e) => handleSetRepoName(e.target.value)}
      />
      <button
        className="p-2 m-2 cursor-pointer rounded-lg bg-green-300"
        disabled={!reponame.trim()}
        onClick={handleSearchRepo}
      >
        Search
      </button>
      <label htmlFor="page">Page: </label>
      <select
        className="border m-2 border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        name="page"
        id="page"
      >
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="50">50 per page</option>
      </select>
      <label htmlFor="sortby">Sort: </label>
      <select
        className="border m-2 border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        name="sortby"
        id="sortby"
      >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Last Updated Date</option>
      </select>
      <label htmlFor="order">Order: </label>
      <select
        className="border m-2 border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        name="order"
        id="order"
      >
        <option value="desc">Highest → Lowest</option>
        <option value="asc">Lowest → Highest</option>
      </select>
    </div>
  );
};

export default GithubFormElements;
