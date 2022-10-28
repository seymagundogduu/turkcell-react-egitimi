import User from "./react-101//components/User";

// const user = {
//   name:"Şeyma",
//    surname:"Gündoğdu",
//     age:"23"
// }

function App() {
  return (
    <>
    <User title="User"
    name="Şeyma"
    city="Zonguldak"
    age={29}
    />
    {/*  friends={["Ahmet" , "Murat" , "Ayşe" , "Fatma"]}  */}
    </>
 
  );
}

export default App;
