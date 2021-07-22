import ContentLoader from "react-content-loader"

const SearchLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-8" y="15" rx="2" ry="2" width="528" height="200" />
  </ContentLoader>
)

export default SearchLoader;