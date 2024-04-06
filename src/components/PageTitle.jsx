
import PropTypes from 'prop-types'
export const PageTitle = ({title}) => {
  return (
    <h1 className="text-5xl font-bold font-serif p-3">{title}</h1>
  )
}

PageTitle.propTypes = {
    title:PropTypes.string
}

