import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import counterReducer, { initialCounter } from "./counterReducer.tsx";
import Button from "./Button.tsx";
import { StateCounterContext, DispatchCounterContext, ThemeContext, AuthorContext } from "./Context.tsx";
import Modal from "./Modal.tsx";


export default function App() {
  //========================== STATE ==========================//
  // Reducer for app //
  const [stateCounter, dispatchCounter] = useReducer(counterReducer, initialCounter);

  // Time passed counter //
  const [time, setTime] = useState<number>(0);

  // Toogle pause or play //
  const [status, setStatus] = useState<"pause" | "play">("play");

  // Theme for app //
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Modal toogler //
  const [showModal, setShowModal] = useState<boolean>(false);

  // Ref for counter interval // 
  const countRef = useRef<number | null>(null);
  const timeRef = useRef<number | null>(null);

  // luyện tập forwardRef kết hợp với typescript //
  const modalRef = useRef<HTMLDivElement>(null); 

  // Modal Content //
  const author = "Nguyễn Tiến Thành";

  // -------------- INTERVAL FUNCTION -------------- //
  const setIntervalCount = useCallback((ref, dispatch): number => {
    ref.current = window.setInterval(() => {
      dispatch({
        type: "count",
        payload: stateCounter.amount
      })
    }, 1000);
    return ref.current;
  }, [stateCounter.amount]);

  //========================== FUNCTION ==========================//
  // -------------- TIME PASSED EFFECT -------------- //
  useEffect(() => {
    timeRef.current = window.setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    return () => clearInterval(timeRef.current!);
  }, [])

  // -------------- COUNTER EFFECT -------------- //
  useEffect(() => {
    countRef.current = setIntervalCount(countRef, dispatchCounter);
    return () => clearInterval(countRef.current!);
  }, [setIntervalCount]);

  // -------------- PAUSE/PLAY FUNCTION -------------- //
  function pause(): void {
    if (status === "play") {
      setStatus("pause")
      clearInterval(countRef.current!);
    } else {
      setStatus("play");
      countRef.current = setIntervalCount(countRef, dispatchCounter);
    }
  }

  // -------------- RESET FUNCTION -------------- //
  function reset(): void {
    clearInterval(countRef.current!);
    dispatchCounter({
      type: "reset",
    })
  }

  // -------------- INCREMENT/DECREMENT AMOUNT FUNCTION -------------- //
  function increase(): void {
    dispatchCounter({
      type: "increment",
      payload: 1
    });
  }
  function decrease(): void {
    dispatchCounter({
      type: "decrement",
      payload: -1
    });
  }

  // -------------- TOGGLE MODAL -------------- //
  function toogleModal(): void {
    setShowModal(modal => !modal);
  }

  return (
    <StateCounterContext.Provider value={stateCounter}>
      <DispatchCounterContext.Provider value={dispatchCounter}>
        <ThemeContext.Provider value={theme}>
          <div className="App container-fluid">
            <div className="box">
              <h1>Counter App</h1>
              <div className="number">{stateCounter.count}</div>
              <div className="box-amount">
                <span>Amount:</span>
                <input type="text" value={stateCounter.amount} readOnly />
              </div>
              <div className="box-btn">
                <Button content="Decrease" handleOnClick={decrease} />
                <Button content={status === "play" ? "Pause" : "Play"} handleOnClick={pause} />
                <Button content="Reset" handleOnClick={reset} />
                <Button content="Increase" handleOnClick={increase} />
              </div>
              <p className="time">Time passed: {time}s</p>
            </div>
            <button className="credit-btn" onClick={() => toogleModal()}>Modal</button>
            {showModal && (
              <AuthorContext.Provider value={author}>
                <Modal ref={modalRef} handleOnClick={toogleModal} />
              </AuthorContext.Provider> 
            )}
          </div>
        </ThemeContext.Provider>
      </DispatchCounterContext.Provider>
    </StateCounterContext.Provider>
  )
}