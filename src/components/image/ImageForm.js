import React, { Component } from 'react';

export default class ImageForm extends Component {

  state = {
    url: '',
    description: '',
    title: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    })
      .then(() => {
        this.setState({
          url: '',
          description: '',
          title: ''
        });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {

    const { url, description, title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="clip">Add an Image</legend>

          <label htmlFor="title"> Title:
          <input name="title" value={title} onChange={this.handleChange} placeholder="Provocative Descriptor..."/>
          </label>

          <label htmlFor="url"> url:
          <input name="url" value={url} onChange={this.handleChange} placeholder="https://example.jpg"/>
          </label>

          <label htmlFor="description"> Description:
          <textarea name="description" value={description} placeholder="Say something about the image..." onChange={this.handleChange}/>
          </label>
          <button type="submit">Add</button>
        </fieldset>

      </form>
    );
  }
}