import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./Home.css"

const Home = () => {
    return (
        < >
            <Topbar/>
            <div className="homecontainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
        </>
    )
}

export default Home
