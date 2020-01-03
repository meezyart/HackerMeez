import React, { useEffect, useState, memo } from "react";
import ReactPlaceholder from "react-placeholder";

import { Link } from "react-router-dom";
//api
import { getItemById as getStory } from "../services/hnAPI";
//components
import { OutBoundLink } from "./OutBoundLink";
//helpers
import { mapToTime, mapComment, getSourceUrl } from "../utils";
//styles

import "react-placeholder/lib/reactPlaceholder.css";
import {
  StoryWrapper,
  RankWrapper,
  LinkWrapper,
  VoteButton
} from "../styles/StoryStyle";

export const Story = memo(function Story({ storyId, showRank, index }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId)
      .then(data => {
        setStory(data);
      })
      .catch(error => {
        console.log("Story: We are getting this error:");
        console.error(error);
      });
  }, [storyId]);

  const { title, url, by, kids, time, score } = story;
  // display variables
  const rank = showRank ? <span>{index}.</span> : null;
  // some stories have titles but no urls
  const titleUrl = url || `/item/${storyId}`;
  const titlePresent = story.title && story.title.length > 0;
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
          <VoteButton>&#9650;</VoteButton>
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
            <Link to={`/item/${storyId}`}>{author}</Link>
            {"  |  "}
            <Link to={`/item/${storyId}`}>{timestamp}</Link>
            {"  |  "}
            <Link to={`/item/${storyId}`}>{commentLength}</Link>
          </LinkWrapper>
        </div>
      </StoryWrapper>
    </ReactPlaceholder>
  );
});
