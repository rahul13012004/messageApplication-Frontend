import { Box } from "@chakra-ui/layout"
import { useState } from "react";
import ChatBox from "../components/userAvatar/ChatBox";
import MyChats from "../components/userAvatar/MyChats";
import SideDrawer from "../miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    
    <div style={{ width: "100%",  justifyContent:"space-between"}}>
      {user && <SideDrawer />}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Box >
        {user && <MyChats fetchAgain={fetchAgain} /> }</Box>
         <Box d="flex" justifyContent="right"  h="91.5vh" p="10px" > 
        {user && (
          <div style={{minWidth: {base:'60rem', md:'fit-content'}, minHeight: '30rem'}}>
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </div>
        )} 
      </Box>
      </div>
    </div>
  );
};

export default Chatpage;