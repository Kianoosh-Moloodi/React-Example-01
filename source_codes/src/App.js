import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IndexUser from "./pages/users/Index";
import ShowUser from "./pages/users/Show";
import IndexPost from "./pages/posts/Index";
import ShowPost from "./pages/posts/Show";
import CreatePost from "./pages/posts/Create";
import EditPost from "./pages/posts/Edit";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<IndexUser />} />
        <Route path="/users/:userId" element={<ShowUser />} />
        <Route path="/posts" element={<IndexPost />} />
        <Route path="/posts/:postId" element={<ShowPost />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/posts/edit/:postId" element={<EditPost />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
