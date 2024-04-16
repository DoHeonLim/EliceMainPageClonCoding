import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  background: white;
  color: black;
  padding: 14px 10px;
  border-radius: 20px;
  border: 1px solid #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: 0.35s ease all;
  overflow: hidden;
  max-width: 72px; /* icon size */
  &:hover {
    max-width: 100%;
  }
`;

const EliceIcon = styled.div`
  position: relative;
  background-color: #8780ff;
  border-radius: 50px;
  padding: 8px 10px;
  margin-left: 4px;
`;

const EliceIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 280px;
`;

const EliceIconTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  padding: 0 8px;
  transform: translateX(10px);
`;

const EliceIconSub = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #5e5f61;
  white-space: nowrap;
  padding: 0 8px;
  transform: translateX(10px);
`;

export default function Dial() {
  return (
    <Button>
      <EliceIcon>
        <svg
          viewBox="0 0 1080 1080"
          focusable="false"
          role="img"
          style={{
            width: 24,
            height: "auto",
            fontSize: "10px",
          }}
        >
          <path
            fill="#fff"
            d="m596.351 112.5-.015 377.01 356.666-116.019 34.81 106.979-356.871 116.095 218.901 302.356-91.126 65.971-218.945-302.447-220.853 300.876-90.684-66.578L449.051 595.89 92.381 480.5l34.628-107.038L483.836 488.88l.015-376.38h112.5z"
          ></path>
        </svg>
      </EliceIcon>
      <EliceIconDiv>
        <EliceIconTitle>모두의교실</EliceIconTitle>
        <EliceIconSub>모르는 문제는 여기서 도움을 요청하세요!</EliceIconSub>
      </EliceIconDiv>
    </Button>
  );
}
