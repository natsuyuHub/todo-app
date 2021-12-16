import React, { memo } from 'react'

interface Props {
	handleSubmit: any
	isValidation: boolean
	setInput: any
	value: string
	errorText: string
}

const Form: React.FC<Props> = memo(props => {
	const { handleSubmit, errorText, setInput, value } = props

	return (
		<form onSubmit={handleSubmit} noValidate>
			<div className='todolistForm'>
				<label className='todoformlabel'>
					<input
						type='text'
						name='todovalue'
						value={value}
						onChange={e => {
							setInput(e.currentTarget.value)
						}}
						required
					/>
					<p className='errorText'>{errorText}</p>
				</label>
			</div>
		</form>
	)
})

export default Form
