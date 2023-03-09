
import './Footer.css'

function Footer() {

    return (  
        <section className="footer">   
            <Footerlist list="ผู้บันทึก" name="John Coner"/>
            <Footerlist list="ผู้แก้ไข" name="Anya Forger"/>
            <Footerlist list="ผู้ส่งเรื่อง" name="Steven Roger "/>
            <Footerlist list="ผู้อนุมัติ" name="Peter Parker"/>
        </section>
    );
}

export default Footer

function Footerlist(props: any) {
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() 
    const date_time = today.getDate() + '/' + (today.getMonth() + 1) + '/' +  today.getFullYear() + " " + time
    
    return (  
        <div className="footerlist">
            <h1>{props.list}</h1>
            <div className="list">
                <p>{props.name}</p>
                <p>{date_time}</p>
            </div>
        </div>
    );
}
