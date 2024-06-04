import React from 'react'
import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import white_arrow from '../../assets/right-arrow.png'

import { FaArrowRight } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "11212bd3-bfe4-497c-bcc0-cd13558a6c71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>نامەمان بۆ بنێرە</h3>
        <p>پەیوەندیمان پێوە بکەن بۆ هەر داواکاری و پرسیارێک لەلایەن ستافی پەیوەندیدارەوە وەڵام ئەدرێنەوە</p>
        <ul>
          <li><AiOutlineMail className='icon' />
            info@sadaqakrd.com</li>
          <li><AiOutlinePhone className='icon' />
            +964 775 472 6759</li>
        </ul>

        <div className="social">
          <ul >
            <li><a href="https://www.facebook.com/sadaqakrd" target="_blank"> <FaFacebookSquare className='icon-social' />
            </a> </li>
            <li> <a href="https://www.instagram.com/sadaqa_krd" target="_blank"> <FaInstagram className='icon-social'/>
            </a>   </li>

            <li> <a href="https://www.tiktok.com/@sadaqa_krd" target="_blank">    <FaTiktok className='icon-social'/>

            </a>  </li>

          </ul>
        </div>
      </div>

      <div className="contact-col">
        <form action="" className='form-contact' onSubmit={onSubmit}>
          <label htmlFor="">ناو</label>
          <input type="text" name='name' placeholder='Ex : ahmad' required />

          <label htmlFor="">ژمارە مۆبایل</label>
          <input type="tel" name='phone' placeholder='07700000000' required />

          <label htmlFor="">پەیام</label>

          <textarea name="message" rows='6' placeholder='پەیامەکەت لێرە بنوسە' id="" required></textarea>

          <button type='submit' className='btn dark-btn'>ناردن <FaArrowRight className='icon-right' /></button>
          <span>{result}</span>
        </form>
      </div>

    </div>
  )
}

export default Contact
