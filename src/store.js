import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: function (state, action) {
        let { userList } = state;
        switch (action.type) {
            case "ADD_USER": {
                return {
                    userList: [...userList, action.payload],
                };
            }
            case "DELETE_USER": {
                const tempList = [...userList];
                tempList.splice(action.payload, 1);

                return {
                    userList: [...tempList]
                }
            }
            default:
                return {
                    userList
                }
        }
    },
    preloadedState: {
        userList: ["nandha", "kumar", "viswa"],
    },
});

export default store;
