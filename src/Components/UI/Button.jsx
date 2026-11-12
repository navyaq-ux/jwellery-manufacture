import './Button.css'

/**
 * Shared action button. Renders an <a> when `href` is supplied,
 * otherwise a <button>.
 */
export default function Button({
  href,
  variant = 'gold',
  size,
  block = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  )
}
