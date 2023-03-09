
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (  
        <section className="navbar">   
            <form className='searhform' action="">
                <input className="inputform" type="search" placeholder='ID ใบเบิกจ่ายครุภัณฑ์'/>
                <button className="searchbutton"><SearchIcon color='action'  sx={{ fontSize: 16 }}/></button>
            </form>

            <div className="rightside">
                <div className="allmobile">
                    <div className="mobile">▯</div>
                    <div className="mobile">▯</div>
                    <div className="mobile">▯</div>
                </div>
                <div className="allprofile">
                    <p>xxxxxxx xxxxxxxxxxxxxx</p>
                    <div className="profile"></div>
                </div>
                
            </div>
            
        </section>
    );
}

export default Navbar