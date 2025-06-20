import styled from "styled-components";

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 60px;
  background: #2c3e50;
  color: #ffffff;
`;

const Logo = styled.h1`
  a {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;

  li a {
    font-size: 16px;
    color: #cfd6e1;
    text-decoration: none;
    transition: color 0.3s;
  }

  li.active a {
    color: #a0b9f5;
    font-weight: bold;
    border-bottom: 2px solid #a0b9f5;
  }

  li a:hover {
    color: #a0b9f5;
    border-bottom: 2px solid #a0b9f5;
    padding-bottom: 4px;
  }
`;

function Nav() {
  return (
    <NavBox>
      <Logo>
        <a href="?#">Game Zone</a>
      </Logo>
      <NavList>
        <li className="home">
          <a href="?#">Home</a>
        </li>
        <li className="event">
          <a href="?#">Event</a>
        </li>
        <li className="coming">
          <a href="?#">Coming</a>
        </li>
        <li className="comunity">
          <a href="?#">Comunity</a>
        </li>
        <li className="mypage">
          <a href="?#">MyPage</a>
        </li>
      </NavList>
    </NavBox>
  );
}

export default Nav;
