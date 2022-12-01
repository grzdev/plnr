
// import { Provider } from "react-redux"
// import store from "../redux/store"
// import { ChakraProvider } from "@chakra-ui/react"



// function MyApp({ Component, pageProps }) {
//   return(
//     <ChakraProvider>
//        <Provider store = {store}>
//          <Component {...pageProps} />
//       </Provider>
//     </ChakraProvider>
//   )
// }

// export default MyApp

import { Provider } from "react-redux"
import { store } from '../redux/store'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from "@chakra-ui/react"

let persistor = persistStore(store);


function MyApp({ Component, pageProps }) {
  return(
      <ChakraProvider>
        <Provider store = {store}>
        <PersistGate persistor={persistor}>
         <Component {...pageProps} />
        </PersistGate>
      </Provider>
      </ChakraProvider>
      
  )
}

export default MyApp