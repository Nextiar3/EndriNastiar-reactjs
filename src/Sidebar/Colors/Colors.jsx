/* eslint-disable react/prop-types */
import Input from '../../components/Input';
import './Colors.css';

const Colors = ({handlechange}) => {
  return (
    <div className='ml-color'>
      <h2 className="sidebar-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handlechange} type="radio" value="" name="test1" />{" "}
        <span className="checkmark all"></span>All
      </label>

      <div>
        <Input handlechange={handlechange} value="black" title="Black" name="test1" color="black"/>
        <Input handlechange={handlechange} value="blue" title="Blue" name="test1" color="blue"/>
        <Input handlechange={handlechange} value="red" title="Red" name="test1" color="red"/>
        <Input handlechange={handlechange} value="green" title="Green" name="test1" color="green"/>
        
        <label className="sidebar-label-container">
        <input onChange={handlechange} type="radio" value="white" name="test1" />{" "}
        <span className="checkmark" style={{border: "2px solid black"}}></span>White
      </label>
      </div>
    </div>
  );
}

export default Colors