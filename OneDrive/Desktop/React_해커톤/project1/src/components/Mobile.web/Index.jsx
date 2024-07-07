import './Index.css'
import { BsCart4 } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdMan4 } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Index =() => {
    return (
    <form className='header'>
        <div className=' main'>
            <div className='head'>
            <h1 className='top_label'><MdKeyboardArrowLeft />ON&OFF<BsCart4/></h1>
            </div>
            <div className='blank'>
            <p className='first_label'>ON&OFF</p>
            <h1 className='second_label' >Online과 Offline을 합치다.</h1>
            </div>
            <div className='list'>
                <div className='product'></div>
                <div className='product'></div>
                <div className='product'></div>
            </div>
            <div className='footer'><IoLocationOutline /><FaBarcode /><IoHomeOutline /><CiSearch /><MdMan4 /></div>
 
        </div>
    </form>

    )

}

export default Index;