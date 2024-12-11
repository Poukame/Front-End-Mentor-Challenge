import clsx from 'clsx'

export function Body({className, bold = false, size = 'base', ...props}) {

let fontSize = `text-${size}`

  return (
    <p {...props} className={clsx(className, bold && 'font-semibold', fontSize, 'text-main-dark-blue')}/>
  )
}