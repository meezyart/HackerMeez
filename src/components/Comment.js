import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
// api
import { getItemById as getComment } from "../services/hnAPI";
// utils
import { mapToTime } from "../utils";
// styles
import "react-placeholder/lib/reactPlaceholder.css";
import { VoteButton, LinkWrapper } from "../styles/StoryStyle";
import {
  CommentWrapper,
  CommentHeaderWrapper,
  CommentChildren,
  CommentParent
} from "../styles/CommentStyle";

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComment(commentId)
      .then(data => setComment(data))
      .catch(error => {
        console.log("Comment: We are getting this error:");
        console.error(error);
      });
  }, [commentId]);

  return (
    <CommentWrapper>
      <CommentHeader {...comment} />
      <CommentBody {...comment} />
    </CommentWrapper>
  );
};

const CommentHeader = ({ kids, by, time, toggleVisible, isVisible }) => {
  const author = by ? `by ${by} |` : null;
  const timeStamp = author && time ? `${mapToTime(time)} ago` : null;
  /* &#9650; is Html unicode for the up arrow */
  const voteUpArrow = author ? <VoteButton small>&#9650;</VoteButton> : null;
  // set up to hide the comments
  const commentCount = kids ? (
    <>
      {"  [ "}
      <button onClick={toggleVisible}>
        {isVisible ? "hide" : `+${kids.length}`}
      </button>
      {"]"}
    </>
  ) : null;
  return (
    <CommentHeaderWrapper>
      {voteUpArrow}
      <LinkWrapper>
        {author} {timeStamp} {commentCount}
      </LinkWrapper>
    </CommentHeaderWrapper>
  );
};

const CommentBody = ({ text, kids, time }) => {
  const children = kids
    ? kids.map(kidId => {
        return <Comment key={kidId} commentId={kidId} />;
      })
    : null;

  return (
    <ReactPlaceholder
      type="text"
      showLoadingAnimation={true}
      ready={time}
      rows={1}
      color="#E0E0E0">
      <CommentParent>
        {/* This was used to handle the html tags in the text from api  */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </CommentParent>
      <CommentChildren>{children}</CommentChildren>
    </ReactPlaceholder>
  );
};
