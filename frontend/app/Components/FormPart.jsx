import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function FormPart() {

    const [message, setmessage] = useState({});
    const [status, setStatus] = useState(0);

    const submitForm = async (e) => {
        e.preventDefault();

        return (
            await setmessage((prev) => {
                axios.post("", {
                    ...prev, name: e.target.name.value,
                    email: e.target.email.value, phone: e.target.phone.value,
                    msg: e.target.msg.value
                }).then((res) => {
                    console.log(res.data);
                    console.log(res.status);
                    setStatus(res.status);
                })
                
                return {
                        ...prev, name: e.target.name.value,
                        email: e.target.email.value, phone: e.target.phone.value,
                        msg: e.target.msg.value
                    }
            })
        )
    }
    console.log(message);

  return (
      <div>
          <h3 className='text-2xl md:text-3-xl text-center mt-10 py-4 '>
              <span className='border-b-4 border-b-teal-600 py-2'>Submit Your Message</span>
          </h3>
          <form onSubmit={submitForm} className='flex flex-col justify-center items-center my-10' >
              <input type='text' name='name' placeholder='Enter Your Name' required className='text-teal-800  bg-teal-100 p-2 m-3 w-full md:w-1/2 border-none rounded-md placeholder-teal-800' />
              <input type='email' name='email' placeholder='Enter Your E-Mail' required className='text-teal-800 bg-teal-100 p-2 m-3 w-full md:w-1/2 border-none rounded-md placeholder-teal-800' />
              <input type='Phone' name='phone' placeholder='Enter Your Phone No' className='text-teal-800 bg-teal-100 p-2 m-3 w-full md:w-1/2 border-none rounded-md placeholder-teal-800' />
              <textarea name="msg" className='text-teal-800 bg-teal-100 p-2 m-3 w-full md:w-1/2 border-none rounded-md' ></textarea>
              <input type="submit" required className='text-teal-800 p-2 m-3 w-24 bg-teal-100 border-none rounded-md' />
          </form>

          {status ? <h1 className='absolute bottom-0 left-1/2' >Sucessfully submitted</h1> : "" }
    </div>
  )
}
