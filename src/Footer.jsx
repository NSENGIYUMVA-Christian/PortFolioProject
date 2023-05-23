import React from 'react'
import {FaBars} from "react-icons/fa";
import {links,social} from "./data"

const year = new Date().getFullYear()

const Footer = () => {
  return (
    
    <footer className="footer">
     
    <p>
      <span className="nowrap">Copyright &copy; {year} </span>
      <span className="nowrap">ChrisDev</span>
    </p>
   
  </footer>
  )

}

export default Footer