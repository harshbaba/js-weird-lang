import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useRef,
  useReducer,
  useContext,
  createContext
} from "react";

// Create a context to test useContext
const ThemeContext = createContext("light");

// Reducer for useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "toggle":
      return { ...state, on: !state.on };
    default:
      return state;
  }
};

export default function LifecycleDemo() {
  console.log("🎨 Render start");

  // Basic state
  const [count, setCount] = useState(() => {
    console.log("🟢 useState initializer: count");
    return 0;
  });

  const [text, setText] = useState(() => {
    console.log("🟢 useState initializer: text");
    return "hello";
  });

  // useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0, on: true });
  console.log("🔴 useReducer state:", state);

  // useRef
  const renderRef = useRef(0);
  renderRef.current += 1;
  console.log("🟣 useRef render count:", renderRef.current);

  // useMemo
  const doubled = useMemo(() => {
    console.log("🔵 useMemo compute (depends on count)");
    return count * 2;
  }, [count]);

  const upperText = useMemo(() => {
    console.log("🔵 useMemo compute (depends on text)");
    return text.toUpperCase();
  }, [text]);

  // useCallback
  const handleIncrement = useCallback(() => {
    console.log("🟠 handleIncrement invoked");
    setCount((c) => c + 1);
  }, []);

  const handleToggle = useCallback(() => {
    console.log("🟠 handleToggle invoked");
    dispatch({ type: "toggle" });
  }, []);

  // useContext
  const theme = useContext(ThemeContext);
  console.log("🟤 useContext theme:", theme);

  // useLayoutEffect
  useLayoutEffect(() => {
    console.log("📐 useLayoutEffect (runs after DOM mutations, before paint)");
    return () => {
      console.log("🧹 Cleanup useLayoutEffect");
    };
  });

  // useEffect
  useEffect(() => {
    console.log("🌍 useEffect (runs after paint)");
    return () => {
      console.log("🧹 Cleanup useEffect");
    };
  });

  return (
    <div>
      <h2>React Lifecycle Demo (Advanced)</h2>
      <p>Count: {count} (Doubled: {doubled})</p>
      <p>Text: {text} (Upper: {upperText})</p>
      <p>Reducer Count: {state.count} | Toggle: {state.on ? "ON" : "OFF"}</p>
      <p>Theme: {theme}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={handleToggle}>Toggle Reducer</button>
      <button onClick={() => setText(text === "hello" ? "world" : "hello")}>
        Toggle Text
      </button>
    </div>
  );
}

//https://chatgpt.com/c/68d1aa4c-0698-8329-9bce-35c66377f94d