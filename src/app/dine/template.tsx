import React ,{ReactNode} from 'react'


interface TemplateProps {
    children: ReactNode ;
}
const Template: React.FC<TemplateProps> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Template
