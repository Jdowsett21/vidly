import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class NewMovie extends Form {
  state = {
    movie: {
      genre: "",
      movieName: "",
      //TODO need to link this to genre items, filter??
      numberInStock: "",
      rate: "",
      errors: {},
    },
  };

  schema = {
    genre: Joi.required().label("Genre"),
    movieName: Joi.string().required().label("MovieName"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    rate: Joi.number().required().min(1).max(5).label("Rate"),
  };

  onMovieCreation = () => {
    console.log("User Registered");
  };

  render() {
    return (
      <div>
        <h1>Create New Movie</h1>
        <form onMovieCreation={this.handleMovieCreation}>
          {this.renderInput("genre", "Genre")}
          {this.renderInput("movieName", "Movie Name")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Create Movie")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
