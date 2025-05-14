import React from 'react';

function Bai13() {
  function createImage(url, altText) {
    return <img src={url} alt={altText} />;
  }

  return (
    <div>
      <p>Bài 13:</p>
      {createImage(
        "https://uploads.nguoidothi.net.vn/content/f29d9806-6f25-41c0-bcf8-4095317e3497.jpg",
        "Ảnh React"
      )}
    </div>
  );
}

export default Bai13;
