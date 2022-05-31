import { useRef, useContext } from "react";
import { useParams } from "react-router-dom";

import {
  Card,
  Container,
  TextField,
  IconButton,
  Grid,
  CardHeader,
  CardContent,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
    context.setComments((prev) => [data.comment, ...prev]);
    commentRef.current.value = "";
  };
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", maxWidth: 600 }}
    >
      <Card
        sx={{
          width: 600,
          mb: 2,
        }}
      >
        <Grid container spacing={3} sx={{ display: "flex" }}>
          <Grid item lg={1}>
            <CardHeader avatar={<AccountCircleIcon fontSize="large" />} />
          </Grid>
          <Grid item lg={11}>
            <CardContent>
              <form
                onSubmit={handleComment}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <TextField
                  id="standard-basic"
                  label="Comment"
                  variant="standard"
                  onClick={handleClick}
                  inputRef={commentRef}
                  required
                  sx={{ width: "100%" }}
                />
                <IconButton
                  aria-label="fingerprint"
                  color="success"
                  type="submit"
                >
                  <SendIcon />
                </IconButton>
              </form>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default UserComment;
