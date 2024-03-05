import { useState } from 'react'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { BACKEND_URL } from './global'


function App() {

  const [state, setState] = useState({
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
    price3: 0
  })

  function handler(e) {
    //console.log(e.target.name, e.target.value)
    const { name, value } = e.target
    setState({ ...state, [name]: value })
    //setState(previousState => ({...previousState, [name]: value }))
  }

  async function createAndDownloadPdf(e) {
    //console.log(state)
    await axios.post(`${BACKEND_URL}/create-pdf`, state, {
      headers: { 'Access-Control-Allow-Origin': '*' } 
    })
      .then(() => axios.get(`${BACKEND_URL}/fetch-pdf`, { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
        saveAs(pdfBlob, 'receipt.pdf')
      })
      .catch((err) => console.log(err))
  }

  const styles = {
    container: {
      maxWidth: 400,
      margin: '50px auto',
      padding: 30,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: 5,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      fontSize: 16,
      border: '1px solid #ccc',
      borderRadius: 5,
    },
    buttonContainer: {
      textAlign: 'center',
    },
    button: {
      padding: '12px 24px',
      fontSize: 16,
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }
  };


  return (
    <div style={styles.container}>
      <div style={styles.inputGroup}>
        <input style={styles.input} type="text" placeholder='Name' name='name' required onChange={handler} />
      </div>
      <div style={styles.inputGroup}>
        <input style={styles.input} type="number" placeholder='Receipt ID' name='receiptId' required onChange={handler} />
      </div>
      <div style={styles.inputGroup}>
        <input style={styles.input} type="number" placeholder='Price 1' name='price1' required onChange={handler} />
      </div>
      <div style={styles.inputGroup}>
        <input style={styles.input} type="number" placeholder='Price 2' name='price2' required onChange={handler} />
      </div>
      <div style={styles.inputGroup}>
        <input style={styles.input} type="number" placeholder='Price 3' name='price3' required onChange={handler} />
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={createAndDownloadPdf}>Download PDF</button>
      </div>
    </div>
  )
}

export default App