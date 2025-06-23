import { Link } from "react-router-dom";
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
        <Link to="/index">Game Zone</Link>
      </Logo>
      <NavList>
        <li className="home">
          <Link to="/index">Home</Link>
        </li>
        <li className="event">
          <Link to="/event">Event</Link>
        </li>
        <li className="coming">
          <Link to="/coming">Coming</Link>
        </li>
        <li className="comunity">
          <Link to="/comunity">Comunity</Link>
        </li>
        <li className="mypage">
          <Link to="/mypage">MyPage</Link>
        </li>
      </NavList>
    </NavBox>
  );
}

export default Nav;
