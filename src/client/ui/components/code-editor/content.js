import { useState } from "react"
import axios from "axios"
import { message } from "antd"
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core'

export const CodeEditorContainer = () => {
  const [output, setOutput] = useState("adasds")
  const [code, setCode] = useState(
    `print("Hello world")`
  );

  const buildCode = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_REST_API_URL
      const result = await axios.post(`${baseUrl}?source=${code}&lang=py`)
      return result.data.ans
    } catch (e) {
      console.error(e)
      message.error("Ocurrió un error. Checa la consola.")
    }
  }

  const onExecute = async () => {
    const dismissLoader = message.loading("Compilando...")
    try {
      const output = await buildCode(code)
      setOutput(output)
      message.success("Compilado!")
    } catch (e) {
      message.error(e)
      console.error(e)
    } finally {
      dismissLoader()
    }
  }

  return (
    <div className={"MainContainer"}>
      <div className="Sidebar">
        <ul style={{ listStyle: "none", cursor: "pointer" }}>
          <li className="Sidebar_Item">Nuevo</li>
          <li className="Sidebar_Item">Proyectos</li>
          <li className="Sidebar_Item">Nuevo</li>
          <li className="Sidebar_Item">Nuevo</li>
          <li className="Sidebar_Item">Nuevo</li>
        </ul>
      </div>
      <div className="ContentContainer">
        <div className="CodeEditorContainer">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className="ExecuteButtonContainer">
          <button onClick={onExecute}>
            Execute
          </button>
        </div>
        <div className="OutputContainer">
          {output}
        </div>
      </div>
    </div>
  )
}
