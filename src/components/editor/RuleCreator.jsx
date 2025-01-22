import { useState, useRef } from "react";
import Form from "@rjsf/bootstrap-4";
import validator from "@rjsf/validator-ajv8";
import { invoke } from "@tauri-apps/api/core";


var schema = {
  "title": "Create or define Rule",
  "description": "Create your business rules using tool",
  "type": "object",
  "required": [
    "ruleName",
    "assetName"
  ],
  "properties": {
    "ruleName": {
      "type": "string",
      "title": "Unique Rule name",
      "default": "for example : Buying RIL on Dips JAN-2025"
    },
    "assetName": {
      "type": "string",
      "title": "Last name"
    }
    
  },
  "uiSchema" : {
    "ruleName": {
      "ui:widget": "textarea",
      "ui:autofocus": true,
      },
    "assetName": {
      "ui:autocomplete": "given-name",
      "ui:enableMarkdownInDescription": true,
      "ui:description": "Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small> "
    },
    
  }
};


const handleSchemaChange = (newSchema) => {
  console.log("handle schema change");
};




function RuleCreator({menuOperation}) {
  const isFirstChangeRef = useRef(true);
  const changedFormData = async (newUiSchema) => {
    if (isFirstChangeRef.current) {
      //console.log('handleChange called for the first time');
      isFirstChangeRef.current = false;
    }else{
      //console.log("hnagle ui schema change");
      schema.properties["age"]= {
          "type": "integer",
          "title": "Age"
        };
      schema.uiSchema["age"] =  {
        "ui:widget": "updown",
        "ui:title": "Age of person",
        "ui:description": "(earth year)"
      };
      var das = await invoke("greet", {"das":schema}  );
      console.log("called rust and came back "+JSON.stringify(das));
    }
      
  };
      // async function onSubmit(data) {
      //   console.log(data);
      // };
      const customValidator = (formData, schema) => {
        const errors = {};
        alert("Das");
      
     
      
        return errors;
      };
    //onSubmit={onSubmit}
    return (
        <div><Form schema={schema}  onChange={changedFormData}   validator={customValidator}/></div>
    );
}
export default RuleCreator;
