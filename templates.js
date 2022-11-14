// Put this in your snippets.code file ;)

"react component": {
  "scope": "javascript, javascriptreact",
  "prefix": "reactcomp",
  "body": [
    "import React, { useState, useEffect } from 'react';",
    "",
    "const ${1:COMPONENT} = () => {",
    "\tconst [ , ] = useState( );",
    "",
    "\tuseEffect(() => {",
    "",
    "\t}, [])",
    "",
    "\treturn (",
    "\t\t<div>",
    "\t\t\t<h3>${1:COMPONENT}</h3>",
    "\t\t</div>",
    "\t)",
    "}",
    "",
    "export default ${1:COMPONENT};"
  ],
  "description": "create react component"
}



// Example Keyboard Shortcut Config

{
  "key": "shift+cmd+y",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "name": "react component"
  }

  //the 'name' is where you'll put the name of your desired user snippet
  //I used my react component