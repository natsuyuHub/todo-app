import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckboxList from './CheckboxList'

export interface TodoValue {
	id: string
	text: string
}

const TodoList = () =>  {
	const [input, setInput] = useState<string | null>()
	const [isValidation, setIsValidation] = useState(true)
	const [todoValue, setTodoValue] = useState<TodoValue[]>([])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		input && isValidation ? setTodoValue(x => [...x, { id: uuidv4(), text: input }]) : setIsValidation(false)
	}

	return (
		<div>
			<h2>TodoList</h2>
			<form onSubmit={handleSubmit}>
				<div className='todolistForm'>
					<label className='todoformlabel'>
						{isValidation ? (
							<input
								type='text'
								onChange={e => {
									setInput(e.currentTarget.value)
									setIsValidation(true)
								}}
							/>
						) : (
							<>
								<input
									type='text'
									onChange={e => {
										setInput(e.currentTarget.value)
										setIsValidation(true)
									}}
									className='disabledInput'
								/>
								<p className='disabledInputText'>※フォームが空です</p>
							</>
						)}
					</label>
				</div>
			</form>
			<div className='todoContainerCenter'>
				<CheckboxList items={todoValue} />
			</div>
		</div>
	)
}

export default TodoList
