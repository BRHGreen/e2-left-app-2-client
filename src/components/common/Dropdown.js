import React from 'react';
const Dropdown = (props) => {
const {
  isOpen,
  onClose,
  header,
  menuItems,
  onChangeHandler,
  displayValue,
} = props

return (
  <details className="accordion" open={isOpen}>
    <summary className="accordion-header">
      {header}
    </summary>
    {console.log(this.props)}
    <div className="accordion-body">
      <ul className="menu menu-nav">
        {
          menuItems && menuItems.map((item, i) => {
            {console.log('item', item)}
            if (item) {
              return (
              <li
                className="menu-item"
                key={i}
              >
              <a onClick={() => onChangeHandler(item)}>{displayValue ? item[displayValue] : item}</a>
              </li>
              )
            }
            return null
          }
            )
        }
        <li onClick={onClose}>close</li>
      </ul>
    </div>
  </details>
)

} 

export default Dropdown
