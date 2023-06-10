import { useEffect, useRef, useState } from "react";
import "./login.css";
import FormBox from "./FormBox";

function resetAnimation(ref) {
  let myPromise = new Promise((resolve) => {
    ref.current.style.animation = "none";
    setTimeout(() => {
      resolve("feedback-scale-animation .8s 2 alternate");
    }, 10)
  })
  myPromise.then((result) => ref.current.style.animation = result);
}

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Home");
  const feedbackRef = useRef(null);
  let usernameValid = /^[a-zA-Z0-9]{4,}$/.test(username);
  let passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  let isInValid;
  if (!usernameValid || !passwordValid) {
    isInValid = true;
  } else {
    isInValid = false;
  }

  function logIn(e) {
    e.preventDefault();
    if (isInValid === false) {
      setStatus("Fetching");
    } else {
      resetAnimation(feedbackRef);
    }
  }
  function logOut() {
    setUsername("");
    setPassword("");
    setStatus("Home");
  }

  useEffect(() => {
    let ignore = false;
    if (status === "Fetching") {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if (!ignore) {
            if (res.id) {
              setStatus("Logged in");
            } else {
              setUsername("");
              setPassword("");
              resetAnimation(feedbackRef);
              setStatus("Home");
            }
          }
        });
    }
    return () => ignore = true;
  }, [status, username, password])

  if (status !== "Logged in") {
    return (
      <div className="form">
        <form action="" className="form__content" onSubmit={(e) => logIn(e)}>
          <FormBox
            type="text"
            id="username"
            placeholder="ENTER USERNAME"
            value={username}
            handleOnChange={(e) => setUsername(e.target.value)}
            isValid={usernameValid}
            validText="(At least 4 characters or numbers)"
          />
          <FormBox
            type="password"
            id="password"
            placeholder="ENTER PASSWORD"
            value={password}
            handleOnChange={(e) => setPassword(e.target.value)}
            isValid={passwordValid}
            validText="(At least 6 characters and numbers)"
          />
          <div ref={feedbackRef} className={isInValid ? "feedback is__invalid" : "feedback is__valid"}>{isInValid ? "Please check your username and your password" : "Looks good"}</div>
          <div className={isInValid ? "form__button disable" : "form__button"}>
            <button type="submit" className="form__submit">LOG IN</button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="container">
        <div className="box">
          <h2>Welcome, {username}!</h2>
          <div className="form__button">
            <button onClick={() => logOut()}>Log out</button>
          </div>
        </div>
      </div>
    )
  }
}