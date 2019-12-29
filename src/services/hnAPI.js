import firebase from "firebase/app";
import "firebase/database";

export const version = "/v0/";
export const topStoriesUrl = `${version}topstories`;
export const itemUrl = `${version}item/`;

firebase.initializeApp({
  authDomain: "hacker-news.firebaseio.com",
  databaseURL: "https://hacker-news.firebaseio.com"
});

export const selectFields = ({ id, by, title, kids, url, time, score }) => ({
  id,
  by,
  kids,
  title,
  url,
  time,
  score
});

export const getItemById = async itemId => {
  const itemRef = firebase.database().ref(itemUrl + itemId);
  let results = await itemRef.once("value");
 return results.val();
}

export const getComment = async commentId => {
  let results = await getItemById(commentId);
  return results;
};

export const getCommentIds = async storyId => {
  let results = await getItemById(storyId);
  return results.kids;
};

export const getStory = async storyId => {
  let results = await getItemById(storyId);
  return selectFields(results);
};

export const getStoryIds = async (startCount = '0', endCount = '29') => {
  const topStoriesRef = firebase
    .database()
    .ref(topStoriesUrl)
    .orderByKey()
    .startAt(startCount)
    .endAt(endCount);
  let results = await topStoriesRef.once("value");
  return results.val();
};
