import {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { firebaseAPI as firebase } from "../services/hnAPI";

// Use Page Number Hook
export const usePageNumber = () => {

  const [currentPage, setCurrentPage] = useState({});
  let { page } = useParams();
  useEffect(() => {
    setCurrentPage(+page);
  }, [page]);

  return { currentPage };
};
// Use Story Ids Hook ( fetches new url on page change)
// calls with the HackerNews topStories url
export const useStoryIds = (currentPage) => {
  const [storyIds, setStoryIds] = useState([]);
  const { topStoriesUrl, getItemsOnce} = firebase;
  useEffect(() => {
    getItemsOnce(topStoriesUrl)
      .then(data => {
        setStoryIds(data);
      })
      .catch(error => {
        console.log("useStoryIds Hook: We are getting this error:");
        console.error(error);
        setStoryIds(null);
      });
  }, [topStoriesUrl, getItemsOnce, currentPage]);

  return storyIds;
};

//a General hook for Hacker News api used tp call a item by id
export const useFetchItemsByIds = (itemId) => {
  const [itemIds, setItemIds] = useState([]);
  const {itemUrl, getItemsOnce } = firebase;
  useEffect(() => {
    getItemsOnce(itemUrl+itemId)
      .then(data => {
        setItemIds(data);
      })
      .catch(error => {
        console.log("useFetchItemsByIds Hook: We are getting this error:");
        console.error(error);
      });
  }, [itemId, itemUrl, getItemsOnce]);

  return itemIds;
};
