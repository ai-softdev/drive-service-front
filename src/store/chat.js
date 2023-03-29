import axios from '../axios'


const chat = {
    state(){
        return{
            userList:[],
            messages:[],
        }
    },
    mutations:{

        updateUserList(state, data){
            state.userList = data;
        },
        updateMessages(state, data){
            state.messages = data
        },
        addMessage(state, data){
            state.messages.push(data)
        }

    },
    actions:{
        reciveMessage(context, message){
            context.commit("addMessage", message)
        },
        sendMessage(context, data){

        },

        loadUserList(context){
            axios.get('chat/user-list', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
                .then(res=>{
                    context.commit('updateUserList', res.data.data)
                })
        },
        loadMessages(context, par){
            axios.get(`/chat/${par.reciver}?page=${par.page}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
                .then(res=>{
                    context.commit("updateMessages", res.data.data)
                })
        }
    },
    getters:{
        getUserList(state) {
            return state.userList
        },
        getMessages(state){
            return state.messages
        },

    }
}

export default chat;