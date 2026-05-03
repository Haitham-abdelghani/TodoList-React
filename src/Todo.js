import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";
import { TodoesContext } from "./Context.js/TodoesContext";
// Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
// TextField
import TextField from "@mui/material/TextField";
export default function Todo({ todo }) {
  const { todes, setTodes } = useContext(TodoesContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  function handleIsDone() {
    const newTodes = todes.map((t) => {
      if (t.id === todo.id) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    });
    setTodes(newTodes);
  }
  function handleClose() {
    setShowDeleteDialog(false);
    setShowEditDialog(false);
  }
  function handleDeleteFromModal() {
    const newTodes = todes.filter((t) => t.id !== todo.id);
    setTodes(newTodes);
    handleClose();
  }
  function handleDelete() {
    setShowDeleteDialog(true);
  }
  function editTodo() {
    setShowEditDialog(true);
    handleEditFromModal();
  }
  function handleEditFromModal() {
    // const newTodes = todes.map((t) => {
    //   if (t.id === todo.id) {
    //   }
    // });
    console.log("edit");
  }
  return (
    <Card
      className="todoCard"
      sx={{
        minWidth: 275,
        background: "#283593",
        color: "white",
        marginTop: "5px",
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Typography gutterBottom variant="h5" sx={{ textAlign: "right" }}>
              {todo?.title}
            </Typography>
            <Typography gutterBottom variant="h6" sx={{ textAlign: "right" }}>
              {todo?.description}
            </Typography>
          </Grid>
          <Grid
            size={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={handleIsDone}
              className="iconButton"
              aria-label="check"
              size="small"
              sx={{
                color: todo.isDone ? "white" : "#8bc34a",
                backgroundColor: todo.isDone ? "#8bc34a" : "white",
                border: todo.isDone ? "3px solid #8bc34a" : "3px solid white",
              }}
            >
              <CheckIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={editTodo}
              className="iconButton"
              aria-label="ModeEditIcon"
              size="small"
              sx={{
                color: "#1769aa",
                backgroundColor: "white",
                border: "3px solid #1769aa",
              }}
            >
              <ModeEditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              className="iconButton"
              aria-label="DeleteIcon"
              size="small"
              sx={{
                color: "#f44336",
                backgroundColor: "white",
                border: "3px solid #f44336",
              }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
      <Dialog
        sx={{ direction: "rtl" }}
        open={showDeleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Disagree
          </Button>
          <Button onClick={handleDeleteFromModal}>Agree</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        sx={{ direction: "rtl" }}
        open={showEditDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          هل تريد تعديل المهمه ؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            يمكنك تعديل عنوان المهمه او تفاصيلها
          </DialogContentText>
          <TextField
            sx={{ direction: "rtl" }}
            autoFocus
            required
            margin="dense"
            id="name"
            name="عنوان المهمه"
            label="عنوان المهمه"
            fullWidth
            variant="standard"
          />
          <TextField
            sx={{ direction: "rtl" }}
            autoFocus
            required
            margin="dense"
            id="name"
            name="تفاصيل المهمه"
            label="تفاصيل المهمه"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            الغاء
          </Button>
          <Button onClick={handleEditFromModal}>موافق</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
