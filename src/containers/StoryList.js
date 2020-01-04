import React from "react";
import ReactPlaceholder from "react-placeholder";

import { Story } from "../components/Story";
import { ButtonLink } from "../styles/GlobalStyle";
import { LINKS_PER_PAGE } from "../constants";
import { usePageNumber, useStoryIds } from "../hooks";
import { Error404 } from "./Error404";

export default function StoryList() {
  let { currentPage } = usePageNumber();
  const storyIds = useStoryIds(currentPage);
  const MAX_STORIES = storyIds.length;

  // For pagination
  let startStory = LINKS_PER_PAGE * currentPage;
  let endStory = LINKS_PER_PAGE + startStory;
  let storySet = storyIds.slice(startStory, endStory);
  let storySetLoaded = storySet.length > 0;

  // For more button
  let hasMore = endStory < MAX_STORIES;
  const moreLink = `/new/${currentPage + 1}`;
  
  // edge case If someone types in /new/(number > max pages)
  const noStoriesLeft =
    !hasMore && storyIds.length > 0 && storySet.length === 0;

  return (
    <>
      {!noStoriesLeft ? (
        <ReactPlaceholder
          type="text"
          showLoadingAnimation={true}
          ready={storySetLoaded}
          rows={3}
          color="#E0E0E0">
          {storySet.map((storyId, index) => (
            <Story
              key={storyId}
              storyId={storyId}
              showRank={true}
              index={startStory + index + 1}
            />
          ))}
          {hasMore && <ButtonLink to={moreLink}>More</ButtonLink>}
        </ReactPlaceholder>
      ) : (
        <Error404 message="InValid Page URL " />
      )}
    </>
  );
}
