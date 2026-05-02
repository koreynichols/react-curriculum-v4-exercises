// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// The problem was that there was no cleanup function. StrictMode helps identify the bug by running the effect twice (mount -> unmount -> mount). The timer from the first mount keeps going after the unmount because it isn't cleared. When it mounts again it creates a second timer causing the count to increment twice as fast. The cleanup function fixes this by clearing the timer when it unmounts.
