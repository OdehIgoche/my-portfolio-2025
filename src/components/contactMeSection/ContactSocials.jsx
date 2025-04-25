import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const ContactSocials = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial Link ='#' Icon={FiGithub } />
      <SingleContactSocial Link ='#' Icon={FaLinkedinIn} />
      <SingleContactSocial Link ='#' Icon={FaInstagram } />
    </div>
  )
}

export default ContactSocials