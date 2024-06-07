import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Button,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  background-color: white;
  padding: 20px;
  outline: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

function Home() {
  const [data, setData] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState("");

  const fetchBreeds = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(Object.keys(response.data.message));
    } catch (error) {
      console.error("Error fetching breeds:", error);
    }
  };

  const fetchData = async (breed) => {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/12`
      );
      setData(response.data.message);
      setSelectedBreed(breed);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCardClick = (url) => {
    setSelectedImage(url);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const filteredBreeds = breeds.filter((breed) =>
    breed.toLowerCase().includes(search.toLowerCase())
  );

  const handleBreedClick = (breed) => {
    fetchData(breed);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Box display="flex" alignItems="center" mb={4}>
        <SearchIcon />
        <TextField
          label="Search by breed"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleSearchChange}
        />
      </Box>
      <Grid container spacing={2}>
        {filteredBreeds.map((breed, index) => (
          <Grid item key={index}>
            <Button variant="outlined" onClick={() => handleBreedClick(breed)}>
              {breed}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        {data.map((url, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardActionArea onClick={() => handleCardClick(url)}>
                <CardMedia
                  component="img"
                  height="300"
                  image={url}
                  alt="dog image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {selectedBreed}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <StyledModal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Dog"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          )}
          {selectedBreed && (
            <Typography variant="body1">Breed: {selectedBreed}</Typography>
          )}
        </ModalContent>
      </StyledModal>
    </Container>
  );
}

export default Home;
