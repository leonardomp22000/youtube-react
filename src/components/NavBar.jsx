import YouTubeLogo from "./YouTubeLogo";
export default function NavBar() {
  return (
    <nav id="navbar">
      <div id="logo">
        <YouTubeLogo height="1.8rem" width="3rem " />
        <span>Youtube</span>
      </div>
      <div id="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div id="user-Icon">
        <img
          src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Leo"
          alt="avatar"
        />
      </div>
      <div></div>
      
    </nav>
  );
}
