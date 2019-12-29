import React, { useEffect, useState } from "react";

import { getComment } from "../services/hnAPI";
import { mapToTime } from "../utils";

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
    getComment(commentId).then(data => data && setComment(data));
  }, [commentId]);

  return (
    <CommentWrapper>
      <CommentHeader {...comment} />
      <div>
        <CommentBody {...comment} />
      </div>
    </CommentWrapper>
  );
};


const CommentHeader = ({ kids, by, time, toggleVisible, isVisible }) => {
  return (
    <CommentHeaderWrapper>
      <div>
        <VoteButton className="vote-btn">&#9650;</VoteButton>
      </div>
      <LinkWrapper>
        {by && `by ${by}`} | {time && mapToTime(time)}
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
