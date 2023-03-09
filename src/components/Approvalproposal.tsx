
import './Approvalproposal.css'

function Approvalproposal() {
    return (  
        <section className="approveproposal">   
            <div className="approveheader">
                <h1>รายการเสนออนุมัติ</h1>
            </div>
            <div className="detailsection">
                <Detail />
                <Detail />
                <Detail />
                <Detail />
                <Detail />
                <Detail />
            </div>
                
        </section>
    );
}

export default Approvalproposal


function Detail() {
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() 
    // + ":" + today.getSeconds()
    const date_time = today.getDate() + '/' + (today.getMonth() + 1) + '/' +  today.getFullYear() + " " + time
    return (
        <div className="detail">

            <div className='detailfirstline'>
                <p className="titledetail">เลขที่ใบเบิก</p>
                <div className='gennum'>
                    <p>1277</p>
                    <p className='timestamp'>{date_time}</p>
                </div>
            </div>

            <div className='detailsecondline'>
                <p className="titledetail">หน่วยงานที่เสนอ</p>
                <div className='gennum'>
                    <p>xxxxxxxx xxxxxxxxxxxx</p>
                </div>
            </div>

            <hr />

            <div className="detailbutton">
                <button className="red">Reject</button>
                <button className="green">อนุมัติ</button>
            </div>
        </div>
    );
}

