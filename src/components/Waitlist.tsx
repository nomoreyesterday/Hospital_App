
import { useState } from 'react'
import './Waitlist.css'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import data from "../data/data.json"

function Waitlist() {

    const [formData, setFormData] = useState(
        {
            id: "", 
            idNumber: "", 
            document: "", 
            agency: "", 
            withdrawperson: "",
            withdrawdate: "",
            agencydetail: "",
            amount: "",
            fiscalyear: ""
        }
    )

    function handleChange(event:any) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event:any) {
        event.preventDefault()
        console.log(formData)
    }

    // --------------- Show form --------------- 



    // --------------- Add form --------------- 
    const [dataTables, setDataTables] = useState(data)
    const [currentIndex, setCurrentIndex] = useState(dataTables.length);
    const [addFormdata, setAddFormData] = useState({
        id:'',
        num:'',
        name:'',
        brand:'',
        serial:'',
        vendor:'',
        quantity:'',
        amount:''
    })

    const handleAddFormChange = (event:any) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name') as keyof typeof addFormdata;
        const fieldValue = event.target.value
        const newFormData = { ...addFormdata}
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (event:any) => {
        event.preventDefault()
        const newId = currentIndex + 1;
        const newData = {
            // id: addFormdata.id,
            id: newId.toString(),
            num:addFormdata.num,
            name:addFormdata.name,
            brand:addFormdata.brand,
            serial:addFormdata.serial,
            vendor:addFormdata.vendor,
            quantity:addFormdata.quantity,
            amount:addFormdata.amount
        }
        const newDatas = [...dataTables, newData]
        setDataTables(newDatas)
        setCurrentIndex(currentIndex + 1)

        console.log("newData = ", newData)
        // console.log("setDataTables = ", setDataTables)
        // console.log("setDataTables = ", setDataTables)
        // console.log("setCurrentIndex = ", setCurrentIndex)
    }

    const handleDeleteClick = (id:any) => {
        const newData = dataTables.filter((data) => data.id !== id);
        setDataTables(newData);
        console.log("newData Delete = ", newData)
        // console.log("setDataTables = ", setDataTables)
    };
    // const handleDeleteClick = (id: number) => {
    //     const newData = dataTables.filter((data) => data.id !== id)
    //     setDataTables(newData)
    // }

    // const handleDeleteClick = (id: number) => {
    //     const newData = dataTables.filter((data) => data.id !== id);
    //     setDataTables(newData);
    // }

      
    //   const newContacts = [...contacts];
    
    //   const index = contacts.findIndex((contact) => contact.id === contactId);
  
    //   newContacts.splice(index, 1);
  
    //   setContacts(newContacts);
    // };

    // const [editDataId, setEditDataId] = useState(null);

    // const [editFormdata, editAddFormData] = useState({
    //     id:'',
    //     num:'',
    //     name:'',
    //     brand:'',
    //     serial:'',
    //     vendor:'',
    //     quantity:'',
    //     amount:''
    // })

    // const handleEditFormSubmit = (event:any) => {
    //     event.preventDefault()
    //     const newData = {
    //         id:editDataId,
    //         num:addFormdata.num,
    //         name:addFormdata.name,
    //         brand:addFormdata.brand,
    //         serial:addFormdata.serial,
    //         vendor:addFormdata.vendor,
    //         quantity:addFormdata.quantity,
    //         amount:addFormdata.amount
    //     }
    //     const newDatas = [...dataTables]
    //     const index = dataTables.findIndex((data) => data.id === editDataId)
    //     newDatas[index] = newData

    //     setDataTables(newDatas)
    //     setEditDataId(null)
    // }


    // -------------------------------------------------------------
        // const [contacts, setContacts] = useState(data);
        // const [addFormData, setAddFormData] = useState({
        //     id:addFormdata.id,
        //     num:addFormdata.num,
        //     name:addFormdata.name,
        //     brand:addFormdata.brand,
        //     serial:addFormdata.serial,
        //     vendor:addFormdata.vendor,
        //     quantity:addFormdata.quantity,
        //     amount:addFormdata.amount
        // });

        // const [editFormData, setEditFormData] = useState({
        //     id:addFormdata.id,
        //     num:addFormdata.num,
        //     name:addFormdata.name,
        //     brand:addFormdata.brand,
        //     serial:addFormdata.serial,
        //     vendor:addFormdata.vendor,
        //     quantity:addFormdata.quantity,
        //     amount:addFormdata.amount
        // });

        // const [editContactId, setEditContactId] = useState(null);
        // const handleAddFormChange = (event:any) => {
        //     event.preventDefault();
        //     const fieldName = event.target.getAttribute("name");
        //     const fieldValue = event.target.value;
        //     const newFormData = { ...addFormData };
        //     newFormData[fieldName] = fieldValue;
        //     setAddFormData(newFormData);
        // };

        // const handleEditFormChange = (event:any) => {
        //     event.preventDefault();
        //     const fieldName = event.target.getAttribute("name");
        //     const fieldValue = event.target.value;
        //     const newFormData = { ...editFormData };
        //     newFormData[fieldName] = fieldValue;
        //     setEditFormData(newFormData);
        // };

        // const handleAddFormSubmit = (event:any) => {
        //     event.preventDefault();
        //     const newContact = {
        //         id: nanoid(),
        //         num:addFormdata.num,
        //         name:addFormdata.name,
        //         brand:addFormdata.brand,
        //         serial:addFormdata.serial,
        //         vendor:addFormdata.vendor,
        //         quantity:addFormdata.quantity,
        //         amount:addFormdata.amount
        //     };

        //     const newContacts = [...contacts, newContact];
        //     setContacts(newContacts);
        // };

        // const handleEditFormSubmit = (event:any) => {
        //     event.preventDefault();

        //     const editedContact = {
        //         id: editContactId,
        //         num:addFormdata.num,
        //         name:addFormdata.name,
        //         brand:addFormdata.brand,
        //         serial:addFormdata.serial,
        //         vendor:addFormdata.vendor,
        //         quantity:addFormdata.quantity,
        //         amount:addFormdata.amount
        //     };

        //     const newContacts = [...contacts];
        //     const index = contacts.findIndex((contact) => contact.id === editContactId);
        //     newContacts[index] = editedContact;
        //     setContacts(newContacts);
        //     setEditContactId(null);
        // };

        // const handleEditClick = (event:any, contact:any) => {
        //     event.preventDefault();
        //     setEditContactId(contact.id);
        //     const formValues = {
        //     fullName: contact.fullName,
        //     address: contact.address,
        //     phoneNumber: contact.phoneNumber,
        //     email: contact.email,
        //     };
        //     setEditFormData(formValues);
        // };

        // const handleCancelClick = () => {
        //     setEditContactId(null);
        // };

        // const handleDeleteClick = (contactId:any) => {
        //     const newContacts = [...contacts];
        //     const index = contacts.findIndex((contact) => contact.id === contactId);
        //     newContacts.splice(index, 1);
        //     setContacts(newContacts);
        // };
    // -------------------------------------------------------------

    return (  
        <section className="waitlist">   
            {/* -------------------- header -------------------- */}
            <div className="waitlistheader">
                <h1>รายการขออนุมัติเบิกจ่ายครุภัณฑ์</h1>
                <div className='buttonsection'>
                    <button className='green'>ดูรายละเอียด</button>
                    <button className='green'>พิมพ์</button>
                </div>
            </div>

            {/* -------------------- record -------------------- */}
            <div className="waitlistrecord">
                <h1>บันทึกใบเบิกครุภัณฑ์</h1>
                <div className='buttonsection'>
                    <button id="save" className='green'>บันทึก</button>
                </div>
            </div>

            {/* -------------------- report -------------------- */}

            <div className="waitlistreport">
                <form className='waitlistreportinput' action=""  // method="POST"
                    onSubmit={handleSubmit}>
                    
                    <label htmlFor="">ID ใบเบิก
                        <input className='report' type="text" 
                        name="id"
                        value={formData.id}
                        onChange={handleChange}/>
                    </label>

                    <label htmlFor="">เลขที่ใบเบิก
                        <input className='report' type="text" 
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}/>
                    </label>
                    <label htmlFor="">ทะเบียนเอกสาร
                        <input className='report' type="text" 
                        name="document"
                        value={formData.document}
                        onChange={handleChange}/>
                    </label>
                
                    <label htmlFor="">หน่วยงาน
                    <select className='report' required
                        name="agency"
                        value={formData.agency}
                        onChange={handleChange}>
                        <option value="" disabled hidden>เลือก</option>
                        <option value="หน่วยงาน1">หน่วยงาน1</option>
                        <option value="หน่วยงาน2">หน่วยงาน2</option>
                        <option value="หน่วยงาน3">หน่วยงาน3</option>
                        <option value="หน่วยงาน4">หน่วยงาน4</option>
                    </select>

                    </label>
                    <label htmlFor="">ผู้มีสิทธิ์เบิก
                        <input className='report' type="text" 
                        name="withdrawperson"
                        value={formData.withdrawperson}
                        onChange={handleChange}/>
                    </label>
                    <label htmlFor="">วันที่เบิก
                        <input className='report' type="datetime-local"
                        name="withdrawdate"
                        value={formData.withdrawdate}
                        onChange={handleChange}/>
                    </label>

                    <label htmlFor="">หน่วยงาน   
                        <input className='report textarea' type="textarea"  
                        name="agencydetail"
                        value={formData.agencydetail}
                        onChange={handleChange}/>
                    </label>
                    
                    <label htmlFor="">จำนวนเงิน
                        <input className='report' type="plaintext" 
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}/>
                        <span>บาท</span>
                    </label>
                    
                    <label htmlFor="">เลือกปีงบประมาณ
                        <input className='report' type="text" 
                        name="fiscalyear"
                        value={formData.fiscalyear}
                        onChange={handleChange}/>
                    </label>
                </form>
                <h1>รายงานบันทึกใบเบิกครุภัณฑ์</h1>
                <button id="add" className='green' >+ เพิ่มใบเบิกครุภัณฑ์</button>
            </div>

            {/* -------------------- list -------------------- */}

            <div className="waitlistfooter">
                <p>รวม {dataTables.length} รายการ</p>
                <form onSubmit={handleAddFormSubmit}>
                <table id="my-table">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>เลขครุภัณฑ์</th>
                            <th>ชื่อครุภัณฑ์</th>
                            <th>ยี่ห้อ/รุ่น/ขนาด</th>
                            <th>Serial No.</th>
                            <th>ผู้ผลิต/ผู้จำหน่าย</th>
                            <th>จำนวน</th>
                            <th>จำนวนเงิน</th>
                            <th></th>
                        </tr>
                    </thead> 

                    <tbody>
                        {dataTables.map((data, index)=>
                            <ReadOnlyRow
                                key={data.id == addFormdata.id ? index + 1 : data.id}
                                id={data.id == addFormdata.id ? index + 1 : data.id}
                                num={data.num}
                                name={data.name}    
                                brand={data.brand}
                                serial={data.serial}
                                vendor={data.vendor}
                                quantity={data.quantity}
                                amount={data.amount}
                                onDelete={handleDeleteClick}
                            />
                        )}
                        <tr>
                            <td></td> 
                            {/* <td>{dataTables.length + 1}</td> */}
                            <td><input className='report table' type="text" name="num" required placeholder="Enter a num..." onChange={handleAddFormChange}/></td>
                            <td><input className='report table' type="text" name="name" required placeholder="Enter a name..." onChange={handleAddFormChange}/></td>
                            <td><input className='report table' type="text" name="brand" required placeholder="Enter a brand..." onChange={handleAddFormChange}/></td>
                            <td><input className='report table' type="text" name="serial" required  placeholder="Enter a serial..." onChange={handleAddFormChange}/></td>
                            <td><input className='report table' type="text" name="vendor" required placeholder="Enter a vendor..." onChange={handleAddFormChange}/></td>
                            <td><input className='report table' type="text" name="quantity" required placeholder="Enter a quantity..." onChange={handleAddFormChange}/></td>
                            <td><input className='report table' type="text" name="amount" required placeholder="Enter a amount..." onChange={handleAddFormChange}/></td>
                            <td><button type="submit"><AddCircleOutlineIcon fontSize="small" /></button></td>
                        </tr>
                    </tbody>
                </table>
                </form>
                
            </div>
        </section>
    );
}

export default Waitlist

function ReadOnlyRow(props:any) {
    const handleDeleteClick = () => {
        props.onDelete(props.id);
    }
    return (  
        <tr>
            <td>{props.id}</td>
            <td>{props.num}</td>
            <td>{props.name}</td>
            <td>{props.brand}</td>
            <td>{props.serial}</td>
            <td>{props.vendor}</td>
            <td>{props.quantity}</td>
            <td>{props.amount}</td>
            <td><button onClick={handleDeleteClick}><DeleteOutlinedIcon fontSize="small" /></button></td>
        </tr>
    );
}
