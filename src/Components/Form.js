import React from 'react'
import Button from './Button'
import {BiMessageSquareDetail} from "react-icons/bi"
import styles from "./form.module.css"
import {AiOutlinePhone} from "react-icons/ai"
const Form = () => {
  
  
  
  return (
    <section className={styles.container}> 
        <div>
        <button className={styles.first_btn} > { <BiMessageSquareDetail width="24px" height="24px"/>}VIA SUPPORT CHAT</button>
         <button className={styles.sec_btn}> { <AiOutlinePhone/>}VIA CALL</button>
        </div>
        <form>
          <div className={styles.form_ctrl}>
            <label htmlFor='name'>Name</label>
            <input type='text'name="name"></input>
          </div>
        </form>
        
    </section>
  )
}

export default Form