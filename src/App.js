import { useState } from "react";
import { currencies } from "./utils/currencies";
import Background from "./Background";
import Header from "./Header";
import Calculator from "./Calculator";
import Form from "./Form";
// import Inputs from "./Inputs";
// import Buttons from "./Buttons";
import ResultField from "./ResultField";
import Footer from "./Footer";

function App() {

  const [result, setResult] = useState();

  const calcResult = (amount, currencyFrom, currencyTo) => {

    const outcome = (amount, currencyFrom, currencyTo) => {

      const rateFromPLN = currencies.find(({ name }) => name === currencyTo).rateFromPLN;
      const rateToPLN = currencies.find(({ name }) => name === currencyFrom).rateToPLN;

      if (currencyFrom === currencyTo) {
        return amount;
      } else if (currencyFrom === "PLN") {
        return amount / rateFromPLN;
      } else if (currencyTo === "PLN") {
        return amount * rateToPLN;
      } else {
        return (amount / rateFromPLN) * rateToPLN;
      };
    };

    setResult({
      amount: +amount,
      currencyFrom,
      result: outcome(amount, currencyFrom, currencyTo),
      currencyTo
    });
  };


  return (
    <Background>

      <Header
        title="Twój kantor"
        paragraph="najlepsze kursy walut w internecie"
      />

      <Calculator
        body={
          <Form
            title="Kalkulator walut"
            currencies={currencies}
            calcResult={calcResult}
          />
        }
        resultField={<ResultField result={result} />}
      />

      <Footer />

    </Background>
  );
};

export default App;
