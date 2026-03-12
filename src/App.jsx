import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

import AboutUs from "./component2/AboutUs.jsx";
import Solutionspopup from "./Soutionpopup/Solutionspopup.jsx";

import Footer from "./components/Footer.jsx";
import Main_SolutionIms from "./Solutions/Ims/Main_SolutionIms.jsx";
import Main_SolutionLms from "./Solutions/Lms/Main_SolutionLms.jsx";
import Main_SolutionHrms from "./Solutions/Hrms/Main_SolutionHrms.jsx";
import Main_SolutionSms from "./Solutions/Sms/Main_SolutionSms.jsx";
import Main_SolutionChatApp from "./Solutions/ChatApp/Main_SolutionChatApp.jsx";
import Main_SolutionHms from "./Solutions/Hms/Main_SolutionHms.jsx";
import Inside_Blogs from "./Insight_Blogs/Inside_Blogs.jsx";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs/>} />
  <Route path="/solutions/ims" element={<Main_SolutionIms/>} />
    <Route path="/solutions/lms" element={<Main_SolutionLms/>} />
      <Route path="/solutions/hms" element={<Main_SolutionHms/>} />
        <Route path="/solutions/hrms" element={<Main_SolutionHrms/>}/>
          <Route path="/solutions/sms" element={<Main_SolutionSms/>} />
            <Route path="/solutions/chatapp" element={<Main_SolutionChatApp/>} />
              <Route path="/insightsblogs" element={<Inside_Blogs/>}/>
      </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;