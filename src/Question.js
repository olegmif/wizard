import React from 'react';
import { connect } from 'react-redux';
import { inputChangeAction } from './actions';

function Question(props) {
  const { id, type, title, subtitle, options, name, inputChange } = props;

  const onInputChange = (e) => {
    // console.log('id', e.target.id);
    console.log('checked', e.target.checked);
    inputChange(id, e.target.id, e.target.checked);
  };

  const inputs = options.map((option) => (
    <label key={option.id}>
      {option.title}
      <input id={option.id} type={type} name={name} defaultChecked={option.checked} onChange={onInputChange} />
    </label>
  ));

  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {inputs}
    </div>
  );
}

const mapStateToProps = (dispatch) => ({
  inputChange: (question, option, checked) => dispatch(inputChangeAction(question, option, checked)),
});

export default connect(null, mapStateToProps)(Question);
