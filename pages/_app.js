import "../styles/homePageHeader.scss";
import "../styles/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/topSlider.scss";
import "../styles/description.scss";
import "../styles/prodSlider.scss";
import "../styles/adidas.scss";
import "../styles/topProducts.scss";
import "../styles/footer.scss";
import "../styles/catalog.scss";
import "../styles/login.scss";
import "../styles/catalogResponsive.scss";
import "../styles/register.scss";
import "../styles/loginMail.scss";
import "../styles/emailVerify.scss";

import { store } from '../Redux/store.js'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps}/>
  </Provider>
   );
}
