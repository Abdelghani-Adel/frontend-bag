const SplitScreen = (props) => {
  const leftWeight = props.leftWeight || 1;
  const rightWeight = props.rightWeight || 1;
  const [Left, Right] = props.children;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: `${leftWeight}` }}>{Left}</div>

      <div style={{ flexGrow: `${rightWeight}` }}>{Right}</div>
    </div>
  );
};

export default SplitScreen;
