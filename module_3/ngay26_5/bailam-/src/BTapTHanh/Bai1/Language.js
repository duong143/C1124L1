import {useState, useEffect} from "react";
import LanguageSelector from "./LanguageSelector";
import GreetingText from "./GreetingText";

function Language() {
  const [language, setLanguage] = useState("vi");
  const [greeting, setGreeting] = useState("en");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (language === "vi") {
        setGreeting("Xin chào Việt Nam ây hehehe ");
      } else {
        setGreeting(" hello how r you hhahahaha");
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [language]);

  return (
    <div>
      <h1>Thay đổi ngôn ngữ</h1>
      <LanguageSelector setLanguage={setLanguage} />
      <GreetingText greeting={greeting} />
    </div>
  );
}

export default Language;