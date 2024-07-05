import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const Username = ({ setUsername }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");

  const handleSubmit = () => {
    setUsername(`${name} ${familyName}`);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            لطفا نام و نام خانوادگی خود را وارد کنید
          </Typography>
          <TextField
            fullWidth
            label="نام"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mt: 2,direction:'rtl' }}
          />
          <TextField
            fullWidth
            label="نام خانوادگی"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
            sx={{ mt: 2,direction:'rtl' }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              marginBottom: "1rem",
              backgroundColor: "#6870fa",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "8px 30px",
              borderRadius: "100px",
              fontFamily: "Yekan",
              mt:2
            }}            
          >
            تایید
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Username;
