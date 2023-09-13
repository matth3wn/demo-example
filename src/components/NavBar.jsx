import { Sheet, Link } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Sheet variant="outlined" color="neutral" sx={{ p: 2, border: 0 }}>
      <Link
        component="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Link>
    </Sheet>
  );
}
