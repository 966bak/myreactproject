import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./projects/todo/Todo";
import Ecommerce from "./projects/e-commerce/Ecommerce";
import Dashboard from "./projects/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="todo" element={<Todo />}></Route>
        <Route path="ecommerce/*" element={<Ecommerce />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
