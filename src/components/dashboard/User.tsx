import { useEffect, useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { auth } from "@/firebase/config";
import { useAuthUser } from "next-firebase-auth";

export const User = () => {
  const AuthUser = useAuthUser();
  useEffect(() => {
    console.log(AuthUser);
  }, [AuthUser]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    try {
      await auth.signOut();
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <IconButton
        id="user-button"
        color="inherit"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar>{AuthUser.email?.charAt(0).toUpperCase()}</Avatar>
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};
