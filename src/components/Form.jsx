import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function InputFormProps({ handleSubmit, name }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        handleSubmit && handleSubmit(formJson)
        alert(JSON.stringify(formJson));
      }}
    >
      <Stack spacing={1}>
        <Input placeholder="Try to submit with no text!" required defaultValue={name}/>
        <Input placeholder="It is disabled" disabled />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}