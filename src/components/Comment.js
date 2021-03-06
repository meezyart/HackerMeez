import React, { useState } from "react";
import ReactPlaceholder from "react-placeholder";
import { useFetchItemsByIds } from "../hooks";
import { mapToTime } from "../utils";
import { UP_ARROW } from "../constants";
import "react-placeholder/lib/reactPlaceholder.css";
import { VoteButton, LinkWrapper } from "../styles/StoryStyle";
import {
  CommentWrapper,
  CommentHeaderWrapper,
  CommentChildren,
  CommentParent
} from "../styles/CommentStyle";

export const Comment = ({ commentId }) => {
  const [isVisible, setIsVisible] = useState(false);
  // returns comment object fetched by the id
  const comment = useFetchItemsByIds(commentId);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CommentWrapper>
      <CommentHeader
        {...comment}
        toggleVisible={() => toggleVisible()}
        isVisible={isVisible}
      />
      <div hidden={isVisible}>
        <CommentBody {...comment} />
      </div>
    </CommentWrapper>
  );
};

const CommentHeader = ({ kids, by, time, toggleVisible, isVisible }) => {
  const author = by ? `by ${by} |` : null;
  const timeStamp = author && time ? `${mapToTime(time)} ago` : null;
  const voteUpArrow = author ? <VoteButton small>{UP_ARROW}</VoteButton> : null;
  const commentCount = kids ? (
    <>
      {"  [ "}
      <button onClick={toggleVisible}>
        {isVisible ? `+${kids.length}` : "hide"}
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
  // reactPlaceHolder needs a boolean 
  const commentPresent = time ? true : false;
  return (
    <ReactPlaceholder
      type="text"
      showLoadingAnimation={true}
      ready={commentPresent}
      rows={1}
      color="#E0E0E0">
      <CommentParent>
        {/* This was used to handle the html tags in the text from api  */}
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </CommentParent>
      <CommentChildren>
        {kids
          ? kids.map(kidId => {
              return <Comment key={kidId} commentId={kidId} />;
            })
          : null}
      </CommentChildren>
    </ReactPlaceholder>
  );
};
