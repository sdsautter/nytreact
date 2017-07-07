// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var Config = require("../../../config.js")

var apiKey = process.env.apiKey || Config.NYT.apiKey;


// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(search, beginDate, endDate) {

    console.log(location);

    // Figure out the geolocation
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${search}&begin_date=${beginDate}`;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.docs) {
          console.log(data.docs);
        return response.data.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postArticle: function(title, date, url) {
    return axios.post("/api/saved", { 
        title: title,
        date: date,
        url: url 
    });
  }
};

// We export the API helper
module.exports = helper;
