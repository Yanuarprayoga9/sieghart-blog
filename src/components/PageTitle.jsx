
import PropTypes from 'prop-types'
export const PageTitle = ({title}) => {
  return (
    <h1 className="text-4xl font-bold p-3">{title}</h1>
  )
}

PageTitle.propTypes = {
    title:PropTypes.string
}

