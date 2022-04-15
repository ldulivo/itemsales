import FormContentStyle from '../../styles/FormContent.module.css';

export default function FormContent({children}) {
  return (
    <div className={FormContentStyle.FormContent}>
        {children}
    </div>
  )
}
