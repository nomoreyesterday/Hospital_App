import Approvalproposal from "../components/Approvalproposal"
import Approvelistdaily from "../components/Approvelistdaily"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Subnavbar from "../components/Subnavbar"
import Task from "../components/Task"
import Waitlist from "../components/Waitlist"


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"/>

function Homepage() {
    return (  
        <div>
            <Sidebar />
            <Navbar />
            <Subnavbar />
            <Approvelistdaily />
            <Task />
            <Approvalproposal />
            <Waitlist />
            <Footer />
        </div>
    )   
}

export default Homepage

