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

   /*
   * Fixes weird quirk cause by querying the db with orderByKey().
   * Returns an array for the first call and an object after 2 calls.
   */
    if (typeof results === "object") {
      return Object.values(results);
    } else {
      return results;
    }
};
