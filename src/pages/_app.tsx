import '../styles/bootstrap.min.css'
//import '../styles/style.css'
import '../styles/normalize.css'
import '../styles/meus.css'
import '../styles/bio.css'
import '../public/fonts/font-awesome.min.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';


function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
      import('../styles/bootstrap.min.js');
    }, []);
  
    return <Component {...pageProps} />;
  }
  
  export default App;