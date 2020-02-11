# HackerMeez
A HackerNews React Christmas Clone!


### Tech Stack
- [Hacker News Firebase API](https://github.com/HackerNews/API) (this is where you will get the data)
- [React](https://reactjs.org/docs/getting-started.html)
- [Firebase Hosting](https://firebase.google.com/)

### Constraints / Instructions
1. Recreate a working version of the homepage for Hacker News. It should only display 30 items at a time and display the next page when you click the **More** button.
2. Create a Comments page. This page should display the info at the top from the original post and all of the comments for this post.
3. You do not need to build other pages, nor should you
4. You don't need to recreate all the top nav links, they won't work anyway
5. You will be using the following [Hacker News API endpoints](https://github.com/HackerNews/API), you should not need to use any other endpoints:
- **Top Stories** -  [https://hacker-news.firebaseio.com/v0/topstories](https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty) This simply return a list of ids for all the top stories
- **Story API** -  [https://hacker-news.firebaseio.com/v0/item/8863](https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty) This returns data for a story
- **Comment API** -  [ https://hacker-news.firebaseio.com/v0/item/2921983]( https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty) This returns data for a comment and is the same URL as above. **note: the numbers in those urls are ids for stories or comments**
6. Each page should have a unique URL (ex. localhost:8080/article/12121. note, it doesn't need to work on refresh as this will require some server side modifications

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install` or `yarn`

Installs all the necessary dependencies to this project.


### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
