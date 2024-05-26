import { useEffect, useRef, useState } from "react";
import "./style.css";

export const Auth = () => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState();

  function handleOnChange(e) {
    setInputValue(e.target.value);
    if (e.target.value === "8585") {
      localStorage.setItem("auth", 1);
      window.location.reload();
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.click();
  }, []);

  return (
    <div className="auth">
      <img src="/security.svg"></img>
      <input
        className="authInput"
        ref={inputRef}
        value={inputValue}
        onChange={handleOnChange}
        type="text"
        placeholder="Enter passcode"
      ></input>
    </div>
  );
};

export default Auth;
