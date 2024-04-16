import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// 아이콘
import ListItemIcon from "@mui/material/ListItemIcon";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";
import LanguageIcon from "@mui/icons-material/Language";

export default function NavMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ display: "flex", justifyContent: "flex-end" }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32, backgroundColor: "#136c13" }}>
          d
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            width: "295px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Avatar />
            <Box>
              <Stack spacing={0}>
                <Typography
                  sx={{ fontSize: "13px", fontWeight: 700, color: "black" }}
                >
                  임도헌
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  ldh2233@gmail.com
                </Typography>
              </Stack>
            </Box>
          </Box>
          <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
        </MenuItem>

        <Divider />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            margin: "16px 12px 16px 12px",
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
            <PersonOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          계정 관리
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
            <EventNoteIcon fontSize="medium" />
          </ListItemIcon>
          업데이트 소식
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
            <SignalCellularAltIcon fontSize="medium" />
          </ListItemIcon>
          네트워크 진단
        </MenuItem>
        <Divider />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            margin: "16px 12px 16px 12px",
          }}
        >
          서비스
        </Typography>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#5e5f61", fontSize: "14px", fontWeight: 700 }}
        >
          <ListItemIcon>
            <BusinessCenterOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          엘리스 웍스
        </MenuItem>
        <Divider />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            margin: "16px 12px 16px 12px",
          }}
        >
          기타
        </Typography>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#5e5f61", fontSize: "14px", fontWeight: 700 }}
        >
          <ListItemIcon>
            <SmsFailedOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          피드백
        </MenuItem>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              alignSelf: "center",
              padding: "8px",
            }}
          >
            <LanguageIcon fontSize="medium" sx={{ color: "#5e5f61" }} />
          </Button>

          <Box sx={{ padding: "8px 16px 8px 16px" }}>
            <Stack direction="row" spacing={0}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  width: "80px",
                  height: "40px",
                  fontWeight: 700,
                  color: "#5e5f61",
                  backgroundColor: "rgb(233, 235, 240)",
                  "&:hover": {
                    backgroundColor: "#bcbcbc",
                  },
                }}
              >
                문의하기
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  width: "80px",
                  height: "40px",
                  fontWeight: 700,
                  color: "#5e5f61",
                  backgroundColor: "rgb(233, 235, 240)",
                  ml: "10px",
                  "&:hover": {
                    backgroundColor: "#bcbcbc",
                  },
                }}
              >
                로그아웃
              </Button>
            </Stack>
          </Box>
        </Box>
      </Menu>
    </div>
  );
}
