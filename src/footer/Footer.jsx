import React from "react";
import logo from "../images/elice_small_logo.png";
// import "./Footer.css";
// styled-components
import styled from "styled-components";

const Contents = styled.div`
  display: flex;
  width: 90%;
  max-width: auto;
  height: 100%;
  margin-left: 10%;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
`;

const AliceLogo = styled.img`
  width: 60px;
  height: 10px;
`;

const Link = styled.a`
  padding-right: 20px;
  color: black;

  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    color: black;
  }
`;

const FooterEtc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Select = styled.select`
  border: 0 solid white;
  font-size: 12px;
`;

function Footer() {
  return (
    <footer>
      <Contents>
        <nav className="navigation">
          <Link href="https://elice.io/ko">
            <AliceLogo src={logo} alt="alice_logo" />
          </Link>

          <Link href="https://legal.elice.io/policies/terms">약관 안내</Link>
          <Link href="https://legal.elice.io/policies/privacy/2024-01-01">
            <strong style={{ fontSize: "12px" }}>개인정보처리방침</strong>
          </Link>
          <Link href="https://elice.notion.site/644e6af17741452db3263f72dd5876a2">
            업데이트 소식
          </Link>
          <Link href="">고객 문의</Link>
        </nav>
        <FooterEtc>
          <div
            style={{
              fontSize: "8px",
              color: "rgb(0, 171, 83)",
              paddingRight: 4,
            }}
          >
            {" "}
            ●
          </div>
          <Link href="https://status.elice.io/">서비스 상태</Link>

          <Select name="languages" id="lang">
            <option value="korean">한국어</option>
            <option value="english">english</option>
          </Select>
        </FooterEtc>
      </Contents>
    </footer>
  );
}

export default Footer;
