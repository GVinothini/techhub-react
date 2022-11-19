import { Component } from "react";

export default class UserTable extends Component {
    render() {
        return (
            <table class="table table-condensed">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
