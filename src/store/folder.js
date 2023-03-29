import axios from "@/axios";


const folder = {
    state() {
        return {
            folderList: [],
            fileList: [],

        }
    },
    getters: {
        getFolderList(state) {
            return state.folderList
        },
        getFileList(state) {
            return state.fileList;
        },
    },
    actions: {
        addNewFolder(context, param) {
            axios.put('folders', param, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(e => {
                context.dispatch('loadFolder', param.parent)
            })
        },
        removeFolder(context, param) {
            axios.delete(`folders/${param.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(res => {
                context.dispatch('loadFolder', {parent: param.parent})
            })
        },
        removeFile(context, param) {
            axios.delete(`folders/file/${param.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(e => {
                context.dispatch('loadFolder', {parent: param.parent})
            })
        },
        editFolderName(context, param) {
            axios.patch('folders', param, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                }
            ).then(res => {
                context.dispatch('loadFolder', param.parent)
            })

        },
        loadFolder(context, param) {
            axios.get(`folders?parent=${param.parent}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(res => {
                context.commit('updateFolderList', res.data.folders)
                context.commit('updataFileList', res.data.files)
            })
        },
        uploadFile(context, data) {
            axios.post('folders/file', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(res => {
                context.dispatch('loadFolder', {parent: Object.fromEntries(data.entries()).folder_id})
            })
        }
    },
    mutations: {
        updateFolderList(state, data) {
            state.folderList = data
        },
        updataFileList(state, data) {
            state.fileList = data;
        },

    }
}

export default folder;