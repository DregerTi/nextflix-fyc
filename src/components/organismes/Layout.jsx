const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex min-h-screen flex-col items-center">
                { children}
            </main>
        </div>
    );
};

export default Layout;