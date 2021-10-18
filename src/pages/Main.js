import { Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
	formContainer : {
		width: 700,
		height: 500,
		display: 'flex',
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center"
	}
})

function Main() {
	const classes = useStyles()
	return (
		<Paper className={classes.formContainer} elevation={5}> 
			<Typography variant="h4">
				Add Languages
			</Typography>
			<Typography variant="p">
				Add languages which you know and select which is your native.
			</Typography>
			<TextField  variant="outlined" label="Add Language" />
		</Paper>
	)
}

export default Main
