import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarleft">
        <span className="logo"> TUSHAR</span>
      </div>
      <div className="topbarcenter">
        <SearchIcon className="seachicon" />
        <input
          className="searchinput"
          type="text"
          placeholder="search for post friends"
        />
      </div>

      <div className="topbarright">
          <div className="links">
        <div className="topbarlink">
          <span> Homepage</span>
          
        </div>
        <div className="topbarlink">
            <span> Timeline</span>
          
        </div>
          </div>
        <div className="iconcont">
          <div className="topbaricon">
            <PersonIcon />
            <span className="counter">1</span>
          </div>
          <div className="topbaricon">
            <ChatBubbleIcon />
            <span className="counter">1</span>
          </div>
          <div className="topbaricon">
            <NotificationsNoneIcon />
            <span className="counter">1</span>
          </div>
        </div>
        <Avatar className="profileavtar"  />
      </div>
    </div>
  );
};

export default Topbar;
