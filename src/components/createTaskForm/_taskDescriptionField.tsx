import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  // Destructure Props
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      label="Task Description"
      placeholder="Task Description"
      variant="outlined"
      size="small"
      name="title"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
