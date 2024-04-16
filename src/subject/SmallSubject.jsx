import React from "react";
import night from "../images/night.png";
import coding from "../images/coding.png";
import check from "../images/check.png";
import agile from "../images/agile.png";
import service from "../images/service.png";
import data from "../images/data.png";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

function SmallSubject(props) {
  const subjectCA = [
    [night, "야간자율학습반"],
    [coding, "[10기] 모각코"],
    [check, "[10기] 수강확인서"],
  ];
  const subjects = [
    [
      agile,
      "성장하는 팀을 위한 애자일",
      "실패없이 애자일 적용하기! 애자일 코치가 알려주는 '진짜'애자일을 배워보세요.",
    ],
    [
      service,
      "시야를 확장하는 서비스 기획 기초",
      "사용자의 최적의 경험을 주는 서비스의 모든 것! 더블 다이아몬드 방법론을 배워보세요.",
    ],
    [
      data,
      "데이터 기반 서비스 기획",
      "서비스의 성공을 높이는 '진짜' 데이터 활용의 모든 것, 기초부터 실무까지 알려드립니다!",
    ],
  ];
  return (
    <div className="Subject">
      <div className="SubjectTitle">
        <div className="SubjectFont">CA(특별 활동)</div>
      </div>
      <ul className="SubjectItems">
        {props.name === "CA"
          ? subjectCA.map(([img, title]) => (
              <li className="SubjectFlex">
                <a href="/" className="SubjectItem">
                  <img
                    style={{ width: "288px", height: "145px" }}
                    className="SubjectImage"
                    src={img}
                    alt={img}
                  ></img>
                  <div className="SubjectOverlay1">
                    <div className="SubjectHeader">
                      <div className="SubjectHeaderText">
                        <div className="SubjectWeekTitle">{title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="SubjectHoverd">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className="adminDiv">
                    <div className="admin">관리자 등록</div>
                  </div>
                </a>
              </li>
            ))
          : subjects.map(([img, title, detail]) => (
              <li className="SubjectFlex">
                <a href="/" className="SubjectItem">
                  <div className="SmallSubjectImage">
                    <img
                      className="SmallSubjectImagePng"
                      src={img}
                      alt={img}
                    ></img>
                  </div>
                  <div className="SubjectOverlay2">
                    <div className="SubjectHeader">
                      <div className="SubjectHeaderText">
                        <div className="SubjectTag">미설정</div>
                        <div className="SubjectWeekTitle">{title}</div>
                        <div className="SubjectDetail">{detail}</div>
                      </div>
                    </div>
                  </div>
                  <div className="SubjectHoverd1">
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
  );
}

export default SmallSubject;
