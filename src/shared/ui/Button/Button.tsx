type Props = {
  callBack: () => void
  name: string
  disabled?: boolean
  className: string
}

export const Button: React.FC<Props> = ({ callBack, name, disabled, className }) => {
  const onClickHandler = () => {
    callBack()
  }

  return <button onClick={onClickHandler} disabled={disabled} className={className}>{name}</button>
}
