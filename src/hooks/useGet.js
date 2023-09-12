import { useEffect, useState } from "react";
import getData from "../helpers/getData";


const useGet = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(url, setData)
  }, []);

  return data;
}
 
export default useGet;