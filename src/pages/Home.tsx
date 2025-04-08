import { useState } from "react";
import AuthPopup from "../components/AuthPopup";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);

  return (
    <>
      <MainLayout
        onLoginClick={() => setAuthMode("login")}
        onSignupClick={() => setAuthMode("signup")}
      >
        {/* Page-specific content goes here */}
        <div className="text-center text-lg mt-10">Welcome to Local Farm!</div>
      </MainLayout>

      {authMode && (
        <AuthPopup mode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </>
  );
};

export default Home;
