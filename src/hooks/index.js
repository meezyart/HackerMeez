import {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { getStoryIds } from "../services/hnAPI";

// Use Page Number Hook
export const usePageNumber = () => {

  const [currentPage, setCurrentPage] = useState({});
  let { page } = useParams();
  useEffect(() => {
    setCurrentPage(+page);
  }, [page]);

  return { currentPage };
};
// Use Story Ids Hook ( probably not necessary to have moved this out the function)
export const useStoryIds = (currentPage) => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(data => {
        setStoryIds(data);
      })
      .catch(error => {
        console.log("useStoryIds Hook: We are getting this error:");
        console.error(error);
      });
  }, [currentPage]);

  return storyIds;
};
