import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import UserTable from "./UserTable";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: ["nandha", "kumar", "viswa"],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;
        const formData = new FormData(formElement);
        const username = formData.get("InputName");
        const { userList } = this.state;
        userList.push(username);
        this.setState({
            userList,
        });
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-xs-offset-3">
                        <div class="row">
                            <div class="col-xs-12">
                                <UserTable userList={this.state.userList} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <form
                                    class="form-inline"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div class="form-group">
                                        <label for="InputName1">Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="InputName1"
                                            name="InputName"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        class="btn btn-default"
                                    >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
