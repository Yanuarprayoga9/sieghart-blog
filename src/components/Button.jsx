import PropsTypes from 'prop-types'
export const ButtonComp = ({ loading, type, title }) => {
    return (
        <button disabled={loading} type={type}  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? 'loading..' : `${title}`}</button>
    )
}

ButtonComp.propTypes = {
    loading: PropsTypes.bool,
    type: PropsTypes.string,
    title: PropsTypes.string
}
