export const questions = [
  {
    header: 'Question 1',
    subheader: 'This is a question 1',
    type: 'checkbox',
    name: 'question_1',
    active: true,
    enabled: true,
    options: [
      { id: 'question_1__option_1', title: 'Option 1' },
      { id: 'question_1__option_2', title: 'Option 2' },
      { id: 'question_1__option_3', title: 'Option 3' },
    ],
    childrens: [
      {
        header: 'Question 2',
        subheader: 'This is a question 2',
        type: 'radio',
        name: 'question_2',
        active: false,
        enabled: true,
        options: [
          { id: 'question_2__option_1', title: 'Option 1' },
          { id: 'question_2__option_2', title: 'Option 2' },
        ],
        childrens: [
          {
            header: 'Question 4',
            subheader: 'This is a question 4',
            type: 'checkbox',
            name: 'question_4',
            active: false,
            enabled: true,
            options: [
              { id: 'question_4__option_1', title: 'Option 1' },
              { id: 'question_4__option_2', title: 'Option 2' },
              { id: 'question_4__option_3', title: 'Option 3' },
              { id: 'question_4__option_4', title: 'Option 4' },
            ],
          },
        ],
      },
      {
        header: 'Question 3',
        subheader: 'This is a question 3',
        type: 'checkbox',
        name: 'question_3',
        active: false,
        enabled: true,
        options: [
          { id: 'question_3__option_1', title: 'Option 1' },
          { id: 'question_3__option_2', title: 'Option 2' },
          { id: 'question_3__option_3', title: 'Option 3' },
        ],
      },
    ],
  },
];

export const steps = [
  { id: 1, title: 'Step 1', enabled: true, active: true },
  { id: 2, title: 'Step 2', enabled: true, active: false },
  { id: 3, title: 'Step 3', enabled: true, active: false },
  { id: 4, title: 'Step 4', enabled: true, active: false },
];

export const nextStep = () => {
  const activeIndex = steps.findIndex((step) => step.active && step.enabled);
  steps[activeIndex].active = false;
  steps[activeIndex + 1].active = true;
};

export const prevStep = () => {};
