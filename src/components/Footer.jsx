import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../image/logo.png";

const FooterBox = styled.div`
  margin-top: 56px;
  background-color: #2e2f3e;
  color: #dcdde1;
  padding: 40px 60px;
  font-size: 14px;
  line-height: 1.6;
`;

const FooterListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
`;

const FooterList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  li a {
    color: #dcdde1;
    text-decoration: none;
    transition: color 0.3s;
  }
  li a:hover {
    color: #a0b9f5;
    text-decoration: underline;
  }
`;

const Address = styled.div`
  width: 680px;
  font-size: 12px;
  color: #aaa;
`;

function Footer() {
  return (
    <FooterBox>
      <FooterListBox>
        <Img src={Logo} alt="logo"></Img>
        <FooterList>
          <li>
            <Link to="/index">Home</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/coming">Coming</Link>
          </li>
          <li>
            <Link to="/comunity">Comunity</Link>
          </li>
          <li>
            <Link to="/mypage">MyPage</Link>
          </li>
        </FooterList>
      </FooterListBox>
      <Address>
        <p>
          (주)000 | 사업자등록번호 000-00-00000 [사업자정보확인] |
          통신판매업신고 : 0000-XXXXX-0000 | 인터넷 신문 | 등록번호: X0000 |
          제호: XXX XXX | 등록일: 2022-10-24 대표 : XXX | XXX XXX XXX 000번길
          00, 0동 0층 000호 | 000000000000 | ©2025 XXXXX Inc.
        </p>
      </Address>
    </FooterBox>
  );
}

export default Footer;
