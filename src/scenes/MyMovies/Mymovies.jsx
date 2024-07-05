import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Container,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MyMovies = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

  const apiKey = "fc75699b";

  const searchMovie = async () => {
    if (query.trim() === "") return;

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${query}&apikey=${apiKey}`
      );
      if (response.data.Response === "True") {
        setMovie(response.data);
        setError("");
      } else {
        setMovie(null);
        setError("فیلم شما پیدا نشد!");
      }
    } catch (error) {
      setMovie(null);
      setError("خطا به هنگام دریافت اطلاعات");
      console.error("خطا به هنگام دریافت اطلاعات فیلم:", error);
    }
  };

  const addToFavorites = () => {
    if (movie && !favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <Container style={{ marginTop: "60px" }}>
      <h1 align="center">لیست فیلم های من</h1>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        <Grid item>
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="لطفا نام فیلم رو به انگلیسی وارد کن"
            style={{
              width: "40rem",
            }}
            sx={{
              color: "black",
              border: "solid #6870fa 2px",
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item>
          <Button
            sx={{
              marginBottom: "1rem",
              backgroundColor: "#6870fa",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "8px 30px",
              borderRadius: "100px",
              fontFamily: "Yekan",
              marginRight: "2rem",
            }}
            variant="contained"
            color="primary"
            onClick={searchMovie}
          >
            جستجو
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      {error && (
        <Typography color="error" align="center" style={{ marginTop: "20px" }}>
          {error}
        </Typography>
      )}
      {movie && (
        <Card
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(104, 112, 250, 0.5)",
            borderRadius: "1.5rem",
          }}
        >
          <CardMedia
            component="img"
            style={{ width: 150 }}
            image={movie.Poster}
            alt={`${movie.Title} Poster`}
          />
          <CardContent>
            <h2>
              {movie.Title} ({movie.Year})
            </h2>
            <h4 style={{ direction: "ltr" }}>{movie.Plot}</h4>
            <Button
              variant="contained"
              color="secondary"
              onClick={addToFavorites}
              style={{
                marginTop: "10px",
                backgroundColor: "#6870fa",
                color: "#fff",
                marginRight: "50rem",
                borderRadius: "1.5rem",
              }}
            >
              افزودن به لیست من
              <FavoriteIcon />
            </Button>
          </CardContent>
        </Card>
      )}
      {favorites.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <h2 sx={{ marginBottom: "2rem" }}>فیلم های مورد علاقه</h2>
          <Grid container spacing={3} justifyContent="center">
            {favorites.map((fav) => (
              <Grid item key={fav.imdbID}>
                <Card
                  style={{
                    display: "flex",
                    maxWidth: 500,
                    boxShadow: "0 4px 8px rgba(104, 112, 250, 0.5)",
                    borderRadius: "1.5rem",
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{ width: 150 }}
                    image={fav.Poster}
                    alt={`${fav.Title} Poster`}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        direction: "ltr",
                        fontSize: "1.25rem",
                        fontFamily: "Arial",
                        marginBottom: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      {fav.Title} ({fav.Year})
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Arial",
                        direction: "ltr",
                      }}
                    >
                      {fav.Plot}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default MyMovies;
