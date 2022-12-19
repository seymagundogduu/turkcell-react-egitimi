import React, {useState} from "react";
import "./react-301/styles.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

function App() {
  const [lang, setLang] = useState("tr-TR")
  const messages = {
   "tr-TR" : {
    title: "Merhaba Dünya",
    description: "3 yeni mesajınız var"
   },
   "en-US" : {
    title: "Hello World",
    description:"you have 3 new message"
   }
  }
  return (
    <div>
      <IntlProvider messages={messages[lang]}>
      <FormattedMessage id="title"/>
   <br/>
   <hr/>
   <p> 
    <FormattedMessage id="description" />
   </p>
   <hr/>
      <button onClick={() => setLang('tr-TR')}>TR</button>
      
      <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
