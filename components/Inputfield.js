import React, { useState } from "react"

const InputField = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <form>
      <label>🔎</label>
      <input
        placeholder='What drink do you want?'
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default InputField
