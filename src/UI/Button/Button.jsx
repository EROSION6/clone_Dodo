import classNames from 'classnames'
import './Button.scss'
import React from 'react';


export const Button = ({ className,  style, variant ,children, ...props}) => {
  
  const styleClassName = classNames({
   "orangeButton": variant === 'orange',
   "grayButton": variant === 'gray',
	})

	return (
		<button {...props} style={style} className={`${styleClassName} ${className}`}>{children}</button>
	)
}
