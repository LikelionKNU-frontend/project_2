import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <h1 className="logo">
        <a href="?#">Game Zone</a>
      </h1>
      <ul className="nav_list">
        <li className="home">
          <a href="?#">홈</a>
        </li>
        <li className="event">
          <a href="?#">이벤트</a>
        </li>
        <li className="coming">
          <a href="?#">출시예정</a>
        </li>
        <li className="comunity">
          <a href="?#">커뮤니티</a>
        </li>
        <li className="mypage">
          <a href="?#">마이페이지</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
