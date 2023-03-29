import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import Admin from "@/views/Admin.vue";
import Main from "@/views/admin/Main.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import Chat from "@/views/admin/Chat.vue";
import FileManager from "@/views/admin/FileManager.vue";
import FileManagerList from "@/views/admin/FileManagerList.vue";
import FileDetails from "@/views/admin/FileDetails.vue";
import Tables from "@/views/admin/Tables.vue";
import TablesPerson from "@/views/admin/TablesPerson.vue";
import TableRoles from "@/views/admin/TableRoles.vue";
import Tasks from "@/views/admin/Tasks.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [
        {
          path: "dashboard",
          name: "admin-dashboard",
          component: Dashboard,
        },
        // {
        //   path: "dashboard",
        //   name: "admin-dashboard",
        //   component: Dashboard,
        // },
        {
          path: "chat",
          name: "admin-chat",
          component: Chat,
        },
        {
          path: "file-manager/:folder",
          name: "admin-filemanager",
          component: FileManager,
        },
        {
          path: "file-managerlist",
          name: "admin-filemanagerlist",
          component: FileManagerList,
        },
        {
          path: "file-details",
          name: "admin-filedetails",
          component: FileDetails,
        },
        {
          path: "tables",
          name: "admin-tables",
          component: Tables,
        },
        {
          path: "tables-persons",
          name: "admin-persons",
          component: TablesPerson,
        },
        {
          path: "tables-roles",
          name: "admin-roles",
          component: TableRoles,
        },
        {
          path: "tasks",
          name: "admin-tasks",
          component: Tasks,
        },
      ],
    },
  ],
});

export default router;
