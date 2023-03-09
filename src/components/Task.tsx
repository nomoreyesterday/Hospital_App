
import './Task.css'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function Task() {
    return (  
        <section className="tasklist">   
            <div className="task">
                <ul>
                    <li><span className="icon" ><DescriptionOutlinedIcon fontSize="small" /></span>ทั้งหมด</li>
                    <li><span className="icon"><PendingOutlinedIcon fontSize="small" /></span>รออนุมัติ</li>
                    <li><span className="icon"><TaskAltOutlinedIcon fontSize="small" /></span>อนุมัติแล้ว</li>
                    <li><span className="icon"><CancelOutlinedIcon fontSize="small" /></span>Reject</li>
                </ul>
            </div>
        </section>
    );
}

export default Task