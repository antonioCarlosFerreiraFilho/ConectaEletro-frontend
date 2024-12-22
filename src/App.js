//react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Article from "./pages/Article/Article";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Search from './pages/Search/Search';
//components
import InfoTopHeader from "./components/InfoTopHeader/InfoTopHeader";
import NavBar from "./components/NavBar/NavBar";
import Loading from "./components/Loading/Loading";
import PageNotFound from "./components/PageNotFound/PageNotFound";
//hook authUser
import { useAuth } from "./hooks/useAuth";

function App() {

  const { auth, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <InfoTopHeader />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/search" element={<Search />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/auth" element={!auth ? <Auth /> : <Navigate to="/" />} />
          <Route path="/profile" element={auth ? <Profile /> : <Navigate to="/" />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
