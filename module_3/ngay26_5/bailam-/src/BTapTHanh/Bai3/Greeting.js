function Greeting({ time }) {
  const hour = time.getHours();

  let greeting = "";
  if (hour < 12) {
    greeting = "Chào buổi sáng ";
  } else if (hour < 18) {
    greeting = "Chào buổi trưa ️";
  } else {
    greeting = "Chào buổi tối ";
  }

  return <h3>{greeting}</h3>;
}

export default Greeting;
