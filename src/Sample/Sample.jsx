import React from 'react'

function Sample() {
  const [state, setState] = React.useState();
  return (
    <>
     <div>Sample</div>
     <input name='username' value={state} onClick={(e)=>setState(e.target.value)} />
    </>
  )
}

export default Sample;