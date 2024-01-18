import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
          <Header/>
          <main className="flex min-h-screen flex-col items-center">
              { children}
          </main>
          <Footer />
        </div>
    );
};

export default Layout;