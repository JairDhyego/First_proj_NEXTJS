import LinkN from "next/link"

const Link = ({ children, ...props }) => {
  return (<LinkN {...props} >{children}</LinkN>)
}

export default Link