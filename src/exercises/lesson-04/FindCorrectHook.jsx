// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0);
  const buttonRef = useRef(null);

  function handleClick() {
    clickCount.current++;
    buttonRef.current.innerText = clickCount.current + ' Clicks';
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        0 Clicks
      </button>
    </div>
  );
}

//useState causes it to re-render so we use useRef update the count without re-rendering. To update the text without triggering a re-render we refrence the button and update the DOM using innerText in the handleClick function.
