import React from "react"
import 'antd/dist/antd.css';
import { AddButton } from "../client/components/shared"
import { UserAddOutlined } from "@ant-design/icons"

export default {
  title: "Buttons/AddButton",
  component: AddButton,
  argTypes: {
    onClick: { action: "clicked" }
  }
}

const Template = (args) => <AddButton icon={<UserAddOutlined />} {...args} />

export const WideButton = Template.bind({})
WideButton.args = {
  children: "Agregar nuevo usuario",
  label: "Nuevo usuario (se renderiza cuando no existe children)"
}
