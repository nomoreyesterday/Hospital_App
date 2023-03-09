
import './Sidebar.css'

function Sidebar() {
    return (  
        <section className="sidebar">   
                <nav className="navsidebar">
                    <ul>
                        <h1 className="logo">โรงพยาบาลตัวอย่าง</h1>
                        <li className="headbar">กลับเมนูหลัก</li>
                        <li className="headbar">งานบริหารทรัพย์สิน</li>
                        <li>Dashboard</li>
                        <li>ข้อมูลครุภัณฑ์</li>
                        <li>ข้อมูลครุภัณฑ์เป็นชุด</li>
                        <li className="headbar">เบิกครุภัณฑ์</li>
                        <ul>
                            <li>รายการเบิกจ่ายครุภัณฑ์</li>
                            <li>บันทึกเบิกจ่ายครุภัณฑ์</li>
                            <li>อนุมัติเบิกจ่ายครุภัณฑ์</li>
                        </ul>
                        <li className="headbar">ยืม-คืนครุภัณฑ์</li>
                        <ul>
                            <li>รายการยืม-คืน ครุภัณฑ์</li>
                            <li>บันทึกยืมครุภัณฑ์</li>
                            <li>อนุมัติยืมครุภัณฑ์</li>
                            <li>บันทึกคืนครุภัณฑ์</li>
                        </ul>
                        <li className="headbar">โอนครุภัณฑ์/ย้ายสถานที่ตั้ง</li>
                        <ul>
                            <li>รายการโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</li>
                            <li>บันทึกโอนครุภัณฑ์/ย้ายสถานที่ตั้ง</li>
                            <li>อนุมัติครุภัณฑ์/ย้ายสถานที่ตั้ง</li>
                        </ul>
                        <li className="headbar">ง่านซ่อม</li>
                        <ul>
                            <li>Dashboard งานซ่อม</li>
                            <li>เพิ่มการซ่อมบำรุง</li>
                            <li>ลงบันทึกรายละเอียดการซ่อม</li>
                            <li>บันทึกจ้างซ่อมภายนอก</li>
                            <li>ตรวจสอบการจ้างภายนอก</li>
                            <li>ประวัติการซ่อม</li>
                        </ul>
                    </ul>
                </nav>
        </section>
    );
}

export default Sidebar