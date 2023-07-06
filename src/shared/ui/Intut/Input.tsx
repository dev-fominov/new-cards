type InputType = 'submit' | 'button' | 'checkbox' | 'radio' | 'reset' | 'file' | 'text'

type Props = {
  callBack: (title: string) => void
  disabled?: boolean
  className: string
  type: InputType
}

export const Input: React.FC<Props> = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }

  return <input onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
}
