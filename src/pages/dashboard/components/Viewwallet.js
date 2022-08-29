import React, { useState } from "react";
import './viewwallet.css';
import { TbWallet } from 'react-icons/tb';
import { MdContentCopy } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';






function ViewWallet() {
  const [show, setShow] = useState(true);
  const [balance, setBalance] = useState('N2,000,000');

  const hideBalance = () => {
    setShow((prevState) => {
      return !prevState;
    })
    setBalance('****');
    
  }

  const showBalance = () => {
    setShow((prevState) => {
      return !prevState;
    })
    setBalance('N2,000,000');
    
  }

  
    return (
      <>
      <section className="wallet-container">
        <div className="wallet-card">
            <div className="wallet-content">
              <div className="wallet-icon">
                <span>
                  <TbWallet className="icon"/>
                </span>
              </div>
              <div className="wallet-details">
                <p className="balance-text">account balance</p>
                <p className="balance">{balance}</p>
                <p id="bank-name">wema bank</p>
                <p>
                  <button className="copyBtn"><MdContentCopy/></button>
                  938933939394
                </p>
              </div>
            </div>
            <div className="balance-visibility">
              {
                show ? (
                  <button className="show" onClick={hideBalance}>
                    <AiOutlineEye  className="show-icon "/>
                  </button>
                ) : (
                  <button className="hide" onClick={showBalance}>
                    <AiOutlineEyeInvisible className="hide-icon"/>
                  </button>
                )
              }
            </div>
        </div>
        <div className="transfer-profile-container">
          <div className="transfer-tag-div">
            <a href="/other-transfer" className="transfer-tag">transfer</a>
          </div>
          <div className="profile-tag-div">
            <a href="/profile" className="profile-tag">profile</a>
          </div>
        </div>
        {/*<div className="search-transaction">*/}
        {/*  <span><BiSearch className="search-icon"/></span>*/}
        {/*  <input type="text" className="search" placeholder="Search transactions" />*/}
        {/*</div>*/}
        {/*<div className="transaction-history">*/}
        {/*  <tr>Transaction History</tr>*/}
        {/*</div>*/}




      </section>

      </>
    )
  // function generateTableHead(table, data) {
  //   let thead = table.createTHead();
  //   let row = thead.insertRow();
  //   for (let key of data) {
  //     let th = document.createElement("th");
  //     let text = document.createTextNode(key);
  //     th.appendChild(text);
  //     row.appendChild(th);
  //   }
  // }
  //
  // let table = document.querySelector("table");
  // let data = Object.keys(mountains[0]);
  // generateTableHead(table, data);
}

export default ViewWallet
