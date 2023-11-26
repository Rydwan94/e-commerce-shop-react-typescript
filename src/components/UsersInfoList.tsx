import {useContext} from 'react'
import { UsersContext } from '../context/Context';
import SingleUserInfo from "./SingleUserInfo";




const UsersInfoList = () => {


    const {usersList, setUsersList} = useContext(UsersContext)

    const handleDeleteUser = (id:number) => {
        const newData = usersList.filter(user => id !== user.id)
        setUsersList(newData)
    }

    const usersDataList = usersList.map(user => <SingleUserInfo key={user.id} {...user} handleDeleteUser={handleDeleteUser} />)
  return (
    <div>
        {usersDataList}
    </div>
  )
}

export default UsersInfoList