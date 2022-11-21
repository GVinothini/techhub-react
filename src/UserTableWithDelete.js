import { useState, useEffect } from "react";

const UserTable =(props)=> {
    const [userList, setUserList] = useState([]);

        useEffect(()=>{
            const userListTemplate = props.userList.map((userName,index)=> ({
                id: `${index}${userName}`,
                name: userName,
                readwrite: false
            }));
            setUserList(userListTemplate);
        }, [props]);

        const toggleReadWriteMode = (index)=>{
            userList[index].readwrite = !userList[index].readwrite;
            setUserList([...userList]);
        }

        const deleteUser = (index) => {
            if(userList[index].readwrite) {
                props.deleteUser(index);
            } else {
                alert('Enable readWrite mode to delete');
            }
        }

    return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user,index)=>(
                        <tr key={user.id}>
                            <th scope="row">{index}</th>
                            <td>{user.name}</td>
                            <td><button type='button' onClick={()=> toggleReadWriteMode(index)}>{user.readwrite ? 'Make ReadOnly' : 'Make ReadWrite'}</button></td>
                            <td><button type='button' onClick={()=> deleteUser(index)}>Delete</button></td>
                        </tr>
                ))}
                </tbody>
            </table>
        );
}

export default UserTable;