import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Button } from "@mui/material";
import { getChatsLinkId } from "../../navigation";

export const chatsList = [
  { id: 1, name: "первый" },
  { id: 2, name: "второй" },
  { id: 3, name: "третий" },
];

export const Chats = () => {
  return (
    <Box
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "50%",
      }}
    >
      <Paper
        elevation={18}
        sx={{
          height: "80vh",
          overflow: "auto",
          marginRight: "20px",
          width: "35%",
        }}
      >
        {chatsList.map((item) => {
          return (
            <Box key={item.id}>
              <Button
                id="basic-button"
                component={Link}
                to={getChatsLinkId(item.id)}
              >
                {item.name}
              </Button>
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
};
