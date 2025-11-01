import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useRef,
  useId,
  useTransition,
  useDeferredValue,
  useInsertionEffect,
} from "react";

export default function LifecycleDemo() {
  console.log("🎨 Render start");

  const [count, setCount] = useState(() => {
    console.log("🟢 useState initializer");
    return 0;
  });

  const ref = useRef(null);
  console.log("📌 useRef executed");

  const id = useId();
  console.log("🆔 useId generated:", id);

  const [isPending, startTransition] = useTransition();
  console.log("⏳ useTransition setup");

  const deferredCount = useDeferredValue(count);
  console.log("🐢 useDeferredValue executed:", deferredCount);

  const memoizedValue = useMemo(() => {
    console.log("🧮 useMemo calculated");
    return count * 2;
  }, [count]);

  const memoizedCallback = useCallback(() => {
    console.log("⚡ useCallback executed");
    return count + 1;
  }, [count]);

  useInsertionEffect(() => {
    console.log("🎨 useInsertionEffect (before DOM mutations)");
  });

  useLayoutEffect(() => {
    console.log("📐 useLayoutEffect");
  }, [count]);

  useEffect(() => {
    console.log("🌍 useEffect");
    return () => console.log("🧹 Cleanup useEffect");
  }, [count]);

  console.log("✅ Render end");

  return (
    <div ref={ref}>
      <p id={id}>Count: {count}</p>
      <p>Double: {memoizedValue}</p>
      <p>Deferred Count: {deferredCount}</p>
      <p>Transition Pending: {isPending ? "Yes" : "No"}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button
        onClick={() =>
          startTransition(() => {
            console.log("🚀 Transition started");
            setCount((c) => c + 1);
          })
        }
      >
        Increment with Transition
      </button>
      <button onClick={memoizedCallback}>Callback</button>
    </div>
  );
}


//https://chatgpt.com/c/68c462da-3524-8322-913f-0693930518e0

/*
Excellent — let’s walk through it carefully.

We’ll trace the logs for:

Initial Mount

Update via normal setCount (Increment button)

Update via startTransition (Increment with Transition button)

🔹 1. Initial Mount
Render Phase

🎨 Render start
🟢 useState initializer
📌 useRef executed
🆔 useId generated: <id>
⏳ useTransition setup
🐢 useDeferredValue executed: 0
🧮 useMemo calculated
⚡ useCallback executed
✅ Render end


Commit Phase (effects run)
🎨 useInsertionEffect (before DOM mutations)
📐 useLayoutEffect
🌍 useEffect


🔹 2. Update via Normal State Update (setCount)
Render Phase

🎨 Render start
📌 useRef executed
🆔 useId generated: <same id as before>
⏳ useTransition setup
🐢 useDeferredValue executed: 1
🧮 useMemo calculated
⚡ useCallback executed
✅ Render end

Commit Phase
🎨 useInsertionEffect (before DOM mutations)
🧹 Cleanup useEffect
📐 useLayoutEffect
🌍 useEffect


🔹 3. Update via Transition (startTransition)

👉 When you click Increment with Transition, React schedules this update as non-urgent. That means:

React may delay rendering if there are higher priority updates.

isPending will be true during transition until commit.

Immediately (button click)

🚀 Transition started
Render Phase (async, when React decides to process it)

🎨 Render start
📌 useRef executed
🆔 useId generated: <same id as before>
⏳ useTransition setup
🐢 useDeferredValue executed: (still 1 for a short while, may lag)
🧮 useMemo calculated
⚡ useCallback executed
✅ Render end


🎨 Render start
📌 useRef executed
🆔 useId generated: <same id as before>
⏳ useTransition setup
🐢 useDeferredValue executed: (still 1 for a short while, may lag)
🧮 useMemo calculated
⚡ useCallback executed
✅ Render end

Commit Phase
🎨 useInsertionEffect (before DOM mutations)
🧹 Cleanup useEffect
📐 useLayoutEffect
🌍 useEffect

🔑 Key Learnings

useInsertionEffect always fires before useLayoutEffect.

useEffect cleanup runs before the new effect on updates.

useDeferredValue may temporarily lag behind count.

useTransition keeps UI responsive by marking updates as “low priority.”