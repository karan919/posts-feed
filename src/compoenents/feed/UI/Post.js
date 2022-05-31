import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const { article } = props;
  console.log("article", article);
  const navigate = useNavigate();
  const handlePostNavigation = () => {
    navigate(`/post/${article.slug}`);
  };
  return (
    <Card sx={{ maxWidth: 600, mb: 2 }}>
      <CardHeader
        avatar={
          <Avatar src={article.author.image} aria-label="profile-image" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.author.username}
        subheader={article.updatedAt}
      />
      <CardContent
        onClick={handlePostNavigation}
        sx={{
          paddingTop: 0,
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#00000005",
          },
        }}
      >
        <h3>{article.title}</h3>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {article.tagList.map((chip, index) => (
            <Chip key={`${article.id}-${index}}`} label={chip} sx={{ mr: 1 }} />
          ))}
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Typography sx={{ fontSize: "1rem", marginLeft: "5px" }}>
          {article.favoritesCount}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
