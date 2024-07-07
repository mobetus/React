import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Reactheader = () => {
    return(
<div>
    Today is<h1> {new Date().toDateString()}</h1>
    <FaArrowLeft/>
    <FaArrowRight/>
</div>
)
}


export default Reactheader;