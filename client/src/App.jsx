import { useState } from 'react'

function App() {

  const [state, setState] = useState({
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0
  })

  function handler(e) {
    //console.log(e.target.name, e.target.value)
    const {name, value} = e.target
    setState({...state, [name]: value})
    //setState(previousState => ({...previousState, [name]: value }))
  }

  function createAndDownloadPdf() {
    console.log(state)
  }

  return (
    <div>
      <input type="text" placeholder='name' name='name' onChange={handler} />
      <input type="number" placeholder='receipt id' name='receiptId' onChange={handler} />
      <input type="number" placeholder='price 1' name='price1' onChange={handler} />
      <input type="number" placeholder='price 2' name='price2' onChange={handler} />
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  )
}

export default App