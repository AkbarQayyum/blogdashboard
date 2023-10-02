import React from "react";

import Dashboard from "../Pages/Dashboard/Dashboard";

import UseContainer from "../Pages/UserContainer/UserContainer";
import Blogs from "../Pages/Blogs/Blogs";
import CreateBlogs from "../Components/Blogs/CreateBlogs";
export const AdminRoutes = [
  {
    path: "/",
    component: (
      <UseContainer activePage={<Dashboard />} headerTitle={"Dashboard"} />
    ),
  },

  {
    path: "/blogs",
    component: (
      <UseContainer
        activePage={<Blogs />}
        headerTitle={"Blogs"}
        buttons={[
          {
            content: "Create Blogs",
            Path: "/create/blogs",
          },
        ]}
      />
    ),
  },
  {
    path: "/create/blogs",
    component: (
      <UseContainer
        activePage={<CreateBlogs />}
        disableTitleBar={true}
        headerTitle={"Create Blogs"}
        buttons={[]}
      />
    ),
  },
];
