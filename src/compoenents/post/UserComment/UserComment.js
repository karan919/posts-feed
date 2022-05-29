import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Card, Container, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const UserComment = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          maxWidth: 600,
          mb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardHeader avatar={<AccountCircleIcon />} />
        <CardContent>
          <TextField
            id="standard-basic"
            label="Comment here.."
            variant="standard"
          />
          <IconButton aria-label="fingerprint" color="success">
            <SendIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserComment;
