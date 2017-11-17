import React, { Component } from 'react';

class AddTaskForm extends Component {
  state = {
    petName: '',
    petOwner: '',
    date: '',
    problem: '',
  };

  reset = () => {
    this.setState({ petName: '', petOwner: '', date: '', problem: '' });
  };

  add = e => {
    e.preventDefault();

    const { petName, petOwner, date, problem } = this.state;
    const { id } = this.props;

    const task = {
      id,
      petName,
      petOwner,
      date,
      problem,
    };

    this.props.onAdd(task);

    this.reset();
  };

  render() {
    const handleClick = () => {
      this.props.switchState();
    };

    return (
      <div className="form-container">
        <h2 onClick={handleClick} className="form__header">
          <strong>{this.props.visible ? '-' : '+'}</strong> Add a task
        </h2>

        <form
          onSubmit={this.add}
          className={this.props.visible ? 'form form--visible' : 'form'}
        >
          <div className="form__row">
            <label htmlFor="petName">Pet name</label>
            <input
              id="petName"
              type="text"
              value={this.state.petName}
              onInput={e => {
                this.setState({ petName: e.target.value });
              }}
            />
          </div>
          <div className="form__row">
            <label htmlFor="petOwner">Owner name</label>
            <input
              id="petOwner"
              type="text"
              value={this.state.petOwner}
              onInput={e => {
                this.setState({ petOwner: e.target.value });
              }}
            />
          </div>
          <div className="form__row">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={this.state.date}
              onInput={e => {
                this.setState({ date: e.target.value });
              }}
            />
          </div>
          <div className="form__row">
            <label htmlFor="problem">Problem</label>
            <textarea
              id="problem"
              type="text"
              value={this.state.problem}
              onInput={e => {
                this.setState({ problem: e.target.value });
              }}
            />
          </div>

          <button className="form__submit" type="submit">
            Add task
          </button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
