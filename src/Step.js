import React from 'react';
import Question from './Question';

const Step = (props) => {
  const { title, questions } = props;

  const stepQuestions = questions.map((question) => <Question key={question.id} id={question.id} title={question.title} subtitle={question.subtitle} type={question.type} options={question.options} name={question.name} />);

  return (
    <div>
      <h1>{title}</h1>
      {stepQuestions}
    </div>
  );
};

export default Step;
