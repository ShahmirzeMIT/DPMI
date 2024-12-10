import { Layout } from "antd";
import Head from "./Header/Head";
import Main from "./Main/Main";
import Bottom from "./Footer/Bottom";
import { stylesLayout } from "../styles/LayoutStyles/layoutStyles";


export default function Index() {

  return (
    <Layout style={{...stylesLayout.layoutStyle}}>
        <Head/>
        <Main/>
        <Bottom/>
    </Layout>
  )
}
