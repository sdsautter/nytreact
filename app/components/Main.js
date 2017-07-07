// Include React
var React = require("react");

// Here we include all of the sub-components
var Saved = require("./children/Saved.js");
var Search = require("./children/Search");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return ({searchTerm: "", beginDate: "", endDate: "", article: [] });
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getArticle().then(function(response) {
      console.log(response);
      if (response !== this.state.article) {
        console.log("Article", response.data);
        this.setState({ article: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postHistory(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  setBeginDate: function(beingDate) {
    this.setState({ beginDate: beginDate });
  },
  setEndDate: function(endDate) {
    this.setState({ endDate: endDate });
  },
  // Here we render the function
  render: function() {
    return (
      
      <div className="container">
            <div className='row'>
                <div className="col-xs-12">
                    <div className="row" id="headerRow">

                        <div className="col-xs-3"><img src="assets/images/NYTIMES.PNG" /></div>
                        <div className="col-xs-9" id="NYT"><img src="assets/images/The_New_York_Times_logo.png" /></div>
                    </div>
                    <br />
                </div>
            </div>
            <div className="row">
      
      {/*<div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div> */}

          <div className="col-md-6">

            <Search setTerm={this.setTerm} />
            <Search beginDate={this.setBeginDate} />
            <Search endDate={this.setsetEndDate} />
            

          </div>

          <div className="col-md-6">



          </div>

        </div>

        <div className="row">

          <Saved article={this.state.article} />

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
