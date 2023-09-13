import * as React from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import AspectRatio from "@mui/joy/AspectRatio";

export default function InputFormProps({ handleSubmit, data }) {
  const [changePicture, setPicture] = React.useState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        handleSubmit && handleSubmit(formData);
      }}
    >
      <Stack spacing={1}>
        {!changePicture && (
          <AspectRatio
            variant="outlined"
            ratio="4/3"
            sx={{
              width: 300,
              bgcolor: "background.level2",
              borderRadius: "md",
            }}
          >
            <img
              src={data?.imgUrl}
              alt={`${data?.imgUrl}-alt`}
              onClick={() => setPicture(true)}
            />
          </AspectRatio>
        )}
        <Input
          name="itemCode"
          placeholder="Item Code"
          required
          defaultValue={data?.itemCode}
        />
        <Input
          name="description"
          placeholder="Description"
          required
          defaultValue={data?.description}
        />
        <Input
          name="location"
          placeholder="Location"
          required
          defaultValue={data?.location}
        />
        <Input
          name="user"
          placeholder="Submitter"
          required
          defaultValue={data?.user}
        />
        {changePicture && (
          <>
            <Input
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
            <Button
              variant="soft"
              color="danger"
              onClick={() => setPicture(false)}
            >
              Discard Image
            </Button>
          </>
        )}
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
