import React from 'react';

function Bai18(){
    function renderNumber(num) {
   <p>Số là: {num}</p>;
}
    return(
   <div>
    <p>Bài 18:</p>
    {renderNumber(5)}
    {renderNumber(20)}
  </div>
    );
}
export default Bai18;