import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'

interface TodoProps {
	items: { id: string; text: string }[]
}

const CheckboxList: React.FC<TodoProps> = function (props) {
	const [checked, setChecked] = useState([-1])

	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		setChecked(newChecked)
	}

	return (
		<List sx={{ width: '100%', maxWidth: 680, bgcolor: 'background.paper' }}>
			{props.items.map((value, index) => {
				const labelId = `checkbox-list-label-${value.id}`
				return (
					<ListItem key={value.id}>
						<ListItemButton role={undefined} onClick={handleToggle(index)} dense>
							<ListItemIcon>
								<Checkbox
									edge='start'
									checked={checked.indexOf(index) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ 'aria-labelledby': labelId }}
									color='default'
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={value.text} disableTypography />
						</ListItemButton>
					</ListItem>
				)
			})}
		</List>
	)
}

export default CheckboxList
