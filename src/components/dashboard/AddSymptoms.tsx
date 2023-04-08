import { FormEvent, useCallback, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddSymptom() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO - write this data to firebase
    console.log((e.target as any).symptoms.value);
  }, []);

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Symptoms</DialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>Please describe your symptoms</DialogContentText>
            <TextField
              autoFocus
              margin="normal"
              id="symptoms"
              label="symptoms"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose}>
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
