import {useState,useEffect} from 'react'
import axios from 'axios'

function UserList(){

const [users,setUsers] = useState(null);
  async  function FetchUser(){
console.log('fetch user called');
        const options = {
            method:'GET'
        }
const {data} = await axios('/getUsers',options)

setUsers(data.users)

console.log('data',data);

    }



    useEffect(()=>{

       // alert('use')
       FetchUser();
    },[])

async function editUser(user,data){


    try{


   // debugger;
    const response = await axios.put(`/editUser/${user._id}`,data);

    alert(response.data.message);

    FetchUser();

    }catch(error){


    }



}

async function deleteUser(user){

    try{
const options = {
    method:'DELETE'
}

    const response = await axios(`/deleteUser/${user._id}`,options);

    alert(response.data.message);
    FetchUser();
}catch(error){

    console.log(error.message);
}

}
    const handleEdit = (user)=>{

        let name = prompt("Enter New Name");
        let email = prompt("Enter New Email")


        if(!name || !email){

            alert('please enter name and email both')
        }else{

        let data = { name,email};

        editUser(user,data);}


    }

    const handleDelete = (user) =>{

deleteUser(user);

    }

    return(
<>
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800 ">
            <tr >
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                S.No.
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Edit
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Delete
              </th>
            </tr>
          </thead >
          <tbody>

            {
                users && users.map((user,index)=>{

return(
    <tr className="bg-white border-b " key={user._id}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}</td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {user.name}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {user.email}
    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
<button type="button" onClick={()=>handleEdit(user)} className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>


    </td>
    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

<button type="button" onClick={()=> handleDelete(user)} className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>

    </td>

  </tr >

)


                })
            }
            
        
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default UserList