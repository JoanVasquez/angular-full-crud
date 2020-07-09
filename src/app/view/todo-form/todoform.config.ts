//import { Validators } from '@angular/forms';

export const defaultValues = {
  userId: null,
  title: '',
  completed: false,
};

export const setData = (data) => {
  return {
    userId: [data.userId],
    title: [data.title],
    completed: [data.completed],
  };
};

export const props = {
  ngCols: ['col-6', 'col-6', 'col-6'],

  properties: [
    {
      name: 'userId',
      type: 'text',
      label: 'User ID',
      placeholder: 'Insert User Id',
      inputType: 'field',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      placeholder: 'Insert Title',
      inputType: 'field',
    },
    {
      name: 'completed',
      type: 'checkbox',
      msg: 'Is it completed?',
      label: 'Completed?',
      inputType: 'checkbox',
    },
  ],
};
