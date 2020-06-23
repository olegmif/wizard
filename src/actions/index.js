export const NEXT_STEP = 'NEXT_STEP';
export const PREV_STEP = 'PREV_STEP';
export const INPUT_CHANGED = 'INPUT_CHANGED';

export const nextStepAction = () => ({
  type: NEXT_STEP,
});

export const prevStepAction = () => ({
  type: PREV_STEP,
});

export const inputChangeAction = (question, option, checked) => ({
  type: INPUT_CHANGED,
  payload: {
    question,
    option,
    checked,
  },
});
