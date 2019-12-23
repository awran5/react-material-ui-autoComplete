# MuiAutoComplete

React Autocomplete component built with Material-UI. Support accessibility and works with keyboard, screen readers, and touch screens.

### Suppored keys 
* UP
* Down
* ESC
* ENTER
* Mouse click

### Dependencies
* [Material-UI](https://material-ui.com/) v4.8.0
* React version supports [Hooks](https://reactjs.org/docs/hooks-intro.html)

![](https://github.com/awran5/MuiAutoComplete/blob/master/MuiAutoComplete.gif)

### Usage:

#### 1. Import MuiAutoComplete.js and suggestions array
```js
import MuiAutoComplete from './MuiAutoComplete';
import suggestionsArray from './suggestionsArray';
```
#### 2. Define required vars and functions

```js
const listRef = useRef(null); // Target 'ul' list that hold matches array 
const [ inputValue, setInputValue ] = useState(''); // Field value to be used
const [ flag, setFlag ] = useState(false); // Flag to check changes

// Change
const handleChange = ({ target: { value } }) => {
	setFlag(false);
	if (value.length > 0) setFlag(true);

	setInputValue(value);
};
// Select
const handleSelect = value => {
	setInputValue(value);
	setFlag(false);
};
```

#### 3. Call MuiAutoComplete component and pass the required props

```jsx
<MuiAutoComplete
	suggestionsArray={suggestionsArray}
	handleChange={handleChange}
	handleSelect={handleSelect}
	inputValue={inputValue}
	flag={flag}
	listRef={listRef}
	/>
```
<hr>

### [Demo](https://2xzponvj3n.csb.app/) 
### [codeSandbox](https://codesandbox.io/s/react-material-ui-autocomplete-2xzponvj3n)
