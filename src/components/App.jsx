import { useState, useMemo  } from "react";
import reactLogo from "./../assets/react.svg";
//import { Form } from "@rjsf/antd";
//import { AntdForm } from "@rjsf/antd";
import "./App.css";
import RuleCreator from "./editor/RuleCreator"; //"./editor/RuleCreator";

function App({ tabName, menuOperation }) {
  
  
  // const [greetMsg, setGreetMsg] = useState("");
   const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // };


  const memoizedValue = useMemo(() => {
    console.log("recomputed");
  }, [tabName]); // only recompute when dependency changes
  console.log("called babaji");
  /*
<!--<Form schema={schema} uiSchema = {uiSchema} onSubmit={onSubmit}  validator={customValidator}/>    
    -->
  */
  return (
    <main className="container">
      
        <b>Tab {tabName}</b>
        {
        tabName=='Create Rules'?(<div><RuleCreator menuOperation ></RuleCreator></div>)
         :(tabName=='Alerts'?(<div>If condition is none of the above</div>)
          :(tabName=='P&L'?(<div>P&L</div>)  
            :(<div>nothings</div>)
            )
          )

        }
      
    </main>
  );
}

export default App;
