import logo from './logo.svg';
import './App.css';
import Button from "./BTTH/Button";
import ShowNameButton from "./BTTH/ShowNameButton";
import CounterButtons from "./BTTH/CounterButtons";
import ChildButton from "./BTTH/ChildButton";
import ProductButton from "./BTTH/ProductButton";
import FeedbackButtons from "./BTTH/FeedbackButtons";
import GenderSelector from "./BTTH/GenderSelector";
import NumberButton from "./BTTH/NumberButton";
import LabeledButton from "./BTTH/LabeledButton";
import NameInput from "./BTTH/NameInput";
import SearchInput from "./BTTH/SearchInput";
import {useState} from "react";
import PersonalForm from "./BTTH/PersonalForm";
import CountrySelector from "./BTTH/CountrySelector";
import HobbiesCheckbox from "./BTTH/HobbiesCheckbox";
import CountrySelector1 from "./BTTH/CountrySelector1";
import HobbiesSelector1 from "./BTTH/HobbiesSelector1";

function App() {

  //bài 4
  // const handleNotification = (message) => {
  //   alert(`Con vừa báo: ${message}`);
  // };

  // bài 5
  // const products = ['Chuột', 'Bàn phím', 'Màn hình', 'Tai nghe'];
  //
  // const handleProductSelect = (productName) => {
  //   alert(`Bạn đã chọn sản phẩm: ${productName}`);
  // };
    //bài 6
  // const handleFeedback = (type) => {
  //   alert(`Bạn đã chọn: ${type}`);
  // };

  // bài7
  // const handleGenderSelect = (gender) => {
  //   alert(`Bạn đã chọn giới tính: ${gender}`);
  // };


    // BÀI  9
  //   const handleButtonClick = (buttonNumber) => {
  //   alert(`Bạn đã nhấn nút số ${buttonNumber}`);
  // };

    //bài 10
  //   const handleButtonClick = (label) => {
  //   alert(`Bạn đã nhấn nút: ${label}`);
  // };

    // bài 11
  //   const handleNameChange = (name) => {
  //   console.log('Tên hiện tại:', name);
  // };

    //bài 12
  //   const products = ['Chuột', 'Bàn phím', 'Màn hình', 'Tai nghe', 'Loa'];
  //   const [searchTerm, setSearchTerm] = useState('');
  //
  // const handleSearch = (text) => {
  //   setSearchTerm(text);
  // };
  //
  // const filteredProducts = products.filter(product =>
  //   product.toLowerCase().includes(searchTerm.toLowerCase())
  // );

    // bài 13
  //   const [formData, setFormData] = useState({
  //   name: '',
  //   age: '',
  //   email: ''
  // });
  //
  // const handleFormChange = (changedField) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     ...changedField
  //   }));
  // };

    // bài 14
  //   const [greeting, setGreeting] = useState('');
  //
  // const greetingsMap = {
  //   VN: 'Xin chào!',
  //   US: 'Hello!',
  //   JP: 'Konichiwa',
  //   FR: 'Bonjour!'
  // };
  //
  // const handleCountrySelect = (code) => {
  //   setGreeting(greetingsMap[code] || '');
  // };

    // bài 15
  //    const hobbies = ['Đọc sách', 'Du lịch', 'Nấu ăn', 'Thể thao'];
  // const [selectedHobbies, setSelectedHobbies] = useState([]);
  //
  // const handleHobbiesChange = (selectedList) => {
  //   setSelectedHobbies(selectedList);
  // };

    // bài 16
  //   const [greeting, setGreeting] = useState('');
  //
  // const greetings = {
  //   VN: 'Xin chào!',
  //   US: 'Hello!',
  //   JP: 'konichiwa！',
  //   KR: 'ayeon!'
  // };
  //
  // const handleSelect = (countryCode) => {
  //   setGreeting(greetings[countryCode] || '');
  // };

    // bài 17
  //    const [selectedHobbies, setSelectedHobbies] = useState([]);
  //
  // const hobbiesList = ['Đọc sách', 'Nghe nhạc', 'Chơi game', 'Nấu ăn'];
  //
  // const handleHobbiesChange = (list) => {
  //   setSelectedHobbies(list);
  // };


  return (
      // bài 1
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <Button />
    // </div>

      // bài 2
      // <ShowNameButton name="hhehehehe" />


      // bài 3
      // <CounterButtons />


      // bài 4
      // <ChildButton onNotify={handleNotification} />

      // bài 5
    //     <div>
    //   {products.map((product, index) => (
    //     <ProductButton
    //       key={index}
    //       name={product}
    //       onSelect={handleProductSelect}
    //     />
    //   ))}
    // </div>

      // bài 6
      //   <FeedbackButtons onFeedback={handleFeedback} />

      // bài 7
      // <GenderSelector onSelectGender={handleGenderSelect} />

      // bafi9
  //     const handleButtonClick = (buttonNumber) => {
  //   alert(`Bạn đã nhấn nút số ${buttonNumber}`);
  // };

      //bài 9
      // <div>
      // <NumberButton number={1} onClick={handleButtonClick} />;
      // <NumberButton number={2} onClick={handleButtonClick} />;
      // <NumberButton number={3} onClick={handleButtonClick} />;
      //   </div>


      // bài 10
    //   <div>
    //   <LabeledButton label="Mở" onClick={handleButtonClick} />
    //   <LabeledButton label="Lưu" onClick={handleButtonClick} />
    //   <LabeledButton label="Xóa" onClick={handleButtonClick} />
    // </div>

      // bài 11
      // <NameInput onNameChange={handleNameChange} />

      // bài 12
    //   <div>
    //   <h1>Tìm kiếm sản phẩm</h1>
    //   <SearchInput onSearch={handleSearch} />
    //
    //   <ul>
    //     {filteredProducts.map((product, idx) => (
    //       <li key={idx}>{product}</li>
    //     ))}
    //   </ul>
    // </div>


      // bài 13
    //   <div>
    //   <h1>Form thông tin cá nhân</h1>
    //   <PersonalForm onChange={handleFormChange} />
    //   <h2>Thông tin đã nhập:</h2>
    //   <p>Tên: {formData.name}</p>
    //   <p>Tuổi: {formData.age}</p>
    //   <p>Email: {formData.email}</p>
    // </div>

      //bài 14
    //   <div>
    //   <h1>Chọn quốc gia</h1>
    //   <CountrySelector onSelectCountry={handleCountrySelect} />
    //   {greeting && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{greeting}</p>}
    // </div>

      // bài 15
    //   <div>
    //   <h1>Chọn sở thích</h1>
    //   <HobbiesCheckbox options={hobbies} onChange={handleHobbiesChange} />
    //
    //   <h2>Sở thích đã chọn:</h2>
    //   {selectedHobbies.length > 0 ? (
    //     <ul>
    //       {selectedHobbies.map((hobby, idx) => (
    //         <li key={idx}>{hobby}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Chưa chọn sở thích nào</p>
    //   )}
    // </div>

      // bài 16
    // <div>
    //   <h1>Chọn quốc gia</h1>
    //   <CountrySelector1 onSelect={handleSelect} />
    //   {greeting && <p style={{ marginTop: '20px' }}>{greeting}</p>}
    // </div>

      // bài 17
    //   <div>
    //     <h1>Chọn sở thích của bạn</h1>
    //   <HobbiesSelector1 options={hobbiesList} onChange={handleHobbiesChange} />
    //
    //   <h2>Sở thích đã chọn:</h2>
    //   {selectedHobbies.length > 0 ? (
    //     <ul>
    //       {selectedHobbies.map((hobby, idx) => (
    //         <li key={idx}>{hobby}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Chưa chọn sở thích nào</p>
    //   )}
    // </div>
  );
}

export default App;
