import "./Footer.css";

function Footer() {
  return (
    <div className="footer_wrap">
      <div className="footer_list_box">
        <h1>로고 이미지</h1>
        <ul className="footer_list">
          <li>
            <a href="?#">홈</a>
          </li>
          <li>
            <a href="?#">이벤트</a>
          </li>
          <li>
            <a href="?#">출시예정</a>
          </li>
          <li>
            <a href="?#">커뮤니티</a>
          </li>
          <li>
            <a href="?#">마이페이지</a>
          </li>
        </ul>
      </div>
      <div className="address">
        <p>
          (주)000 | 사업자등록번호 000-00-00000 [사업자정보확인] |
          통신판매업신고 : 0000-XXXXX-0000 | 인터넷 신문 | 등록번호: X0000 |
          제호: XXX XXX | 등록일: 2022-10-24 대표 : XXX | XXX XXX XXX 000번길
          00, 0동 0층 000호 | 000000000000 | ©2025 XXXXX Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
