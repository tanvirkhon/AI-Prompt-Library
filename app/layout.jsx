// Import styles
import "@styles/globals.css";

// Metadata
export const metadata = {
  title: "Promptmaster",
  description: "Promptmaster allows you discover and create AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
