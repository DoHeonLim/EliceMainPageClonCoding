import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

export default function NavNotification() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="알림" arrow>
        <IconButton
          size="large"
          color="gray"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{ display: { xs: "none", md: "flex" } }}
          onClick={handleClick}
        >
          <NotificationsIcon />
        </IconButton>
      </Tooltip>
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
            border: "1px solid #5e5f6142",
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
        <Box>
          <Stack sx={{ width: "380px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 24px",
              }}
            >
              알림
            </Typography>
            <Divider />
            <Box
              elevation={0}
              sx={{
                display: "flex",
                height: "500px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NotificationsNoneRoundedIcon
                sx={{ color: "#5e5f61", fontSize: "medium" }}
              />
            </Box>
          </Stack>
        </Box>
        <Divider />
        <MenuItem
          onClick={handleClose}
          sx={{
            justifyContent: "center",
            alignSelf: "center",
            color: "#2a457a",
            fontSize: "14px",
            fontWeight: 500,
            padding: "16px 24px",
          }}
        >
          전체화면보기
        </MenuItem>
      </Menu>
    </div>
  );
}
