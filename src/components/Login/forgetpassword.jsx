import React from 'react';
import { GiPadlock } from "react-icons/gi";


export const forgetpassword = () => {
  return (
    <div className='container'>
        <form className='form'>
            <h4>password reset</h4>
            <div className='form-input'>
            <div className="padlock-field">
                <label htmlFor="EMAIL"></label>
                <input type="text" name='id' className='EMAIL' />
                <GiPadlock className="padlock" />
                </div>
                </div>
                


                <div className="send">
          <button type="submit" className="submit">
            enter 
          </button>
          <div className="login">
            lost password?<span>click-here</span>
          </div>
        </div>
      </form>
    </div>
  );
};
export default forgetpassword;





















       