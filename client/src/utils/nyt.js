import axios from "axios";

export default {
  // Gets articles
  getArticles: function (searchTerm, start, end) {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const APIKEY = "4a8d9ea36aaa4e83adbcb2e38234b82a";
    url = `${url}?key=${APIKEY}&sort=newest`;
    if (searchTerm) {
      searchTerm = encodeURIComponent(searchTerm);
      url+= `&q=${searchTerm}`;
    }
    if (start) {
      url+= `&begin_date=${start}`;
    }
    if (start && end) {
      url+= `&end_date=${end}`;
    }
    console.log(url);
    return axios.get(url);
  }
};