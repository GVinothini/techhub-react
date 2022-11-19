import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import UserTable from "./UserTable";

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-xs-offset-3">
                        <div class="row">
                            <div class="col-xs-12">
                                <UserTable />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <form class="form-inline">
                                    <div class="form-group">
                                        <label for="InputName1">Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="InputName1"
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
