import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";


import { getStory } from "../services/hnAPI";
import { mapToTime, mapComment, getSourceUrl } from "../utils";

import {
  StoryWrapper,
  RankWrapper,
  LinkWrapper,
  VoteButton
} from "../styles/StoryStyle";

export const Story = memo(function Story({ storyId, showRank, index }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data.title && setStory(data));
  }, [storyId]);

  return (
    <StoryWrapper>
      <RankWrapper>
        {showRank && <span>{index}.</span>}
        <VoteButton>&#9650;</VoteButton>
      </RankWrapper>
      <div>
        <div>
          <LinkWrapper size="1em" color="#262421">
            <a
              href={story.url || `/item/${storyId}`}
              rel="noopener noreferrer"
              target="_blank">
              {story.title}
            </a>
          </LinkWrapper>
          {story.url && (
            <LinkWrapper>
              {"  ("}
              <a rel="noopener noreferrer" href={story.url} target="_blank">
                {getSourceUrl(story.url)}
              </a>
              {")"}
            </LinkWrapper>
          )}
        </div>
        <LinkWrapper size=".75em">
          {story.score} votes
          {"  "}
          <Link to={`/item/${storyId}`}>by {story.by}</Link>
          {"  |  "}
          <Link to={`/item/${storyId}`}>
            {story.time && `${mapToTime(story.time)} ago`}
          </Link>
          {"  |  "}
          {
            <Link to={`/item/${storyId}`}>
              {story.kids ? mapComment(story.kids.length) : "discuss"}
            </Link>
          }
        </LinkWrapper>
      </div>
    </StoryWrapper>
  );
});
