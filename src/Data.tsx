import 'whatwg-fetch';
import React,{ memo,useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListItemTodo from './ListItemTodo'
import Form from './Form'
import EditForm from './EditForm'
import { useForm } from "react-hook-form"

interface DataProps {
  id: number
  uuid: string
  todovalue: string
  status: number
}

interface SendEditValue {
  id?: number
  text?: string
}

const Data: React.FC = memo(() => {
  const [data,setData] = useState<DataProps[]>([])
  const [editValue, setEditValue] = useState<SendEditValue>()
  const [input,setInput] = useState<string|null>()
  const [isValidation,setIsValidation] = useState(true)
  const [errorText, setErrorText] = useState("")
  const {reset} = useForm()

  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(result => {
      setData(result)
    })
    .catch(error =>console.error(error))
  }, [])

  const createAPI = (uuid:string, text:string) => {
    const requestOptions = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({uuid:uuid,todovalue:text})
      }
      fetch("/todocreate",requestOptions)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log("createAPI Success!")
      })
      .catch(error => console.error(error))
  }

  const editAPI = (id:number, text:string) => {
    const requestEditOptions = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({todovalue:text})
      }
    fetch(`/edit/${id}`,requestEditOptions)
    .then(res =>res.json())
    .then(result => {
      setData(result)
      console.log("editAPI Success!")
    })
    .catch(error => console.error(error))
  }

  const checkedAPI = (id:number,status:number)=>{
    const requestOption = {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({status:status})
    }
    fetch(`/checked/${id}`,requestOption)
    .then(res=>res.json())
    .then(result=>{
      setData(result)
      console.log("checkeAPI Success!!")
    })
  }

  const deleteAPI = (id:number) => {
    fetch(`/delete/${id}`)
    .then(res =>res.json())
    .then(result =>{
      setData(result)
      console.log("Delete Success!!")
    })
    .catch(error => console.error(error))
  }

  const resetFormData = () => {
    setErrorText('')
    setInput(null)
    reset()
  }

  const errorCase = (errorMessage:string) => {
    setErrorText(errorMessage)
    setIsValidation(false)
    setInput(null)
  }

  const handleSubmit=(e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(!input){return errorCase("※フォームが空です")}
    if(input){
      if(editValue && editValue.id && editValue.text){
        editValue.text !== input? editAPI(editValue.id,input) : console.log("Same Data")
        setEditValue(undefined)
        resetFormData()
        return
      }
      if(!editValue){
        const createuuid = uuidv4()
        createAPI(createuuid,input)
        resetFormData()
        return
      }
    } else {console.log("Submit Other Case")}
  }

  const handleDelete = (id:number) => {
    deleteAPI(id)
  }

  const hadleisEdit = (id:number, text:string) => {
    setEditValue({id:id, text:text})
    setInput(text)
  }

  const handleChecked = (id:number,index:number) => {
    let sendstatus = 0
    data[index].status === 0 ? sendstatus=1 : sendstatus=0
    checkedAPI(id,sendstatus)
  }

  return (
    <div className="home">
      {!editValue &&
      <Form
      handleSubmit={handleSubmit}
      isValidation={isValidation}
      setInput={setInput}
      value={input?input:''}
      errorText={errorText}/>}
      {editValue && editValue.text &&
      <EditForm
      editValue={editValue.text}
      errorText={errorText}
      handleSubmit={handleSubmit}
      setInput={setInput}
      />
      }
      <div className="todoContainerCenter" >
        <ListItemTodo
        items={data}
        hadleisEdit={hadleisEdit}
        handleDelete={handleDelete}
        isdisabled={!editValue}
        handleChecked={handleChecked}/>
      </div>
    </div>
  )
})
export default Data
