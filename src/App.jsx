import { Signup } from "./components/signup";
import { Home } from "./components/home/home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Blog } from "./components/good_chief/blog";
import { Contact } from "./components/Contact";
import { Header } from "./components/header";
import { Recipe } from "./components/recipe/recipe_page";
import { SearchPage } from "./components/search_page";
import "./style/root.scss";
import { Account } from "./components/account";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<SearchPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route index element={<Home />} />
        <Route path="/dish/:id" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
