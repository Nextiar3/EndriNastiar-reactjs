/* eslint-disable react/prop-types */
const Input = ({handlechange, title, value, name, color}) => {
  return (
    <label className="sidebar-label-container">
      <input onClick={handlechange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{backgroundColor: color}}></span>{title}
    </label>
  );
}

export default Input