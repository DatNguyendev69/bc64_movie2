import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Home Templates */}
          {/* Auth Templates */}
          <Route path="/auth" element={<AuthTemplate />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
