import {createStore} from "vuex";
import chat from "./chat";
import axios from "@/axios";
import folder from "./folder";
import query from "axios";
import router from "@/router";

const store = createStore({
    state() {
        return {
            user: {},
            user_list: [],
            roles: [],
            current_user: {},
            permis: {},
            role_permis: {},
            tasks_all: {},
            tasks_tome: {},
            tasks_from: {},
            is_auth: true,
        };
    },
    getters: {
        isAuth(state) {
            return state.is_auth;
        },
        getServerDomain() {
            return "https://api.drive-service.uz/";
        },
        getUser(state) {
            return state.user;
        },
        getUserList2(state) {
            return state.user_list;
        },
        getRoles(state) {
            return state.roles;
        },
        getCurrentUser(state) {
            return state.current_user;
        },
        getPermissions(state) {
            return state.permis;
        },
        getRolePermis(state) {
            return state.role_permis;
        },
        getTasksAll(state) {
            return state.tasks_all;
        },
        getTasksToMe(state) {
            return state.tasks_tome;
        },
        getTasksFromMe(state) {
            return state.tasks_from;
        },
    },
    mutations: {
        updateUser(state, data) {
            state.user = data;
        },
        updateUserList2(state, data) {
            state.user_list = data;
        },
        updateRoleList(state, data) {
            state.roles = data;
        },
        updateCurrentUser(state, data) {
            state.current_user = data;
        },
        updatePermis(state, data) {
            state.permis = data;
        },
        updateRolePermis(state, data) {
            state.role_permis = data;
        },
        updateTasksAll(state, data) {
            state.tasks_all = data;
        },
        updateTasksToMe(state, data) {
            state.tasks_tome = data;
        },
        updateTasksFromMe(state, data) {
            state.tasks_from = data;
        },
        updateAuth(state, data) {
            state.is_auth = data;
        },
    },
    actions: {
        loadUser(context) {
            axios.post("current-user", {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                context.commit("updateUser", res.data.data);
            });
        },
        loadUserList2(context, params) {
            axios.get(`user-list?page=${params.page}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                context.commit("updateUserList2", res.data);
            });
        },
        loadRoles(context) {
            axios.get("role", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                context.commit("updateRoleList", res.data.data);
            });
        },
        deleteUser(context, params) {
            axios.delete(`user/${params}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                context.dispatch("loadUserList2", {page: 1});
            });
        },
        logIn(context, params) {
            axios.post("auth/login", params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }).then((res) => {
                localStorage.setItem("token", res.data.access_token);
                router.push({name: "admin-dashboard"});
            });
        },
        loadCurrentUser(context) {
            axios.post("current-user",{}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
                .then((res) => {
                    console.log("hihhi")
                    context.commit("updateAuth", true);
                    context.commit("updateCurrentUser", res.data.data);
                })
                .catch((e) => {
                    console.log("hahah")
                    context.commit("updateAuth", false);
                    localStorage.removeItem("token");
                });
        },
        addNewRole(context, param) {
            axios.put("role", {name: param}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.dispatch("loadRoles");
            });
        },
        // loadPermissions(context){
        //     axios.get('permission').then(res=> {
        //         context.commit('updatePermis', res.data);
        //     });
        // },
        loadRolePermis(context, params) {
            axios.get(`role/permission?id=${params.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.commit("updateRolePermis", res.data);
            });
        },
        changeRolePermis(context, params) {
            axios.patch("role/permission", {
                role_id: params.role_id,
                permissions: params.permissions,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                // context.dispatch('loadRolePermis', res.data);
            });
        },
        changeRoleName(context, params) {
            axios.patch("role", {
                id: params.id,
                name: params.name,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.dispatch("loadRoles", res.data.data);
            });
        },
        deleteRole(context, param) {
            axios.delete(`role/${param.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.dispatch("loadRoles", res.data);
            });
        },
        loadTasksAll(context, params) {
            axios
                .get(`task?page=${params.page}&limit=${params.limit}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                .then((res) => {
                    context.commit("updateTasksAll", res.data);
                });
        },
        loadTasksToMe(context, params) {
            axios
                .get(`task/to-me?page=${params.page}&limit=${params.limit}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                .then((res) => {
                    context.commit("updateTasksToMe", res.data);
                });
        },
        loadTasksFromMe(context) {
            axios.get("task/from-me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.commit("updateTasksFromMe", res.data);
            });
        },
        addNewTask(context, param) {
            axios.post("task", param, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.dispatch("loadTasksFromMe");
            });
        },
        deleteTask(context, params) {
            axios.delete(`task/${params}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then((res) => {
                context.dispatch("loadTasksFromMe", res.data);
            });
        },
    },
    modules: {
        chat,
        folder,
    },
});

export default store;
