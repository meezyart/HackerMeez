import React from "react";
import { useParams } from "react-router";

import { useFetchItemsByIds as getCommentsById } from "../hooks";

import { Comment } from "../components/Comment";
import { Story } from "../components/Story";

import { ButtonLink } from "../styles/GlobalStyle";
import { AddCommentBox } from "../styles/CommentStyle";

export default function StoryDetail() {
  const { itemId } = useParams();
  // coming from the page Parameter
  const storyId = itemId;
  const comments = getCommentsById(itemId);
  // retrieves a array of ids labeled kids in Api
  const commentChildren = comments.kids;

  return (
    <>
      <Story storyId={storyId} />
      <AddCommentBox>
        <textarea rows="6" cols="60" />
        <ButtonLink to="#">Add Comment</ButtonLink>
      </AddCommentBox>
      {commentChildren
        ? commentChildren.map(commentId => (
            <Comment key={commentId} commentId={commentId} />
          ))
        : null}
      <ButtonLink to="/new/0">Back Home</ButtonLink>
    </>
  );
}
