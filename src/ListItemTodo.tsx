import React, { memo } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

interface TodoProps {
	items: { id: number; uuid: string; todovalue: string; status: number }[]
	hadleisEdit: any
	handleDelete: any
	isdisabled: boolean
	handleChecked: any
}

const ListItemTodo: React.FC<TodoProps> = memo(props => {
	const { items, hadleisEdit, handleDelete, isdisabled, handleChecked } = props

	return (
		<List sx={{ width: '100%', maxWidth: 680, bgcolor: 'background.paper' }}>
			{items.map((value, index) => {
				const labelId = `checkbox-list-label-${value.uuid}`
				return (
					<ListItem key={value.uuid}>
						<ListItemButton
							disabled={!isdisabled}
							role={undefined}
							onClick={() => {
								handleChecked(value.id, index)
							}}
							dense
						>
							<ListItemIcon>
								<Checkbox
									edge='start'
									checked={value.status !== 0}
									disableRipple
									inputProps={{ 'aria-labelledby': labelId }}
									color='default'
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={value.todovalue} disableTypography />
						</ListItemButton>
						<IconButton
							disabled={!isdisabled || value.status !== 0}
							key={`edit-icon-${value.uuid}`}
							onClick={() => hadleisEdit(value.id, value.todovalue)}
						>
							<EditIcon />
						</IconButton>
						<IconButton disabled={!isdisabled} key={`delete-icon-${value.uuid}`} onClick={() => handleDelete(value.id)}>
							<DeleteIcon />
						</IconButton>
					</ListItem>
				)
			})}
		</List>
	)
})

export default ListItemTodo
