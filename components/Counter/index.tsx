import { startTransition, useActionState, useOptimistic } from "react";
const Counter = () => {
  const [count, increment, isPending] = useActionState(async (currentCount: number) => {
    addOptimistic(1);
    return currentCount + 1;
  }, 0);

  const [displayCount, addOptimistic] = useOptimistic(count, (currentCount: number, optimisticValue: number) => {
    return currentCount + optimisticValue;
  });

  const handleClick = () => {
    startTransition(increment);
  };
  return (
    <div>
      <h2>{displayCount}</h2>
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
