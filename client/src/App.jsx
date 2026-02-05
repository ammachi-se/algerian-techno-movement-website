import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Podcasts from "./pages/Podcasts";
import Label from "./pages/Label";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="label" element={<Label />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cookies" element={<CookiePolicy />} />
      </Route>
    </Routes>
  );
}
