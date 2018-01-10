
## To Use

Install dependencies
```
npm install
```
Run the app
```
npm start
```

## To Do

Create an desktop app with HTML/CSS, JavaScript and Electron.js to read Wikipedia page and parse the paragraph content.

#### UI Requirements
	---------------------------------------------------------------------------
	|                                    |                                    |
	|                                    |                                    |
	|                                    |            browser                 |
	|           parsed                   |                                    |
	|                                    |             view                   |
	|          contents                  |                                    |
	|                                    |              of                    |
	|                                    |                                    |
	|                                    |             the                    |
	|      --------------   -------      |                                    |
	|      | num field  |   | btn |      |           original                 |
	|      --------------   -------      |                                    |
	|                                    |             web                    |
	|                                    |                                    |
	|                                    |             page                   |
	|                                    |                                    |
	---------------------------------------------------------------------------

#### Functionality Requirements
	1. Parse Page Content:
		- Input a url of a Wikipedia page in the omnibox -> browser displays the corresponding page.
		- When browser view updates, get the content of the page.
		- Parse all paragraphs (content between <p> tags), and extract first and last sentence of each paragraph.
		- Display the parsed contents in the original order in the left window.

	2. Scroll Browser (Stretch):
		- Create a number field (pos & neg) and a [ Scroll ] button
		- When the button is clicked, automatically scroll the browser +/- X pixels in y-direction.


