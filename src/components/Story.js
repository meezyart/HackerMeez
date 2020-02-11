import React, { memo } from "react";
import ReactPlaceholder from "react-placeholder";

import { Link } from "react-router-dom";
import { useFetchItemsByIds as getStory } from "../hooks";
import { OutBoundLink } from "./OutBoundLink";
import { mapToTime, getSourceUrl } from "../utils";
import { UP_ARROW } from "../constants";
import "react-placeholder/lib/reactPlaceholder.css";
import {
  StoryWrapper,
  RankWrapper,
  LinkWrapper,
  VoteButton
} from "../styles/StoryStyle";

export const Story = memo(function Story({ storyId, showRank, index }) {
  // returns story object fetched by the id
  const story = getStory(storyId);

  const { title, url, by, kids, time, score } = story;
  // display variables
  const rank = showRank ? <span>{index}.</span> : null;
  const commentUrl = storyId ? `/item/${storyId}` : "#";
  // some stories have titles but no urls
  const titleUrl = url || commentUrl;
  // reactPlaceHolder takes a boolean
  const titlePresent = title ? true : false;
  const author = `by ${by}`;
  const commentLength = kids ? mapComment(kids.length) : "discuss";
  const timestamp = `${mapToTime(time)}`;
  const voteCount = `${score} votes`;
  const smallUrl = url ? (
    <LinkWrapper>
      {"  ( "}
      <OutBoundLink url={url}>{getSourceUrl(url)}</OutBoundLink>
      {")"}
    </LinkWrapper>
  ) : null;

  return (
    <ReactPlaceholder
      type="text"
      showLoadingAnimation={true}
      ready={titlePresent}
      rows={2}
      color="#E0E0E0">
      <StoryWrapper>
        <RankWrapper showRank>
          {rank}
          <VoteButton>{UP_ARROW}</VoteButton>
        </RankWrapper>
        <div>
          <div>
            {/* used define the larger and black text */}
            <LinkWrapper large primary>
              <OutBoundLink url={titleUrl}>{title}</OutBoundLink>
            </LinkWrapper>
            {smallUrl}
          </div>
          <LinkWrapper>
            {voteCount}
            {"  "}
            <Link to={commentUrl}>{author}</Link>
            {"  |  "}
            <Link to={commentUrl}>{timestamp}</Link>
            {"  |  "}
            <Link to={commentUrl}>{commentLength}</Link>
          </LinkWrapper>
        </div>
      </StoryWrapper>
    </ReactPlaceholder>
  );
});

/*
 * Takes the comments length returns with `comment` or `comments` string.
 * If there is 0 comments it will return a `discuss` string
 */
const mapComment = commentLen => {
  if (commentLen >= 2) {
    return `${commentLen} comments`;
  }
  if (commentLen === 1) {
    return `${commentLen} comment`;
  }
  return `discuss`;
};
