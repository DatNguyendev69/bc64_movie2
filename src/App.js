import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/LoginPage";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ScreenPage from "./pages/ScreenPage/ScreenPage";
import Loading from "./components/Loading/Loading";
import CheckUser from "./HOC/CheckUser";
import Responsive from "./components/DemoResponsive/Responsive";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Loading />
        <Responsive />
        <Routes>
          {/* Home Templates */}
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<HomePage />} />
            <Route path="detail-movie/:idMovie" element={<DetailPage />} />
            <Route
              path="screen/:maLichChieu"
              element={
                <CheckUser>
                  <ScreenPage />
                </CheckUser>
              }
            />
          </Route>
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
