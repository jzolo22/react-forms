import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleNameChange = event => {
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    console.log(formData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={this.handleNameChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={this.handleNameChange} value={this.state.lastName} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;