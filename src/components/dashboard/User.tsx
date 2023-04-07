import { useCallback, useState } from "react";
import { Avatar, IconButton, Menu, MenuItem, Modal } from "@mui/material";
import { auth } from "@/firebase/config";
import { useAuthUser } from "next-firebase-auth";
import { Loader } from "../Loader";

export const User = () => {
  const AuthUser = useAuthUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = useCallback(async () => {
    setLoggingOut(true);
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
    } finally {
      setLoggingOut(false);
    }
  }, []);

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
      <Modal open={loggingOut}>
        <Loader />
      </Modal>
    </>
  );
};
