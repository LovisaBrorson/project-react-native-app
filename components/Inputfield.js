import React, { useState } from "react"

const InputField = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <form>
      <label>What drink do you want?</label>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  )
}

export default InputField
