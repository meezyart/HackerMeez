import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Story } from "../components/Story";

export default function StoryDetail() {
  const { itemId } = useParams();

  const storyId = itemId;

  return (
    <>
      <Story storyId={storyId} />
      <textarea rows="6" cols="60" />
      <br />
      <button>Add Comment</button> <br />

    </>
  );
}
