import {
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

export const CatsPre = ({ catsFacts, isLoading, error, requestCatFacts }) => {
  return (
    <Box>
      {isLoading && <CircularProgress />}
      {error && (
        <div>
          {JSON.stringify(error)}
          <Button onClick={requestCatFacts} variant="contained">
            Again
          </Button>
        </div>
      )}
      <List>
        {catsFacts?.map((item) => (
          <ListItem key={item._id}>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
