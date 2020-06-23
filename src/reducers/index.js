import { NEXT_STEP, PREV_STEP, INPUT_CHANGED } from '../actions';

const initialSteps = [
  {
    id: 1,
    title: 'Step 1',
    enabled: true,
    active: true,
    questions: [
      {
        id: 1,
        title: 'Question 1',
        subtitle: 'This is the Question 1',
        type: 'checkbox',
        name: 'q1',
        options: [
          { id: 1, title: 'Option 1', checked: false, enableSteps: [2, 4] },
          { id: 2, title: 'Option 2', checked: false, enableSteps: [3] },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Step 2',
    enabled: false,
    active: false,
    questions: [
      {
        id: 2,
        title: 'Question 2',
        subtitle: 'This is the Question 2',
        type: 'checkbox',
        name: 'q2',
        options: [
          { id: 1, title: 'Option 1', checked: false, enableSteps: [] },
          { id: 2, title: 'Option 2', checked: false, enableSteps: [] },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Step 3',
    enabled: false,
    active: false,
    questions: [
      {
        id: 3,
        title: 'Question 3',
        subtitle: 'This is the Question 3',
        type: 'checkbox',
        name: 'q3',
        options: [
          { id: 1, title: 'Option 1', checked: false, enableSteps: [] },
          { id: 2, title: 'Option 2', checked: false, enableSteps: [] },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Step 4',
    enabled: false,
    active: false,
    questions: [
      {
        id: 4,
        title: 'Question 4',
        subtitle: 'This is the Question 4',
        type: 'radio',
        name: 'q4',
        options: [
          { id: 1, title: 'Option 1', checked: false, enableSteps: [] },
          { id: 2, title: 'Option 2', checked: false, enableSteps: [] },
        ],
      },
    ],
  },
];

const findActiveIndex = (arr) => {
  let n = -1;
  let found = false;
  while (!found && n < arr.length - 1) {
    n++;
    found = arr[n].active;
  }
  return n;
};

const findNextEnabledIndex = (arr, start) => {
  let n = start;
  let found = false;
  while (!found && n < arr.length - 1) {
    n++;
    found = arr[n].enabled;
  }
  if (!found) {
    n = -1;
  }
  return n;
};

const next = (steps) => {
  const newSteps = [...steps];
  const activeIndex = findActiveIndex(steps);
  const nextActiveIndex = findNextEnabledIndex(steps, activeIndex);
  if (nextActiveIndex != -1) {
    newSteps[activeIndex].active = false;
    newSteps[nextActiveIndex].active = true;
  }
  return newSteps;
};

const findPrevEnabledIndex = (arr, start) => {
  let n = start;
  let found = false;
  while (!found && n > 0) {
    n--;
    found = arr[n].enabled;
  }
  if (!found) {
    n = -1;
  }
  return n;
};

const prev = (steps) => {
  const newSteps = [...steps];
  const activeIndex = findActiveIndex(steps);
  const prevActiveIndex = findPrevEnabledIndex(steps, activeIndex);
  if (prevActiveIndex != -1) {
    newSteps[activeIndex].active = false;
    newSteps[prevActiveIndex].active = true;
  }
  return newSteps;
};

const findIndexById = (arr, id) => {
  let n = -1;
  let found = false;
  while (!found && n < arr.length - 1) {
    n++;
    found = arr[n].id == id;
  }
  if (!found) {
    n = -1;
  }
  return n;
};

const filterSteps = (steps, question, option, checked) => {
  const newSteps = [...steps];

  const activeIndex = findActiveIndex(newSteps);

  let questions = newSteps[activeIndex].questions;
  let questionIndex = findIndexById(questions, question);

  let options = questions[questionIndex].options;
  let optionIndex = findIndexById(options, option);

  newSteps[activeIndex].questions[questionIndex].options[optionIndex].checked = checked;

  let stepsForEnable = options[optionIndex].enableSteps;

  stepsForEnable.forEach((step) => {
    let stepIndex = findIndexById(newSteps, step);
    newSteps[stepIndex].enabled = checked;
  });

  return newSteps;
};

const steps = (state = initialSteps, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return next(state);
    case PREV_STEP:
      return prev(state);
    case INPUT_CHANGED:
      const { question, option, checked } = action.payload;
      return filterSteps(state, question, option, checked);
    default:
      return state;
  }
};

export default steps;
