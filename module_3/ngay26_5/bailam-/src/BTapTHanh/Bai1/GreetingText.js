function GreetingText({ greeting }) {
  return <h2>{greeting ? greeting : "Đang tải lời chào..."}</h2>;
}

export default GreetingText;
