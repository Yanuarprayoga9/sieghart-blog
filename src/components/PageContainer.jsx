import PropTypes from 'prop-types';


export const PageContainer = ({ children,title }) => {
    return (
        <div className="p-3">
            <h1 className="space-x-4 sm:mt-20 text-2xl font-serif border-b pb-2">{title}</h1>
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