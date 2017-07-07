// Include React
var React = require("react");

// Creating the Form component
var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return ( { 
        searchTerm: "", 
        beginDate: "", 
        endDate: "" 
    }) ;
  },

  // This function will respond to the user input
  handleChange: function(key) {

    return function (event) {
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);

    // this.setState({ term: event.target.value });
    // this.beginDate({ beginDate: event.target.value})
    // this.endDate({ endDate: event.target.value})

  },
//   submitSearchTerm: function (event) {
//     const article = this.state.article;
//     article.term = event.target.value;
//     this.setState({ article: article });
//     this.props.setTerm(this.state.term);
//     this.setState({ term: "" });
    
//   },
//   submitBeginDate: function (event) {
//     const article = this.state.article;
//     article.beginDate = event.target.value;
//     this.setState({ article: article });
//     this.props.beginDate(this.state.beginDate);
//     this.beginDate({ beginDate: "" });
    
//   },
//   submitEndDate: function (event) {
//     const article = this.state.article;
//     article.endDate = event.target.value;
//     this.setState({ article: article });
//     this.props.endDate(this.state.endDate);
//     this.endDate({ endDate: "" });
    
//   },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.props.beginDate(this.state.beginDate);
    this.props.endDate(this.state.endDate);
    
    this.setState({ term: "", beginDate: "", endDate: "" });
    
  },
  // Here we describe this component's render method
  render: function() {
    return (
      
      
      <div className="col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Search Parameters</h3>
                        </div>
                        <div className="panel-body">                            
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">                                
                                <input
                                    value={this.state.term}
                                    type="text"
                                    className="form-control text-center"
                                    name="term"
                                    onChange={this.handleChange("term")}
                                    required
                                />
                                <br />
                                <h4 className="">
                                    <strong>Begin Date:</strong>
                                </h4>
                                <input
                                    value={this.state.beginDate}
                                    type="text"
                                    className="form-control text-center"
                                    name="beginDate"
                                    onChange={this.handleChange("beginDate")}
                                    required
                                />
                                <br />
                                <h4 className="">
                                    <strong>End Date:</strong>
                                </h4>
                                <input
                                    value={this.state.endDate}
                                    type="text"
                                    className="form-control text-center"
                                    name="endDate"
                                    onChange={this.handleChange("endDate")}
                                    required
                                />
                                <br />
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

    //   <div className="panel panel-default">
    //     <div className="panel-heading">
    //       <h3 className="panel-title text-center">Query</h3>
    //     </div>
    //     <div className="panel-body text-center">
    //       <form onSubmit={this.handleSubmit}>
    //         <div className="form-group">
    //           <h4 className="">
    //             <strong>Location</strong>
    //           </h4>

    //           {/*
    //             Note how each of the form elements has an id that matches the state.
    //             This is not necessary but it is convenient.
    //             Also note how each has an onChange event associated with our handleChange event.
    //           */}
    //           <input
    //             value={this.state.term}
    //             type="text"
    //             className="form-control text-center"
    //             id="term"
    //             onChange={this.handleChange}
    //             required
    //           />
    //           <br />
    //           <button
    //             className="btn btn-primary"
    //             type="submit"
    //           >
    //             Submit
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
