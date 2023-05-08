// Import styles
import "@styles/globals.css";

// Import Navbar component
import Nav from "@components/Nav";
// Import Provider component
import Provider from "@components/Provider";

// Metadata
export const metadata = {
  title: "Promptmaster",
  description: "Promptmaster allows you discover and create AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
