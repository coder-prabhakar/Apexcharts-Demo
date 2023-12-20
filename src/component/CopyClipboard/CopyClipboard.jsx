import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";

export default function CopyClipboard() {

  const [state, setState] = useState("");

  return (
    <div>
        <input value={state.value} onChange={({target: {value}}) => setState({value})} />

        <CopyToClipboard text={state.value}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
  )
}
