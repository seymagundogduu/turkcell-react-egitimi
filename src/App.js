import React, {useState, useEffect} from "react";
import "./react-301/styles.css";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  "tr-TR" : {
   title: "Merhaba Dünya",
   description: "{count} yeni mesajınız var"
  },
  "en-US" : {
   title: "Hello World",
   description:"you have {count} new message"
  }
 }

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;

  const [locale, setLocale] = useState(defaultLocale);
  
  useEffect(() => {
  localStorage.setItem("locale" , locale);
  }, [locale])

  
  return (
    <div>
      <IntlProvider locale={locale} messages={messages[locale]}>
      <FormattedMessage id="title"/>
   <br/>
   <hr/>
   <p> 
    <FormattedMessage id="description"  values={{count : 3}}/>
   </p>
   <hr/>
      <button onClick={() => setLocale('tr-TR')}>TR</button>
      
      <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
