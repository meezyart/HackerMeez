import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
//api
import { getStory } from "../services/hnAPI";
//components
import { OutBoundLink } from "./OutBoundLink";
//helpers
import { mapToTime, mapComment, getSourceUrl } from "../utils";
//styles
import {
  StoryWrapper,
  RankWrapper,
  LinkWrapper,
  VoteButton
} from "../styles/StoryStyle";

export const Story = memo(function Story({ storyId, showRank, index }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(
      data => {
        setStory(data);
      }).catch(error => {
        console.log("Story: We are getting this error:");
        console.error(error);
      });
  }, [storyId]);
  return (
    <StoryWrapper>
      <RankWrapper className="rank">
        {showRank && <span>{index}.</span>}
        {showRank && <VoteButton>&#9650;</VoteButton>}
      </RankWrapper>
      <div>
        <div>
          {/* used define the larger and black text */}
          <LinkWrapper large primary>
            <OutBoundLink url={story.url || `/item/${storyId}`}>
              {story.title}
            </OutBoundLink>
          </LinkWrapper>
          {story.url && (
            <LinkWrapper>
              {"  ( "}
              <OutBoundLink url={story.url}>
                {getSourceUrl(story.url)}
              </OutBoundLink>
              {")"}
            </LinkWrapper>
          )}
        </div>
        <LinkWrapper>
          {story.score && `${story.score} votes`}
          {"  "}
          {story.by && <Link to={`/item/${storyId}`}>{`by ${story.by}`}</Link>}
          {story.by && "  |  "}
          {story.time && (
            <Link to={`/item/${storyId}`}>{`${mapToTime(story.time)}`}</Link>
          )}
          {story.time && "  |  "}
          <Link to={`/item/${storyId}`}>
            {story.kids ? mapComment(story.kids.length) : "discuss"}
          </Link>
        </LinkWrapper>
      </div>
    </StoryWrapper>
  );
});
