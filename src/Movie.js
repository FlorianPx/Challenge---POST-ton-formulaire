import React from "react";
import axios from "axios";
import "./Movie.css";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    const url = "https://post-a-form.herokuapp.com/api/movies/";

    e.preventDefault();

    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Votre film a bien été ajouté !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout de votre film : ${e.message}`);
      });
  }
  render() {
    return (
      <div className="FormEmployee">
        <h1>Saisissez votre film préféré</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <input
                placeholder="Nom du film"
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <input
                placeholder="URL du Poster"
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <input
                placeholder="Commentaire"
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Movie;
