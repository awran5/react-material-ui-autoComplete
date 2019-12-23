import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MuiAutoComplete from './components/MuiAutoComplete'
import suggestionsArray from './suggestionsArray'

const styles = theme => ({
	appBar: {
		position: 'relative',
		paddingRight: 10,
		paddingLeft: 10
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(5),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(8),
			marginBottom: theme.spacing(8),
			padding: theme.spacing(3)
		}
	}
})

const App = ({ classes }) => {
	const listRef = useRef(null)
	const [ inputValue, setInputValue ] = useState('')
	const [ flag, setFlag ] = useState(false)

	// Change
	const handleChange = ({ target: { value } }) => {
		setFlag(false)
		if (value.length > 0) setFlag(true)

		setInputValue(value)
	}
	// Select
	const handleSelect = value => {
		setInputValue(value)
		setFlag(false)
	}

	return (
		<div className="App">
			<CssBaseline />
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						AutoComplete Field
					</Typography>
				</Toolbar>
			</AppBar>
			<main className={classes.layout}>
				<Typography variant="h4" align="center" style={{ marginTop: 80, marginBottom: 40 }}>
					AutoComplete Field
				</Typography>

				<Typography style={{ marginBottom: 40 }}>
					Accessible autocomplete field works with keyboard, screen readers, and touch screens. Support UP,
					Down, ESC, ENTER keys.
				</Typography>
				<Paper className={classes.paper}>
					<MuiAutoComplete
						suggestionsArray={suggestionsArray}
						handleChange={handleChange}
						handleSelect={handleSelect}
						listRef={listRef}
						inputValue={inputValue}
						flag={flag}
					/>
				</Paper>
				<Typography variant="h6">Value{inputValue ? <code>: {inputValue}</code> : ''}</Typography>
				<Divider style={{ marginTop: 100 }} />
				<Typography component="p" align="center" style={{ margin: '10px 0' }}>
					Built with{' '}
					<span role="img" aria-label="Emojis">
						❤️
					</span>{' '}
					by the{' '}
					<a href="https://gkstyle.net/" title="GK STYLE">
						{' '}
						GK STYLE{' '}
					</a>
					team.
				</Typography>
			</main>
		</div>
	)
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
