import { useRef, useContext } from "react";
import { useParams } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Card, Container, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Context from "../../common/Context";

const UserComment = () => {
  const { postId } = useParams();
  const commentRef = useRef();
  const context = useContext(Context);
  const handleClick = () => {
    if (!context.isLogin) {
      context.setIsLoginModal(true);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const payload = {
      comment: {
        body: commentRef.current.value,
      },
    };
    const response = await fetch(
      `https://api.realworld.io/api/articles/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${context.token}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    context.setComments((prev) => [...prev, data.comment]);
    commentRef.current.value = "";
  };
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
          <form onSubmit={handleComment}>
            <TextField
              id="standard-basic"
              label="Comment here.."
              variant="standard"
              onClick={handleClick}
              inputRef={commentRef}
              required
            />
            <IconButton aria-label="fingerprint" color="success" type="submit">
              <SendIcon />
            </IconButton>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserComment;
