import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

export default function ApplicationCard({
  name,
  actionButtonName,
  imgUrl,
  description,
  handleActionButtonClick
}) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {name}
      </Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      ></IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={imgUrl} alt={`${name}-alt`} />
      </AspectRatio>
      <Typography level="p" fontSize="md" sx={{ mb: 0.5 }}>
        {description}
      </Typography>
      <Button
        variant="solid"
        size="lg"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ ml: "auto", fontWeight: 600 }}
        onClick={() => handleActionButtonClick()}
      >
        {actionButtonName}
      </Button>
    </Card>
  );
}
