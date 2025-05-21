import React from 'react';
import MenuItem from './MenuItem';

const menuList = ['Home', 'About', 'Contact'];

function MenuBar({ selected, onSelect }) {
  const renderContent = () => {
    switch (selected) {
      case 'Home':
        return <p>🏠 Đây là trang chủ.</p>;
      case 'About':
        return <p>ℹ️ Thông tin về chúng tôi.</p>;
      case 'Contact':
        return <p>📞 Liên hệ với chúng tôi.</p>;
      default:
        return <p>Chọn một mục để xem nội dung.</p>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {menuList.map((item) => (
          <MenuItem
            key={item}
            label={item}
            isSelected={item === selected}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
      <hr />
      <div>{renderContent()}</div>
    </div>
  );
}

export default MenuBar;
