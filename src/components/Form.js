import React, {useState} from 'react'
import './Form.css';
const Form = () => {

  const [send,setSend] = useState(0);
  const [recieve,setRecieve] = useState(0);

  const handleRecieve = () => {
    let recieve_amount = send/97.09;
    console.log(recieve_amount);
    setRecieve(recieve_amount);
  }


  return (
    <div className="form">
        <div className="form-group">
            <label>Amount transferred this year?</label>
            <input type="text" />
        </div>
        <div className="currency-fields">
            <div className="form-group-2">
                <label>You send</label>
                <input type="number" value={send}
                onChange = {(e) => {
                  setSend(e.target.value);
                  handleRecieve();
                }}/>
            </div>
            <div className="form-select">
              <select>
                <option value="INR">INR</option>
              </select>
            </div>
    </div>
      <table>
          <tbody>
              <tr>
                <td className='grey-line'>-</td>
                <td>4456.00</td>
                <td>Our Fees</td>
              </tr>
              <tr>
                <td className='grey-line'></td>
                <td>495544.00</td>
                <td>Total Amount (Inc. GST)</td>
              </tr>
              <tr>
                <td className='grey-line'></td>
                <td>495544.00</td>
                <td>Amount we'll convert</td>
              </tr>
              <tr>
                <td className='grey-line'>/</td>
                <td>97.09</td>
                <td>Our Fees</td>
              </tr>
          </tbody>
      </table>
    <div className="currency-fields">
    <div className="form-group-2">
        <label>Recipient gets</label>
        <input type="text" value={recieve}/>
    </div>
    <div className="form-select">
      <select>
        <option value="INR">GBP</option>
      </select>
    </div>
</div>
    </div>
  )
}

export default Form