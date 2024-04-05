import PropTypes from 'prop-types';


export const PageContainer = ({ children,title }) => {
    return (
        <div className="">
            <h1 className="">{title}</h1>
            <div className="flex flex-col min-h-screen">
                {children}
            </div>
        </div>
    )
}

PageContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node, // Menambahkan PropTypes untuk children

}
export default PageContainer 