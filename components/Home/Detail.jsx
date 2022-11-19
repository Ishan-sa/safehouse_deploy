import { CenterContainer } from "../../styles/styledComps";
import Image from "../D3Components/Image/ImageComp.jsx";
import Button from "../D3Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Ammenities from "../D3Components/Listings/ammenities";
import Info from "../D3Components/Listings/info";
import Description from "../D3Components/Listings/description";
import Rules from "../D3Components/Listings/rules";
import Chat from "../../pages/chat";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/D3Components/Navbar/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Swiper from "../D3Components/Swiper/Swiper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Detail = ({ state }) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const id = router.query.id;
  const editHandler = () => {
    setIsEdit(true);
    router.push("/edit/" + id);
    return;
  };

  const buttonHandler = () => { };

  const deleteHandler = () => {
    const docRef = doc(db, "homes", id);
    deleteDoc(docRef);
    window.confirm("Are you sure you want to delete this post?");
    router.push("/userhome");
  };

  return (
    <>
      <div>
        <div className="absolute z-[99] top-[10px] left-[10px] bg-[#333] rounded-full p-[2px] cursor-pointer">
          <ArrowBackIcon
            sx={{ color: 'white' }}
            onClick={() => router.push("/userhome")}
          />
        </div>
        <Swiper imgSrc={state.image ? state.image : ""} />
        <div className="flex justify-around border-y-2 border-[#888] py-4 mb-4">
          <div>
            <EditIcon sx={{ color: "#4A4A4A" }} />
            <button className="text-[#808080]" onClick={editHandler}>
              Edit Listing
            </button>
          </div>
          <div>
            <DeleteIcon sx={{ color: "#4A4A4A" }} />
            <button className="text-[#808080]" onClick={deleteHandler}>
              Delete Listing
            </button>
          </div>
        </div>
        <div className="flex flex-col items-left justify-left ml-5">
          <Info state={state} />
          <Description state={state} />
          <Ammenities state={state} />
          <Rules state={state} />
        </div>
        <CenterContainer>
          <div className="m-10">
            <Button
              txt="Contact Host"
              fontSize="16px"
              endIcon={<ArrowForwardIcon />}
              onBtnClick={buttonHandler}
            />
          </div>
        </CenterContainer>
      </div>
    </>
  );
};
export default Detail;
