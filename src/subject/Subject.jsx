import React from "react";
import "./Subject.css";
import week7 from "../images/7week.png";
import week6 from "../images/6week.png";
import week5 from "../images/5week.png";
import week18 from "../images/18week.png";
import week19 from "../images/19week.png";
import week20 from "../images/20week.png";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

function Subject(props) {
  const subjects = [
    [
      week7,
      "[10기] 07주차. 백엔드 I",
      "Node.js와 Express.js를 사용해 REST API를 사용한 서버를 만듭니다. Mongoose를 통해 MongoDB를 사용합니다.",
    ],
    [
      week6,
      "[10기] 06주차. 프론트엔드 II",
      "웹에서 기본적으로 사용되는 CRUD, 로그인, Nginx 등에 대해서 공부합니다.",
    ],
    [
      week5,
      "[10기] 05주차. 프론트엔드 I",
      "리액트 기본 내용에 대해 학습합니다.",
    ],
  ];

  const subjects_end = [
    [
      week20,
      `[${props.number}기] 인공지능 프로젝트 주간. 인공지능 기반의 웹 서비스 제작`,
      "19주 동안 학습한 웹 개발, 데이터 분석, 인공지능 지식을 활용해 5주 간 프로젝트를 진행합니다.",
    ],
    [
      week19,
      `[${props.number}기] 19주차. 이미지 처리와 자연어 처리 심화`,
      "인공지능 프로젝트를 진행하기 위한 기술을 실습을 통해 배웁니다.",
    ],
    [
      week18,
      `[${props.number}기] 18주차. 이미지 처리와 자연어 처리`,
      "이미지 처리와 자연어 처리를 위한 모델들의 기초 내용을 알아보고 학습된 모델을 사용하는 방법에 대해 알아봅니다.",
    ],
  ];
  return (
    <>
      <div className="Subject">
        <div className="SubjectTitle">
          <div className="SubjectFont">AI 트랙 {props.number}기</div>
          <a
            href="https://aitrack.elice.io/alltracks?_cardType=homeSearch&_from=explore&_landingSectionTrackId=7805&_orientation=vertical&_title=AI%20%ED%8A%B8%EB%9E%99%2010%EA%B8%B0"
            className="SubjectAll"
          >
            전체보기
          </a>
        </div>

        <ul className="SubjectItems">
          {props.number === 10
            ? subjects.map(([img, title, detail]) => (
                <li className="SubjectFlex">
                  <a href="/" className="SubjectItem">
                    <img className="SubjectImage" src={img} alt={img}></img>
                    <div className="SubjectOverlay">
                      <div className="SubjectHeader">
                        <div className="SubjectHeaderText">
                          <div className="SubjectTag">프로그래밍 기초</div>
                          <div className="SubjectWeekTitle">{title}</div>
                          <div className="SubjectDetail">{detail}</div>
                        </div>
                      </div>
                    </div>
                    <div className="SubjectHoverd">
                      <div className="SubjectDetail">
                        <ContentCopyOutlinedIcon sx={{ fontSize: "small" }} />
                        과목수: 7개
                      </div>
                      <div className="SubjectDetail">
                        <ScheduleOutlinedIcon sx={{ fontSize: "small" }} />
                        기간: 24.3.4 ~ 24.11.10
                      </div>
                      <div className="SubjectDetail">
                        <LightbulbOutlinedIcon sx={{ fontSize: "small" }} />
                        수강신청: 24.2.27 ~ 24.8.10
                      </div>
                    </div>
                    <div className="adminDiv">
                      <div className="admin">관리자 등록</div>
                    </div>
                  </a>
                </li>
              ))
            : subjects_end.map(([img, title, detail]) => (
                <li className="SubjectFlex">
                  <a href="/" className="SubjectItem">
                    <img className="SubjectImage" src={img} alt={img}></img>
                    <div className="SubjectOverlay">
                      <div className="SubjectHeader">
                        <div className="SubjectHeaderText">
                          <div className="SubjectTag">프로그래밍 기초</div>
                          <div className="SubjectWeekTitle">{title}</div>
                          <div className="SubjectDetail">{detail}</div>
                        </div>
                      </div>
                    </div>
                    <div className="SubjectHoverd">
                      <div className="SubjectDetail">
                        <ContentCopyOutlinedIcon sx={{ fontSize: "small" }} />
                        과목수: 7개
                      </div>
                      <div className="SubjectDetail">
                        <ScheduleOutlinedIcon sx={{ fontSize: "small" }} />
                        기간: 24.3.4 ~ 24.11.10
                      </div>
                      <div className="SubjectDetail">
                        <LightbulbOutlinedIcon sx={{ fontSize: "small" }} />
                        수강신청: 24.2.27 ~ 24.8.10
                      </div>
                    </div>
                    <div className="adminDiv">
                      <div className="admin">관리자 등록</div>
                    </div>
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}

export default Subject;
