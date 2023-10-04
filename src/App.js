import "./styles.css";
import UserList from "./data/UsersList";
import PostsList from "./data/PostsList";
import Directory from "./Components/Directory";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";
export default function App() {
  const [UserLists, setUserLists] = useState(UserList);
  const [PostList, setPostList] = useState(PostsList);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Directory UserLists={UserLists} PostList={PostList} />}
        ></Route>
        <Route
          path="/profile/:id"
          element={<ProfilePage UserLists={UserLists} PostList={PostList} />}
        />
      </Routes>
    </div>
  );
}
