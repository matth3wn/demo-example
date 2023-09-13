import * as React from "react";
// import { onValue, ref } from "firebase/database";
import { Stack } from "@mui/joy";
import { useParams } from "react-router-dom";
import ApplicationCard from "./Card";
import BasicModal from "./Modal";
// import { database } from "../firebase";

export default function SiteView() {
  const { id } = useParams();
  const [toggleModal, setToggleModal] = React.useState(false);
  const [cardData, setCardData] = React.useState({});
  
  // React.useEffect(() => {
  //   return onValue(query, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(query)
  //     if (snapshot.exists()) {
  //       console.log(data)
  //     }
  //   });
  // }, []);

  // const handleClick = (data) => () => {
  //   setToggleModal(true);
  //   setCardData({...data});
  // };
  return (
    <div>
      {`Site ${id}`}
      <Stack direction="row" spacing={2} justifyContent="center">
        <ApplicationCard
          name="Item 1"
          description="item 1"
          actionButtonName="Edit"
          handleActionButtonClick={handleClick({ name: "Test" })}
        />
        <ApplicationCard
          name="Item 2"
          description="item 2"
          actionButtonName="Edit"
          handleActionButtonClick={handleClick({ name: "Test1" })}
        />
        <ApplicationCard
          name="Item 3"
          description="item 3"
          actionButtonName="Edit"
          handleActionButtonClick={handleClick({ name: "Test2" })}
        />
      </Stack>
      <BasicModal
        toggle={toggleModal}
        handleToggle={setToggleModal}
        data={cardData}
      />
    </div>
  );
}
