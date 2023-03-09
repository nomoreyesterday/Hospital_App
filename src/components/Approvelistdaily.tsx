
import './Approvelistdaily.css'

function Approvelistdaily() {
    return (  
        <section className="approvelist">   
            <div className="approvetitle">
                <h1>รายการเสนออนุมัติประจำวัน</h1>
                <div className="firstform">
                {/* type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"> */}
                    <input id="first" className="inputform" type="date" placeholder="2023-01-01"   />
                    <input id="second" className="inputform" type="text" placeholder='หน่วยงานที่เสนอ รหัส P4P'/>
                    <input id="third" className="inputform" type="text" placeholder='ดูทั้งหมด'/>
                </div>
            </div>
        </section>
    );
}

export default Approvelistdaily