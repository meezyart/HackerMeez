import React, { useEffect, useState } from "react";
// api
import { getComment } from "../services/hnAPI";
// utils
import { mapToTime } from "../utils";
// styles
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
  return (
    <CommentHeaderWrapper>
      {/* &#9650; is Html unicode for the up arrow */}
      {by && <VoteButton className="vote-btn">&#9650;</VoteButton>}
      <LinkWrapper>
        {by && `by ${by} |`} {time && `${mapToTime(time)} ago`}
        {kids && (
          <>
            {"  [ "}
            <button onClick={toggleVisible}>
              {isVisible ? "hide" : `+${kids.length}`}
            </button>
            {"]"}
          </>
        )}
      </LinkWrapper>
    </CommentHeaderWrapper>
  );
};

const CommentBody = ({ text, kids }) => {
  return (
    <>
      <CommentParent>
        {/* This was used to handle the html tags in the text from api  */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </CommentParent>
      <CommentChildren>
        {kids
          ? kids.map(kidId => {
              return <Comment key={kidId} commentId={kidId} />;
            })
          : ""}
      </CommentChildren>
    </>
  );
};
