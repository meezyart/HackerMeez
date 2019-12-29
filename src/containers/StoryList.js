import React, { useEffect, useState, memo } from "react";
import styled from "styled-components";

import { getStoryIds } from "../services/hnAPI";
import { Story } from "../components/Story";

import { StoryListWrapper } from "../styles/GlobalStyle";

export default function StoryList() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [storyIds]);

  return (
    <StoryListWrapper>
      {storyIds.map((storyId, index) => (
        <Story
          key={storyId}
          storyId={storyId}
          showRank={true}
          index={index + 1}
        />
      ))}
    </StoryListWrapper>
  );
}
