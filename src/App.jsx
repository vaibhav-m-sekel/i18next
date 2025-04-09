import LanguageSelector from "./components/language-selector";
import CompanyContent from "./components/CompanyContent";
import Posts from "./components/Posts";
import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSelector />
      <CompanyContent />
      <Posts />
    </div>
  );
};

export default App;
