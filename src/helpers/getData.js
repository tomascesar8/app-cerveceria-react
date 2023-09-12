import axios from "axios";

const getData = async (url, setData) => {
  try {
    const response = await axios.get(url) 
    const { data } = response;
    setData(data);
  } catch (error) {
    console.log(error);
  }
}

export default getData;