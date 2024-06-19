import React, { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MeatIcon from "@mui/icons-material/Restaurant";
import VeggiesIcon from "@mui/icons-material/EmojiNature";
import DrinksIcon from "@mui/icons-material/LocalDrink";

const categories = [
  { id: "meat", name: "Meat", icon: <MeatIcon /> },
  { id: "veggies", name: "Veggies", icon: <VeggiesIcon /> },
  { id: "drinks", name: "Drinks", icon: <DrinksIcon /> },
];

const ShoppingListContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const CategoryContainer = styled.div`
  margin: 20px 0;
`;

const CategoryTitle = styled(Typography)`
  margin-bottom: 10px;
`;

const MyShopping = () => {
  const [items, setItems] = useState({
    meat: ["Chicken", "Beef"],
    veggies: ["Carrot", "Broccoli"],
    drinks: ["Milk", "Juice"],
  });

  const handleAddItem = (categoryId) => {
    const item = prompt("Enter item name:");
    if (item) {
      setItems({
        ...items,
        [categoryId]: [...items[categoryId], item],
      });
    }
  };

  const handleDeleteItem = (categoryId, itemIndex) => {
    setItems({
      ...items,
      [categoryId]: items[categoryId].filter((_, index) => index !== itemIndex),
    });
  };

  return (
    <ShoppingListContainer>
      {categories.map((category) => (
        <CategoryContainer key={category.id}>
          <CategoryTitle variant="h6">
            <ListItemIcon>{category.icon}</ListItemIcon>
            {category.name}
            <IconButton onClick={() => handleAddItem(category.id)}>
              <AddIcon />
            </IconButton>
          </CategoryTitle>
          <List>
            {items[category.id].map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
                <IconButton
                  onClick={() => handleDeleteItem(category.id, index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </CategoryContainer>
      ))}
    </ShoppingListContainer>
  );
};

export default MyShopping;
