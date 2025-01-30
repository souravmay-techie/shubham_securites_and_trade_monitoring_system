import { useState, useRef } from "react";
import Form from "@rjsf/bootstrap-4";
import validator from "@rjsf/validator-ajv8";
import { invoke } from "@tauri-apps/api/core";
import "./RuleCreator.css";

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
  "uiSchema": {
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




function RuleCreator({ menuOperation }) {
  const isFirstChangeRef = useRef(true);
  const changedFormData = async (newUiSchema) => {
    if (isFirstChangeRef.current) {
      //console.log('handleChange called for the first time');
      isFirstChangeRef.current = false;
    } else {
      //console.log("hnagle ui schema change");
      schema.properties["age"] = {
        "type": "integer",
        "title": "Age"
      };
      schema.uiSchema["age"] = {
        "ui:widget": "updown",
        "ui:title": "Age of person",
        "ui:description": "(earth year)"
      };
      var das = await invoke("greet", { "das": schema });
      console.log("called rust and came back " + JSON.stringify(das));
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
    <>
      <div class="container mx-auto mt-8 flex">
        <h2 class="text-xl font-semibold mb-4">General Information</h2>
      </div>
      <div class="container mx-auto mt-8 flex">
        <table class="container">

          <tr>
            <td class="condition-block">
              <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                <div class="mb-4">
                  <label class="block text-gray-700">Asset Name</label>
                  <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="checkbox" /> Can Execute on Worker Node
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700">Allocable Cash(DSL)</label>
                  <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
            </td>
            <td class="condition-block">
              <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                <div class="mb-4">
                  <label class="block text-gray-700">Dependent Asset Types</label>
                  <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700">Event Awaken(DSL)</label>
                  <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
            </td>
            <td class="condition-block">
              <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                <div class="mb-4">
                  <label class="block text-gray-700">Valid Till(DSL)</label>
                  <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />

                </div>
                <div class="mb-4">
                  <label class="block text-gray-700">Make Live(DSL)</label>
                  <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="checkbox" /> Execute on Confirmation
                </div>
              </div>
            </td>
          </tr>


        </table>
      </div>
      <div class="container mx-auto mt-8 flex">
        <input type="submit" />
      </div>
      <table class="container">

        <tr>
          <td class="condition-block">
            <div><Form schema={schema} onChange={changedFormData} validator={customValidator} /></div>
          </td>
          <td class="execution-block">
            <h2>Block 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

          </td>
          <td class="compiled-block">
            <h2>Block 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

          </td>
        </tr>
      </table>
    </>


  );
}
export default RuleCreator;
