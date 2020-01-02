import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//  api
import { getStoryIds } from "../services/hnAPI";
// components
import { Story } from "../components/Story";
// styles
import { StoryListWrapper, ButtonLink } from "../styles/GlobalStyle";
// constants
import { LINKS_PER_PAGE, MAX_STORIES, MAX_PAGES } from "../constants";

export default function StoryList({ history }) {
  const [storyIds, setStoryIds] = useState([]);
  const [currentPage, setCurrentPage] = useState({});
  let { page } = useParams();

  // for pagination
  let startStory = LINKS_PER_PAGE * +page;
  let endStory = startStory + LINKS_PER_PAGE - 1;

  // Coverts page to a number
  useEffect(() => {
    setCurrentPage(+page);
  }, [page]);

  useEffect(() => {
    getStoryIds(startStory, endStory)
      .then(data => {
        handleStoryIds(data);
      })
      .catch(error => {
        console.log("StoryList: We are getting this error:");
        console.error(error);
      });
  }, [page, startStory, endStory]);

  /*
   * Redirects if the page number is over 17
   * page 16 is where the 500th article is reached
   * //TODO MOVE OUT SIDE THIS FUNCTION
   */
  if (currentPage >= MAX_PAGES) {
    history.push(`/404`);
  }
  /*
   * Fixes weird quirk cause by querying the db with orderByKey().
   * Returns an array for the first call and an object after 2 calls.
   */
  function handleStoryIds(ids) {
    if (typeof ids === "object") {
      return setStoryIds(Object.values(ids));
    } else {
      return setStoryIds(ids);
    }
  }

  function handleNextPage() {
    if (endStory < MAX_STORIES) {
      history.push(`/new/${currentPage + 1}`);
    }
  }

  return (
    <StoryListWrapper>
      {storyIds.map((storyId, index) => (
          <Story
            key={storyId}
            storyId={storyId}
            showRank={true}
            index={startStory + index + 1}
          />
        ))}
        {/* Hides button when the 500th article is reached */}
      <ButtonLink hidden={endStory > MAX_STORIES} onClick={handleNextPage}>
        More
      </ButtonLink>
    </StoryListWrapper>
  );
}
