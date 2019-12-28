import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";

import { getStory } from "../services/hnAPI";
import { mapToTime, mapComment, getSourceUrl } from "../utils";

export const Story = memo(function Story({ storyId, showRank }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data.url && setStory(data));
  }, [storyId]);

  return (
    <div>
      <div>
        {showRank && <span>{showRank}.</span>}
        <div className="vote-btn">^</div>
      </div>
      <div>
        <div>
          <a href={story.url} rel="noopener noreferrer" target="_blank">
            {story.title}
          </a>
          {"  "}
          <span className="link">
            {"  ("}
            {story.url && (
              <a rel="noopener noreferrer" href={story.url} target="_blank">
                {getSourceUrl(story.url)}
              </a>
            )}
            {")"}
          </span>
        </div>
        <div>
          {story.score} votes
          {"  "}
          <Link to={`/item/${storyId}`}>by {story.by}</Link>
          {"  "}
          <Link to={`/item/${storyId}`}>
            {story.time && mapToTime(story.time)}
          </Link>
          {"  "}
          {
            <Link to={`/item/${storyId}`}>
              {story.kids ? mapComment(story.kids.length) : "discuss"}
            </Link>
          }
        </div>
      </div>
    </div>
  );
});
