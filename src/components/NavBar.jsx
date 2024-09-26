import YouTubeLogo from "./YouTubeLogo";
export default function NavBar() {
  return (
    //<nav id="navbar">
    <nav className="col-start-1 col-end-3 grid grid-cols-3">
      <div className="flex flex-row items-center gap-1 pl-4">
        <YouTubeLogo height="1.8rem" width="3rem " />
        <span>Youtube</span>
      </div>
      <div className="flex items-center justify-center">
        <input
          className=" w-full pt-2 pb-2 pr-4 pl-4 border border-solid border-[#282828] rounded-2xl bg-transparent"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex justify-end">
        <img
          className="w-8 h-8 rounded-full "
          src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Leo"
          alt="avatar"
        />
      </div>
      <div></div>
    </nav>
  );
}
