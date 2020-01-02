import firebase from "firebase/app";
import "firebase/database";

import { selectFields } from "../selectors/";

export const version = "/v0/";
export const topStoriesUrl = `${version}topstories`;
export const itemUrl = `${version}item/`;

firebase.initializeApp({
  authDomain: "hacker-news.firebaseio.com",
  databaseURL: "https://hacker-news.firebaseio.com"
});

export const getItemById = async itemId => {
  const itemRef = firebase.database().ref(itemUrl + itemId);
  let results = "";
  await itemRef.once(
    "value",
    snapshot => {
      results = snapshot.val();
    },
    error => {
      console.log("getItemById: We are getting this error:");
      console.error(error);
      results = error;
    }
  );
  return results;
};

export const getComment = async commentId => {
  try {
    let results = await getItemById(commentId);
    return results;
  } catch (error) {
    console.log("getComment: We are getting this error:");
    console.error(error);
  }
};

export const getCommentIds = async storyId => {
  try {
    let results = await getItemById(storyId);
    return results.kids;
  } catch (error) {
    console.log("getCommentIds: We are getting this error:");
    console.error(error);
  }
};

export const getStory = async storyId => {
  try {
    let results = await getItemById(storyId);
    return selectFields(results);
  } catch (error) {
    console.log("getStory: We are getting this error:");
    console.error(error);
  }
};
export const getStoryIds = async (startCount = "0", endCount = "29") => {
  const topStoriesRef = firebase
    .database()
    .ref(topStoriesUrl)
    .orderByKey()
    .startAt(startCount.toString())
    .endAt(endCount.toString());
  let results;
  await topStoriesRef.once(
    "value",
    snapshot => {
      results = snapshot.val();
    },
    error => {
      console.log("getStoryIds: We are getting this error:");
      console.error(error);
      results = error;
    }
  );
  return results;
};
