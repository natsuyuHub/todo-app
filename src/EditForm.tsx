import React,{memo} from 'react'

interface Props {
  editValue: string
  handleSubmit: any
  setInput: any
  errorText: string | null
};

const EditForm: React.FC<Props> = memo(props => {
  const {
    handleSubmit,
    errorText,
    setInput,
    editValue,
  } = props

  return(
    <form onSubmit={handleSubmit} noValidate>
      <div className="editForm">
        <label className="editFormlabel" >
          <p>Edit Form</p>
          <input type='text' name="todovalue" defaultValue={editValue} onChange={ e => {setInput(e.currentTarget.value)}} required/>
          <p className="errorText">{errorText}</p>
      </label>
    </div>
  </form>
  )
})

export default EditForm;
