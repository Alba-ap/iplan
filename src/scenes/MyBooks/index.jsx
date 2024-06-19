import React, { useState } from "react";
import { responsiveFontSizes, styled } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MyBooks() {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [picture, setPicture] = useState(null);
  const [books, setBooks] = useState([]);
  const [editBookIndex, setEditBookIndex] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteBookIndex, setDeleteBookIndex] = useState(-1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddBook = () => {
    if (title && author && picture) {
      const newBook = { title, author, picture, liked: false, done: false };
      setBooks([...books, newBook]);
      setTitle("");
      setAuthor("");
      setPicture(null);
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLikeBook = (index) => {
    const newBooks = [...books];
    newBooks[index].liked = !newBooks[index].liked;
    setBooks(newBooks);
  };

  const handleDeleteBook = () => {
    const newBooks = [...books];
    newBooks.splice(deleteBookIndex, 1);
    setBooks(newBooks);
    setDialogOpen(false);
    setDeleteBookIndex(-1);
  };

  const handleEditBook = (index) => {
    setEditBookIndex(index);
    setTitle(books[index].title);
    setAuthor(books[index].author);
    setPicture(books[index].picture);
    setIsEditing(true);
    setExpanded(true);
  };

  const handleSaveEditBook = () => {
    const newBooks = [...books];
    newBooks[editBookIndex] = {
      ...newBooks[editBookIndex],
      title,
      author,
      picture,
    };
    setBooks(newBooks);
    setEditBookIndex(-1);
    setTitle("");
    setAuthor("");
    setPicture(null);
    setIsEditing(false);
  };

  const handleMarkDone = (index) => {
    const newBooks = [...books];
    newBooks[index].done = !newBooks[index].done;
    setBooks(newBooks);
    alert("شما این کتاب را مطالعه نمودید!");
  };

  const handleShareBook = (index) => {
    const book = books[index];

    navigator.clipboard.writeText(
      `من قصد اشتراک گذاری این کتاب از آی پلن را دارم: " ${book.title}" نویسنده ${book.author}`
    );
    alert("اطلاعات کتاب در کلیپ بورد ذخیره شد!");
  };

  const handleDialogOpen = (index) => {
    setDeleteBookIndex(index);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDeleteBookIndex(-1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>لیست کتابهایی که می‌خواهم بخوانم</h1>
      <Card sx={{ width: "100%", maxWidth: 1000 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            placeholder="عنوان کتاب"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2, fontFamily: "Yekan" }}
          />
          <TextField
            placeholder="نویسنده"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            sx={{ mb: 2, fontFamily: "Yekan" }}
          />
          <Button
            style={{
              backgroundColor: "#6870fa",
              color: "white",
              borderRadius: "2rem",
              width: "50rem",
              marginRight: "6rem",
              fontSize: "1rem",
            }}
            variant="contained"
            component="label"
            sx={{ mb: 2, mt: 2 }}
          >
            بارگذاری تصویر
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handlePictureChange}
            />
          </Button>
          <CardContent>
            {isEditing ? (
              <Button
                style={{
                  backgroundColor: "#6870fa",
                  color: "white",
                  borderRadius: "2rem",
                  width: "50rem",
                  marginRight: "5rem",
                  fontSize: "1rem",
                }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleSaveEditBook}
              >
                ذخیره تغییرات
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "#6870fa",
                  color: "white",
                  borderRadius: "2rem",
                  width: "50rem",
                  fontSize: "1rem",

                  marginRight: "5rem",
                }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddBook}
              >
                افزودن کتاب
              </Button>
            )}
            {books.length > 0 && (
              <div
                style={{
                  mt: 2,

                  marginTop: "1rem",
                  borderRadius: "18px",
                  borderWidth: "5px",
                  marginTop: "2rem",
                }}
              >
                {books.map((book, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      alignItems: "flex-start",
                      marginTop: "3rem",
                      borderWidth: "5px",
                      borderRadius: "18px",

                      boxShadow: "0 4px 8px rgba(104, 112, 250, 0.5)", // Shadow with color #6870fa
                    }}
                  >
                    {book.picture && (
                      <CardMedia
                        component="img"
                        height="150"
                        image={book.picture}
                        alt="Book Cover"
                        sx={{ width: 100, mr: 2 }}
                      />
                    )}
                    <ListItemText
                      primary={book.title}
                      secondary={book.author}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "2rem",
                          marginTop: "3rem",
                        },
                      }}
                      secondaryTypographyProps={{
                        color: book.done ? "success.main" : "text.secondary",
                      }}
                    />
                    <div style={{ marginTop: "8rem" }}>
                      <IconButton
                        edge="end"
                        aria-label="like"
                        onClick={() => handleLikeBook(index)}
                      >
                        <FavoriteIcon
                          color={book.liked ? "error" : "inherit"}
                        />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDialogOpen(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        onClick={() => handleEditBook(index)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="done"
                        onClick={() => handleMarkDone(index)}
                      >
                        <DoneIcon color={book.done ? "success" : "inherit"} />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="share"
                        onClick={() => handleShareBook(index)}
                      >
                        <ShareIcon />
                      </IconButton>
                    </div>
                  </ListItem>
                ))}
              </div>
            )}
          </CardContent>
        </Box>
      </Card>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ boxShadow: "0 8px 16px rgba(104, 112, 250, 0.5)" }}
      >
        <DialogTitle id="alert-dialog-title">حذف کتاب</DialogTitle>
        <DialogContent
          style={{
            width: "30rem",
            height: "5rem",
          }}
        >
          <DialogContentText id="alert-dialog-description">
            آیا مطمئن هستید که می‌خواهید این کتاب را حذف کنید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            لغو
          </Button>
          <Button onClick={handleDeleteBook} color="primary" autoFocus>
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
