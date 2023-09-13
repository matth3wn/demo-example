import { useNavigate } from "react-router-dom";
import { Sheet, Stack } from "@mui/joy";
import ApplicationCard from "./Card";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Sheet variant="outlined" color="neutral" sx={{ p: 4, border: 0 }}>
        <ApplicationCard
          name="Site 1"
          actionButtonName="Go"
          imgUrl="https://img.freepik.com/free-vector/warehouse-interior-logistics-cargo-delivery_107791-1777.jpg?w=2000"
          handleActionButtonClick={() => navigate('/site/1')}
        />
      </Sheet>
      <Sheet variant="outlined" color="neutral" sx={{ p: 4, border: 0 }}>
        <ApplicationCard
          name="Site 2"
          actionButtonName="Go"
          imgUrl="https://t3.ftcdn.net/jpg/02/17/59/64/360_F_217596442_dbXNpCi8fBTpKKtQXLUtzK0mQUdsoaUI.jpg"
          handleActionButtonClick={() => navigate('/site/2')}
        />
      </Sheet>
    </Stack>
  );
}
