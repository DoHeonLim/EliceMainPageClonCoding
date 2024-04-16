import React from "react";
import NavSearch from "./NavSearch";
import NavMenu from "./NavMenu";
import NavNotification from "./NavNotification";

// 머티리얼
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import styled from "styled-components";
import EliceIcon from "../images/elice x KDT.png";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

const EliceIconSize = styled.img`
  padding-top: 5px;
  width: 140px;
  height: 32px;
`;

const Link = styled.a`
  color: black;
  align-self: center;

  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    color: black;
  }
`;

const pages = [
  ["홈", "https://aitrack.elice.io/explore"],
  ["패스/과목 검색", "https://aitrack.elice.io/edu"],
  [
    "8기",
    "https://aitrack.elice.io/alltracks?_cardType=homeSearch&_from=explore&_landingSectionTrackId=6174&_orientation=vertical&_title=AI%20%ED%8A%B8%EB%9E%99%208%EA%B8%B0",
  ],
  [
    "9기",
    "https://aitrack.elice.io/alltracks?_cardType=homeSearch&_from=explore&_landingSectionTrackId=6527&_orientation=vertical&_title=AI%20%ED%8A%B8%EB%9E%99%209%EA%B8%B0",
  ],
  [
    "10기",
    "https://aitrack.elice.io/alltracks?_cardType=homeSearch&_from=explore&_landingSectionTrackId=7805&_orientation=vertical&_title=AI%20%ED%8A%B8%EB%9E%99%2010%EA%B8%B0",
  ],
  ["클라우드", "https://aitrack.elice.io/cloud/project"],
];
function Navbar(props) {
  return (
    <AppBar sx={{ fontFamily: "Pretendard" }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          background: "white",
          justifyContent: "space-between",
        }}
      >
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            height: "64px",
          }}
        >
          <Link href="https://aitrack.elice.io/explore">
            <EliceIconSize src={EliceIcon} alt="EliceIcon" />
          </Link>
          {pages.map(([page, href]) => (
            <Button
              key={page}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgb(240, 240, 240)",
                },
              }}
            >
              <Link href={href}>{page}</Link>
            </Button>
          ))}
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            marginLeft: "10px",
            height: "64px",
          }}
        >
          <NavSearch />

          <Button
            variant="contained"
            sx={{
              padding: "0 10px",
              margin: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "120px",
              height: "40px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ffffff",
              borderRadius: "6px",
              backgroundColor: "rgb(120, 87, 230)",
              ml: "10px",
              "&:hover": {
                backgroundColor: "rgb(93, 59, 206)",
              },
            }}
          >
            <WebOutlinedIcon />
            <Box>내 대시보드</Box>
          </Button>
          <Box>
            <NavNotification />
          </Box>

          <Box sx={{ marginRight: "20px" }}>
            <NavMenu />
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
}

export default Navbar;
