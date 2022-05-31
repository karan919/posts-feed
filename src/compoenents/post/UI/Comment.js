import { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Context from "../../common/Context";

const Comment = ({ comment, postId }) => {
  const context = useContext(Context);

  const [anchorEl, setAnchorEl] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleDelete = async () => {
    context.deleteComment(comment.id);
    await fetch(
      `https://api.realworld.io/api/articles/${postId}/comments/${comment.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${context.token}`,
        },
      }
    );
    handleClose();
  };
  return (
    <Container>
      <Card sx={{ maxWidth: 600, mb: 2 }}>
        <CardHeader
          avatar={
            <Avatar src={comment.author.image} aria-label="profile-image" />
          }
          action={
            <>
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </>
          }
          title={comment.author.username}
          subheader={comment.updatedAt}
        />
        <CardContent sx={{ mx: 5 }}>
          <Typography variant="body2" color="text.secondary">
            {comment.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" sx={{ ml: 5 }}>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Comment;
