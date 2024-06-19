import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const characters = [
  { id: 1, src: "/chars/Character1.png", alt: "Character 1" },
  { id: 2, src: "/chars/Character2.png", alt: "Character 2" },
  { id: 3, src: "/chars/Character3.png", alt: "Character 3" },
  { id: 4, src: "/chars/Character4.png", alt: "Character 4" },
  { id: 5, src: "/chars/Character5.png", alt: "Character 5" },
  { id: 6, src: "/chars/Character6.png", alt: "Character 6" },
  { id: 7, src: "/chars/Character7.png", alt: "Character 7" },
  { id: 8, src: "/chars/Character8.png", alt: "Character 8" },
  { id: 9, src: "/chars/Character9.png", alt: "Character 9" },
  { id: 10, src: "/chars/Character10.png", alt: "Character 10" },
  { id: 11, src: "/chars/Character11.png", alt: "Character 11" },
  // Add more characters as needed
];

const CharacterGrid = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

const CharacterItem = styled("div")(({ selected }) => ({
  margin: "10px",
  cursor: "pointer",
  border: selected ? "2px solid blue" : "2px solid transparent",
  borderRadius: "10px",
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProfilePicturePicker = () => {
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    handleClose();
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (selectedCharacter) {
  //     console.log("Character selected:", selectedCharacter);
  //   }
  // };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        {selectedCharacter && (
          <div>
            <img
              src={selectedCharacter.src}
              alt={selectedCharacter.alt}
              style={{
                width: "200px",
                height: "200px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        )}
        <Button
          sx={{
            marginTop: "1rem",
            backgroundColor: "#6870fa",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "100px",
            fontFamily: "Yekan",
          }}
          onClick={handleOpen}
        >
          <AddCircleIcon />
        </Button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2>کاراکتر مورد علاقه ت رو انتخاب کن: </h2>
          <CharacterGrid>
            {characters.map((character) => (
              <CharacterItem
                key={character.id}
                onClick={() => handleCharacterClick(character)}
                selected={selectedCharacter?.id === character.id}
              >
                <img
                  src={character.src}
                  alt={character.alt}
                  style={{ width: "100px", height: "100px" }}
                />
              </CharacterItem>
            ))}
          </CharacterGrid>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfilePicturePicker;
