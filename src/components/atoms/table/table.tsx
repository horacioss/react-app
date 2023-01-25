import React, {useEffect, useState} from 'react'
import getUsersList from '../../../services/get-users/get-users';
import { User } from '../../../utils/interfaces/user';
import './table.scss';

const Table = () => {
  
  const [users, setUsers] = useState<User[]>([])
  

  return (
    <table className='custom-table'>
      <thead>
        <tr className='light'>
          <th className='align-left'>Provider</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds Futterkiste</td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Maria Anders</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;
