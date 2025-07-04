function Clock({ time }) {
  const formattedTime = time.toLocaleTimeString();
  return <h2>Bây giờ là: {formattedTime}</h2>;
}

export default Clock;
