import { useState } from "react"
import { Form, message } from "antd"
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';



export const CodeEditorContainer = () => {
  const [output, setOutput] = useState(null)
  const [form] = Form.useForm()
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const buildCode = async (sourceText) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ output: "Hola platzi" })
      }, 1000)  
    })
  }

  const onExecute = async () => {
    const dismissLoader = message.loading("Compilando...")
    try {
      const { sourceCode } = form.getFieldsValue()
      const result = await buildCode(sourceCode)
      setOutput(JSON.stringify(result))
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
