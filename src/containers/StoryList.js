import React, { useEffect, useState, memo } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "../components/Story";

export default function StoryList() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      {storyIds.map((storyId, index) => (
        <Story key={storyId} storyId={storyId} showRank={index + 1} />
      ))}
    </>
  );
}
