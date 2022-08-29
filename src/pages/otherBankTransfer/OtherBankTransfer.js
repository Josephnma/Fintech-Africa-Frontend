import React from "react"
import { BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";
import Topbar from '../dashboard/components/topbar/Topbar';
import "./OtherBankTransfer.css"


function OtherBankTransfer(){
    return (
        <div>
            <Topbar />
            <div className="container">
                <div className="previous-page">
                    <span>
                        <BsArrowLeft />
                    </span>
                   <Link to="/dashboard" className="goBack">Go back</Link>
                </div>
                <div className="profile-header">
                    <h5>transfer</h5>
                </div>
                <div className="transferContainer">
                    <p className="first-link"><a href="/local">Local Bank Transfer</a></p>
                    <p className="second-link"><a href="/other-transfer">Other Bank Transfer</a></p>
                </div>
                <hr className="new" />
                <div className="formWrapper">
                    <div className="formContainer">
                        <form action="#">
                            <label htmlFor="anumber">Account Number</label> <br />
                            <input type="text" className="anumber" name="accountnumber" placeholder="Account number"/>
                            <div className="dropdown">
                                <div className="dropdown-btn">
                                    <label htmlFor="sbank">Select Bank</label> <br />
                                    <select className="sbank" name="Select Bank">
                                        <option value="select bank" className="sbankfield">Select Bank</option>
                                        <option value="first bank">First Bank</option>
                                        <option value="gtb">GTB</option>
                                        <option value="polaris">Polaris</option>
                                        <option value="first bank">First Bank</option>
                                        <option value="gtb">GTB</option>
                                        <option value="polaris">Polaris</option>
                                    </select>
                                </div>
                            </div>
                            <label>Account Name</label> <br />
                            <input type="text" placeholder="Account name"/>
                            <label>Amount</label> <br />
                            <input type="number" placeholder="Amount"/>
                            <label>Pin</label>
                            <input type="text" placeholder="Pin"/>
                            <label>Narration</label>
                        </form>
                        <form>
                            <textarea placeholder="message"></textarea>
                        </form>
                        <div className="btnContainer"><button type="submit" className="transferBtn">Send Money</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OtherBankTransfer