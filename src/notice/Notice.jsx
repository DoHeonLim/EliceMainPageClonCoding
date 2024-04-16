import React from "react";
import "./Notice.css";

function Notice(props) {
  return (
    <div className="Notice">
      <div className="Notice_title">
        <div className="Notice_font">공지사항</div>
        <a href="https://aitrack.elice.io/notices" className="Notice_all">
          전체보기
        </a>
      </div>
      <div className="Notice_contents">
        <a href="https://aitrack.elice.io/notices/1978">
          <div className="Notice_content">
            <div>🫱🏻‍🫲🏻레이서 수업 참여 에티켓</div>
            <div className="time">
              <time datetime="24-03-29">10일전</time>
            </div>
          </div>
        </a>
        <a href="https://aitrack.elice.io/notices/1509">
          <div className="Notice_content">
            <div>엘리스 AI 트랙 공지사항 - 수료 기준</div>
            <div className="time">
              <time datetime="24-03-29">23-08-16</time>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Notice;
