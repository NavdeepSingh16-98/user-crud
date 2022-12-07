import {useState} from 'react'
import axios from 'axios'

function Form(){

const [name,setName] = useState('');

const handleName = (event)=>{

setName(event.target.value);

}
const [email,setEmail] = useState('');

const handleEmail = (event)=>{

setEmail(event.target.value);

}

const submitData = async ()=>{

    const data = {
        name:name,
        email:email
    }
const options = {
    method:'POST',
    data:data
}
    const response = await axios('/create',options)

    alert(response.data.message);
}

const handleSubmit = (event)=>{
    event.preventDefault();
    alert('inside submit');

submitData();
}

    return(
<>
<div className="w-full flex justify-center">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs">
    <span className="text-gray-900 text-lg font-bold mb-3">Create User</span>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Name
      </label>
      <input onChange={handleName} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name here"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Email
      </label>
      <input value={email} onChange={handleEmail} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.com"/>
     
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    
    </div>
  </form>
 
</div>
</>

    )
}

export default Form