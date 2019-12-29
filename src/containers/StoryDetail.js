import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCommentIds } from "../services/hnAPI";

import { Comment } from "../components/Comment";
import { Story } from "../components/Story";

import { ContentWrapper } from "../styles/GlobalStyle";
import { AddCommentBox } from "../styles/CommentStyle";


export default function StoryDetail() {
  const [commentIds, setCommentIds] = useState([]);
  const { itemId } = useParams();

  const storyId = itemId;

  useEffect(() => {
    getCommentIds(storyId).then(data => setCommentIds(data));
  }, []);

  return (
    <ContentWrapper>
      <Story storyId={storyId} />
      <AddCommentBox>
        <textarea rows="6" cols="60" />
        <br />
        <button>Add Comment</button>
      </AddCommentBox>
      {commentIds.map(commentId => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </ContentWrapper>
  );
}
