import React, {useState} from "react";

function Toggle() {
  const [status, setStatus] = useState(false)

  function useClick() {
    setStatus(status => !status)
  }

  const color = status ? 'red' : 'white'
    

  return <button onClick={useClick} style={{background: color}}>{status ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
