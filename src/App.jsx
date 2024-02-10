import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(1)
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')
  const [data, setData] = useState(
    [

    ]  
  )

  const addNote = () =>{
    setCount(count + 1) // полезность 
    console.log(note)
    setData((prev) =>{
      return prev.concat({
        key:count,
        title:title,
        note:note
      })
    })
    console.log(data)
    console.log(count)
  }


  const removeAllNotes = () =>{
    console.log('note removed')
    setData(data.filter((e) => e.id === count)); 
    console.log(count)
    setCount(count - count) 
  }

  const removeNote = (id) =>{ //вот эта хуйня заработала, я просто забыл аргумент передать блять
    setData(data.filter((e) => e.key !== id))
    console.log('noted')

  }

  return (
    <>
       <div className='center'> 
        <div className='notes'>
          <h1> Заметки </h1>
          <div className='input-and-button'>

            <input placeholder='Заголовок заметки' value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}></input> 
            <div className='center'>           
            <textarea autoFocus placeholder='Текст заметки' value={note} onChange={(e)=>{
              setNote(e.target.value)
            }}></textarea></div>

            <button className='add' onClick={addNote}> Добавить </button>
            <button className='delete' onClick={removeAllNotes}> Удалить все </button>
            </div>
          </div>
        </div>
                  {data.map((e)=>{
                    return (
                      <div className='note-item'>
                        <button onClick={()=>{removeNote(e.key)}}>-</button>
                        <div className='note-text'>
                        <h2>{e.title}</h2>
                        <hr></hr>
                        <p>{e.note}</p>
                        </div>
                      </div>
                    )
                  })}
    </>
  )
}

export default App
