// import { useState } from "react";
import { currencies } from "./currencies";
import Background from "./Background";
import Header from "./Header";
import Calculator from "./Calculator";
import Form from "./Form";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import ResultField from "./ResultField";
import Footer from "./Footer";

function App() {

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
            inputs={<Inputs currencies={currencies} />}
            buttons={<Buttons />}
          />
        }
        result={<ResultField />}
      />

      <Footer />

    </Background>
  );
};

export default App;
