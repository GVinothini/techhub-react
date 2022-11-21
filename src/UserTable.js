import { Component } from "react";

export default class UserTable extends Component {
    render() {
        const userList = this.props.userList;
        const userListTemplate = [];
        for (let i = 0; i < userList.length; i++) {
            userListTemplate.push(
                <tr key={`${i}${userList[i]}`}>
                    <th scope="row">{i}</th>
                    <td>{userList[i]}</td>
                </tr>
            );
        }
        return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>{userListTemplate}</tbody>
            </table>
        );
    }
}
