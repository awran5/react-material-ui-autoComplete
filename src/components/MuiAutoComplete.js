import React, { useState, Fragment } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import TextField from '@material-ui/core/TextField'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

const MuiAutoComplete = ({ suggestionsArray, handleChange, handleSelect, inputValue, flag, listRef }) => {
	const [ matches, setMatches ] = useState([])
	const [ count, setCount ] = useState(0)
	const list = listRef.current

	// Handle keyup
	const handleKeyUp = ({ keyCode, target: { value } }) => {
		// Filter our matchs list
		const matchList = suggestionsArray.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) === 0)
		setMatches(matchList)

		// Set counter used for list accessibility
		switch (keyCode) {
			// down arrow
			case 40:
				if (count < matchList.length - 1) setCount(count + 1)
				if (list) list.focus()
				break
			// up rrow
			case 38:
				if (count > 0) setCount(count - 1)
				if (list) list.focus()
				break
			// Esc
			case 27:
				setMatches([])
				break
			default:
				break
		}
	}

	// Handle when click away
	const handleClickAway = () => setMatches([])

	return (
		<Fragment>
			<TextField
				fullWidth
				autoComplete="off"
				label="Country"
				name="autoComplete"
				value={inputValue}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
				margin="normal"
			/>
			{flag ? (
				<ClickAwayListener onClickAway={handleClickAway}>
					{matches.length > 0 ? (
						<MenuList role="listbox" ref={listRef} style={{ maxHeight: 300, overflowY: 'auto' }}>
							{matches.map(match => {
								const suggest = match.toLowerCase().replace(inputValue, `<b>${inputValue}</b>`)
								return (
									<MenuItem role="option" key={match} onClick={() => handleSelect(match)}>
										<span dangerouslySetInnerHTML={{ __html: suggest }} />
									</MenuItem>
								)
							})}
						</MenuList>
					) : (
						<MenuList>
							<MenuItem>No result found!</MenuItem>
						</MenuList>
					)}
				</ClickAwayListener>
			) : null}
		</Fragment>
	)
}

export default MuiAutoComplete
