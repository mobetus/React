import './Index.css'
import { BsCart4 } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdMan4 } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Header from './Header';



const Index =() => {
    return (
    <form className='header'>
        <div className=' main'>
            <div className='head'>
            <h1 className='top_label'><MdKeyboardArrowLeft size={20} />ON&OFF<BsCart4 size={20}/></h1>
            </div>
            <div className='blank'>
            <p className='first_label'>ON&OFF</p>
            <h1 className='second_label' >Online과 Offline을 합치다.</h1>
            </div>
            <div className='list'>
                {/* 부모 컴포넌트 */}
                <div className='product'><Header item={"Item 1"} detail={"Item Detail 1"} count={"count 1"}/></div>
                <div className='product'><Header item={"Item 2"} detail={"Item Detail 2"} count={"count 1"}/></div>
                <div className='product'><Header item={"Item 3"} detail={"Item Detail 3"} count={"count 1"} /></div>
            </div>
            <div className='footer'><IoLocationOutline /><FaBarcode /><IoHomeOutline /><CiSearch /><MdMan4 /></div>
 
        </div>
    </form>

    )

};

export default Index;