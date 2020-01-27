import React, { Component } from "react";
import superagent from "superagent";

class Joke extends Component {
  state = {
    joke: null,
    punchline: null,
    timer: null
  };
  componentDidMount() {
    superagent
      .get(`https://official-joke-api.appspot.com/random_joke`)
      .then(res => {
        this.setState({ joke: res.body.setup });
        this.state.timer = setTimeout(
          () => this.setState({ punchline: res.body.punchline }),
          5000
        );
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
