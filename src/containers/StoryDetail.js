import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// api
import { getCommentIds } from "../services/hnAPI";
// components
import { Comment } from "../components/Comment";
import { Story } from "../components/Story";
// styles
import { ContentWrapper, ButtonLink } from "../styles/GlobalStyle";
import { AddCommentBox } from "../styles/CommentStyle";

export default function StoryDetail() {
  const [commentIds, setCommentIds] = useState([]);
  const { itemId } = useParams();

  const storyId = itemId;

  useEffect(() => {
    getCommentIds(storyId)
      .then(data => {
        setCommentIds(data);
      })
      .catch(error => {
        console.log("StoryDetail: We are getting this error:");
        console.error(error);
      });
  }, [storyId]);

  return (
    <ContentWrapper>
      <Story storyId={storyId} />
      <AddCommentBox>
        <textarea rows="6" cols="60" />
        <ButtonLink>Add Comment</ButtonLink>
      </AddCommentBox>
      {commentIds.map(commentId => (
        <Comment key={commentId} commentId={commentId} />
      ))}
      <ButtonLink href="/">Back Home</ButtonLink>
    </ContentWrapper>
  );
}
