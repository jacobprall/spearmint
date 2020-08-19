import React, {useState, useEffect} from 'react'
import AccountLineItem from './account_line_item'


export default function account_category({ accounts, category, logo, catSub, openModal }) {

  const [toggle, setToggle] = useState(false)

  // const [catSub, setCatSub] = useState(0);
  
  // const categorySubTotal = accounts.map((account) => (
  //     account.balance
  //   )).reduce((acc = 0, balance) => {
  //     acc + balance
  //   }, 0);
    
  //   useEffect(() => (
  //     setCatSub(categorySubTotal)
  //   ),[0])
  


  const handleClick = () => {
    setToggle(() => (
      !toggle
    ))
  }


  return (
    
    <div className={`account-category ${toggle ? "active" : ""}`} onClick={handleClick} >
        <div className="account-category-li">
          <img src={logo} alt="image" className="category-icons" />
          <span className="account-category-label">{category}</span>
          <span className="category-subtotal">{catSub}</span>
        </div>
        
        <div className="category-line-items">
          <ul>
            {accounts.map((account) => (
              <AccountLineItem account={account} key={account.id} openModal={openModal}/>
            ))}
          </ul>
        </div>
   </div>
  )
}
