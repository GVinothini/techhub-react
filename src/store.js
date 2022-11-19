import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: function (state, action) {
        const { userList } = state;
        switch (action.type) {
            case "ADD_USER":
                return {
                    userList: [...userList, action.payload],
                };
        }
        return state;
    },
    preloadedState: {
        userList: ["nandha", "kumar", "viswa"],
    },
});

export default store;
