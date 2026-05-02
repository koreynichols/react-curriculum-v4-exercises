export default function Child({ callIncrement }) {
  return <button onClick={() => callIncrement()}>Increment Counter</button>;
}
