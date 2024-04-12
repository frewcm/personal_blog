import Archive from "./routes/Archive";
import Best from "./routes/Best";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Footer from "./components/Footer";
import Admin from "./routes/Admin";
import Register from "./routes/Register";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import CreatePost from "./components/CreatePost";
import GetAllPosts from "./components/GetAllPosts";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import PostPage from "./routes/PostPage";
import UpdatePost from "./routes/UpdatePost";

function App() {
  return (
    <div className="text-primary">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="best" index element={<Best />} />
          <Route path="about" element={<About />} />
          <Route path="archive" element={<Archive />} />
          <Route path="/posts/:id" element={<PostPage />} />
          {/* protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="create-post" element={<CreatePost />} />
              <Route path="posts" element={<GetAllPosts />} />
            </Route>
          </Route>
          <Route path="/admin/posts/:id/update" element={<UpdatePost />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
