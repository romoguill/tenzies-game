function Die(props) {
  return (
    <div
      className={`Die ${props.isHeld && 'isHeld'}`}
      onClick={() => props.handleClick(props.id)}
    >
      <h2>{props.value}</h2>
    </div>
  );
}

export default Die;
