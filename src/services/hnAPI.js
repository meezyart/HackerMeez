import firebase from "firebase/app";
import "firebase/database";

export const version = "/v0/";
export const topStoriesUrl = `${version}topstories`;
export const itemUrl = `${version}item/`;

firebase.initializeApp({
  authDomain: "hacker-news.firebaseio.com",
  databaseURL: "https://hacker-news.firebaseio.com"
});

export const getItemById = async itemId => {
  const itemRef = firebase.database().ref(itemUrl + itemId);
  let results;
  await itemRef.once("value", snapshot => {
    results = snapshot.val();
  });

  return results;
};

export const getStoryIds = async () => {
  const topStoriesRef = firebase.database().ref(topStoriesUrl);
  let results;
  await topStoriesRef.once("value", snapshot => {
    results = snapshot.val();
  });

  return results;
};

