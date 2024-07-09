import "./App.css";
import { useState } from "react";
import { Heading } from "./Heading";
import Paragraph from "./Paragraph";
import Card from "./Card";
import CustomButton from "./CustomButton";
function App() {

  const [count,setCount] = useState(0)
  const name = 'John'
  const Inc = () =>{
    setCount(count+1)
  }
  const Dec = () =>{
    setCount(count-1)
  }
 
  return (
    <div className="bg-[#6e171e] flex flex-col items-center justify-center h-[100vh]">
      <Heading name={name} />
      <Paragraph workShopName='Dynamic Websites'/>
      <Card count={count}/>
      <div className="flex flex-row gap-10 mt-10 ">
      <CustomButton text='Increment' handleClick={Inc} />
      <CustomButton text='Decrement' handleClick={Dec}/>
      </div>
    </div>
  );
}

export default App;
