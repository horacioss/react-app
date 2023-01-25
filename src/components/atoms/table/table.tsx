import { useEffect, useState } from 'react'
import { getUsersList } from '../../../services/get-users/get-users';
import { User } from '../../../utils/interfaces/user';
import './table.scss';

const Table = () => {
  
  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    getUsersList(setUsers);
  },[]);

  return (
    <table className='custom-table'>
      <thead>
        <tr className='light'>
          <th className='align-left'>Id</th>
          <th className='align-left'>First Name</th>
          <th className='align-left'>Last Name</th>
          <th className='align-left'>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) =>
            <tr key={user.id} >
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr> 
          )
        }
      </tbody>
    </table>
  )
}

export default Table;
