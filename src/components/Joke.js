import React, { Component } from "react";
import superagent from "superagent";

class Joke extends Component {
  state = {
    joke: null,
    punchline: null
  };

  componentDidMount() {
    superagent
      .get(`https://official-joke-api.appspot.com/jokes/programming/random`)
      .then(res => {
        res.body.map(joke => {
          this.setState({ joke: joke.setup });
          setTimeout(() => this.setState({ punchline: joke.punchline }), 5000);
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const loading = !this.state.joke;
    const punchline = !this.state.punchline;
    return (
      <div>
        {loading ? (
          <h3> Loading...</h3>
        ) : punchline ? (
          <h2>{this.state.joke}</h2>
        ) : (
          <h3>{this.state.punchline}</h3>
        )}
      </div>
    );
  }
}

export default Joke;
