import axios from "axios";

export default {
  getPosts: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
};
