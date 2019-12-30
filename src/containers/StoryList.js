import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getStoryIds } from "../services/hnAPI";

import { Story } from "../components/Story";

import { StoryListWrapper, ButtonLink } from "../styles/GlobalStyle";
import { LINKS_PER_PAGE, MAX_PAGES} from "../constants";


export default function StoryList({ history }) {
  const [storyIds, setStoryIds] = useState([]);
  let { page } = useParams();

  // for pagination
  let startStory = LINKS_PER_PAGE * +page,
    endStory = LINKS_PER_PAGE + LINKS_PER_PAGE * +page - 1;

  useEffect(() => {
    getStoryIds(startStory, endStory).then(
      data => data && handleStoryIds(data)
    );
  }, [page, startStory, endStory]);

  /*
   * Fixes weird quirk cause by querying the db with orderByKey()
   * returns a array for for the first call and a object after 2 calls.
   */
  function handleStoryIds(ids) {
    if (typeof ids === "object") {
      return setStoryIds(Object.values(ids));
    } else {
      return setStoryIds(ids);
    }
  }
  // Redirects if the page number is over 17
  if (+page >= MAX_PAGES) {
    page = "0";
    history.push(`/new/0`);
  }

  function handleNextPage() {
    if (+page < 17) {
      history.push(`/new/${+page + 1}`);
    } else {
      page = "0";
      history.push(`/new/0`);
    }
  }

  return (
    <StoryListWrapper>
      {storyIds &&
        storyIds.map((storyId, index) => (
          <Story
            key={storyId}
            storyId={storyId}
            showRank={true}
            index={startStory + index + 1}
          />
        ))}
      <ButtonLink onClick={handleNextPage}>More</ButtonLink>
    </StoryListWrapper>
  );
}
