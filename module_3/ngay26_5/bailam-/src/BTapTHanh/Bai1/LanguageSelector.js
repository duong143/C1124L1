function LanguageSelector({ setLanguage }) {
  return (
    <div>
      <button onClick={() => setLanguage("vi")}>Tiếng Việt 🇻🇳</button> <br/>
      <button onClick={() => setLanguage("en")}>English 🇺🇸</button>
    </div>
  );
} export default LanguageSelector;
