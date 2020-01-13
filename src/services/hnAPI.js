import firebase from "firebase/app";
import "firebase/database";


class Firebase {
  constructor(){
    firebase.initializeApp({
        authDomain: "hacker-news.firebaseio.com",
        databaseURL: "https://hacker-news.firebaseio.com"
      })
    this.version = "/v0/"
    this.itemUrl = `${this.version}item/`;
    this.topStoriesUrl = `${this.version}topstories`;
  }

  getItemsOnce = async url => {
    const itemRef = firebase.database().ref(url);
    try {
      let results = await itemRef.once("value");
      return results.val();
    } catch (error) {
      console.log("getItemsOnce: We are getting this error:");
      console.error( error);

    }
  }
}

export const firebaseAPI  = new Firebase();
