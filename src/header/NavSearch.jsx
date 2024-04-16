import * as React from "react";
import PropTypes from "prop-types";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

// 아이콘
import ListItemIcon from "@mui/material/ListItemIcon";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    border: "2px solid gray",
  },
  "&:focus": {
    border: "2px solid purple",
  },
}));

const StyledInputBase = styled("Button")(({ theme }) => ({
  color: "gray",
  width: "200px",
  height: "40px",
  borderRadius: "8px",
  border: "1px solid gray",
  backgroundColor: "white",
}));

const StyledInputBase2 = styled(InputBase)(({ theme }) => ({
  margin: "20px",
  color: "inherit",
  width: "500px",
  border: "1px solid gray",
  borderRadius: "10px",
  "&:hover": {
    border: "2px solid gray",
  },
  "&:focus": {
    display: "block",
    border: "2px solid purple",
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
  },
}));

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Search sx={{ display: { xs: "none", md: "flex" } }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "gray", ml: "10px" }} />
        </SearchIconWrapper>
        <StyledInputBase2
          placeholder="학습 콘텐츠, 기능 및 바로가기 명을 검색해 보세요."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Stack spacing={2}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            padding: "16px 0 0 16px",
          }}
        >
          기능
        </Typography>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <HelpOutlineRoundedIcon fontSize="medium" />
          </ListItemIcon>
          튜터에게 질문하기
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <HeadsetMicTwoToneIcon fontSize="medium" />
          </ListItemIcon>
          고객 문의
        </MenuItem>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            padding: "16px 0 0 16px",
          }}
        >
          바로가기
        </Typography>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <HomeOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          홈
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <StraightenOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          클라우드 프로젝트
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <MemoryOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          클라우드 온디맨드
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <ClassOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          매뉴얼
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <VideocamTwoToneIcon fontSize="medium" />
          </ListItemIcon>
          내 강의실
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "#5e5f61",
            fontSize: "14px",
            fontWeight: 700,
            margin: "12px 0px 12px 0px",
          }}
        >
          <ListItemIcon>
            <MilitaryTechOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          내 이수증
        </MenuItem>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              style={{
                alignSelf: "flex-start",
                marginLeft: "130px",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "13px",
                padding: "6px 10px",
                margin: "10px",
                color: "#7c7c7c",
              }}
            >
              ctrl+K
            </button>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#5e5f61",
              }}
            >
              통합검색
            </Typography>

            <SwapVertRoundedIcon
              fontSize="small"
              sx={{ ml: "10px", color: "#5e5f61" }}
            />
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#5e5f61",
                ml: "2px",
              }}
            >
              선택
            </Typography>

            <KeyboardReturnRoundedIcon
              fontSize="small"
              sx={{ ml: "10px", color: "#5e5f61" }}
            />
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#5e5f61",
                ml: "2px",
              }}
            >
              이동
            </Typography>
          </div>

          <Button
            variant="text"
            size="small"
            sx={{
              width: "90px",
              height: "40px",
              fontWeight: "bold",
              fontSize: "13px",
              color: "black",
              backgroundColor: "rgb(255, 255, 255)",
              ml: "10px",
              "&:hover": {
                backgroundColor: "#ebebeb",
              },
              margin: "10px 5px",
            }}
          >
            의견보내기
          </Button>
        </div>
      </Stack>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function NavSearch() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Search
        onClick={handleClickOpen}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "gray" }} />
          <div
            style={{
              color: "gray",
              marginLeft: 10,
              fontWeight: 500,
              fontSize: "15px",
            }}
          >
            검색
          </div>
        </SearchIconWrapper>
        <StyledInputBase>
          <button
            style={{
              alignSelf: "flex-end",
              marginLeft: "130px",
              border: "none",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "13px",
              padding: "4px",
            }}
          >
            ctrl+K
          </button>
        </StyledInputBase>
      </Search>
      <SimpleDialog open={open} onClose={handleClose} sx={{ width: "600px" }} />
    </div>
  );
}
