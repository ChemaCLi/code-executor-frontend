import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"

export const AddButton = ({ label = "Nuevo", onClick, children, icon }) => {
  return (
    <Button
      block
      shape="round"
      type="primary"
      icon={icon || <PlusOutlined />}
      onClick={onClick ? onClick : undefined}>
      {children || label}
    </Button>
  )
}
