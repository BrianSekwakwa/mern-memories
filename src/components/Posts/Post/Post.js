import React from "react";
import moment from "moment";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import {
  currentPost,
  deletePost,
  likePostAction,
} from "../../../actions/posts";

function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const editPost = (post) => {
    dispatch(currentPost(post));
  };

  const delPost = (id) => {
    dispatch(deletePost(id));
  };

  const likePost = (id, count) => {
    const newCount = count + 1;
    dispatch(likePostAction(id, { likeCount: newCount }));
  };

  return (
    <Card className={classes.card}>
      {/* Card Image */}
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {/* Edit Button */}
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            editPost(post);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      {/* Tags */}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      {/* Post Title */}
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      {/* Post Message */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* Like Button */}
        <Button
          size="small"
          color="primary"
          onClick={() => {
            likePost(post._id, post.likeCount);
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        {/* Delete Post Button */}
        <Button
          size="small"
          color="primary"
          onClick={() => {
            delPost(post._id);
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
