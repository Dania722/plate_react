import {  Box , Grid } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import Albums from "../../pages/subpages/albums";
import Comments from "../../pages/subpages/comments";
import InputValue from "../../pages/subpages/inputValue";
import Photos from "../../pages/subpages/photos";
import Posts from "../../pages/subpages/posts";
import ShowDetail from "../../pages/subpages/showDetail";
import Todos from "../../pages/subpages/todos";
import Users from "../../pages/subpages/users";

function All()
{
    return(
<>

        <Box>
        <Grid container>
          <Grid md={2}></Grid>
          <Grid md={10}>
            <Routes>
              <Route exact  path="albums" element={<Albums/>} />
              <Route path="/comments" element={<Comments/>} />
              <Route path="/inputValue" element={<InputValue/>} />
              <Route path="/photos" element={<Photos/>} />
              <Route path="/posts" element={<Posts/>} />
              <Route path="/showDetail" element={<ShowDetail/>} />
              <Route path="/todos" element={<Todos/>} />
              <Route path="/users" element={<Users/>} />
            </Routes>
          </Grid>
        </Grid>
      </Box>

</>
    )
}
export default All;