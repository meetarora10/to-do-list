import './AddItem.css'
import { IoIosAdd } from "react-icons/io";
const AddItem = ({ addItem,setAddItem,handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='form'>
        <input type="text" value={addItem} onChange={(e)=>setAddItem(e.target.value)} placeholder="What's the task for today?"/>
        <button type="submit"><IoIosAdd /></button>
    </form>
  )
}
export default AddItem
