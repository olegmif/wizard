import React from 'react';
import { connect } from 'react-redux';
import { nextStepAction, prevStepAction } from './actions';
// import Question from './Question';
import Step from './Step';

function App(props) {
  const { steps, nextStep, prevStep } = props;

  const wizardSteps = steps.filter((step) => step.active).map((step) => <Step key={step.id} title={step.title} questions={step.questions} />);

  return (
    <div className="App">
      {wizardSteps}
      <input
        type="button"
        value="prev"
        onClick={(e) => {
          prevStep();
        }}
      />
      <input
        type="button"
        value="next"
        onClick={(e) => {
          nextStep();
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  steps: state,
});

const mapDispatchToProps = (dispatch) => ({
  nextStep: () => dispatch(nextStepAction()),
  prevStep: () => dispatch(prevStepAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
