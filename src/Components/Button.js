import {BiMessageSquareDetail} from "react-icons/bi"
import React from 'react'
import styles from "./button.module.css";
const Button = (props) => {
   console.log(props)
    return (
    <button className={styles.primary_btn}>
        <BiMessageSquareDetail fontSize="24px"/>
        {props.text}
    </button>
    
  )
}

export default Button