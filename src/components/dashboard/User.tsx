import { useCallback, useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useSession, signOut } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

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
        <Avatar>{session?.user?.name?.charAt(0).toUpperCase()}</Avatar>
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
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </>
  );
};
