import Head from "next/head"

const Meta = ({pageTitle}) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"/>
      <script src="https://kit.fontawesome.com/ba4a4976f7.js" crossorigin="anonymous"></script>
    </Head>
  )
}
Meta.defaultProps = {
  pageTitle: 'Netflix Nigeria - Watch TV Shows Online, Watch Movies Online'
}
export default Meta