import LanguageSelector from "./components/language-selector";
import CompanyContent from "./components/CompanyContent";
import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSelector />
      <CompanyContent />
    </div>
  );
};

export default App;
