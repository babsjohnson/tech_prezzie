# tech_prezzie

 **To enable snippet suggestions**

 - open command palette : shift + command + P (mac)

 - search Preferences then select Open User Settings (JSON)

 - set "editor.snippetSuggestions": "top",

ref: https://code.visualstudio.com/docs/editor/intellisense

**To add your own Snippets**

 - open command palette

 - search Snippets: Configure User Snippets

**Assign keybindings to snippets**

 - open command palette

 - search Preferences select Open Keyboard Shortcuts (JSON)

 - click define keybinding and input your keys

 - reference the example in templates.js to configure your shortcut


ref: https://code.visualstudio.com/docs/editor/userdefinedsnippets

Some example VSCODE variables:

TM_SELECTED_TEXT The currently selected text or the empty string
TM_CURRENT_LINE The contents of the current line
TM_CURRENT_WORD The contents of the word under cursor or the empty string
TM_LINE_INDEX The zero-index based line number
TM_LINE_NUMBER The one-index based line number
TM_FILENAME The filename of the current document
TM_FILENAME_BASE The filename of the current document without its extensions
TM_DIRECTORY The directory of the current document
TM_FILEPATH The full file path of the current document
RELATIVE_FILEPATH The relative (to the opened workspace or folder) file path of the current document
CLIPBOARD The contents of your clipboard
WORKSPACE_NAME The name of the opened workspace or folder
WORKSPACE_FOLDER The path of the opened workspace or folder
CURSOR_INDEX The zero-index based cursor number
CURSOR_NUMBER The one-index based cursor number