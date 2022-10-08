import '../styles/globals.css'
import 'antd/dist/antd.css';
import "../styles/CodeContainer.css"

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
