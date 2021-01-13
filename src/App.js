import React from "react";
import { Radio } from "playbook-ui"

import "playbook-ui/dist/playbook.css"
import "playbook-ui/dist/fonts/regular-min"
import "playbook-ui/dist/fonts/fontawesome-min"

import "./radio-css-fix.scss"


export default function App() {
  return (
    <div>
      <Radio
          defaultChecked
          label="Power"
          name="Group2"
          value="Power"
      />
      <br />
      <Radio
          defaultChecked={false}
          label="Nitro"
          name="Group2"
          value="Nitro"
      />
      <br />
      <Radio
          defaultChecked={false}
          label="Google"
          name="Group2"
          value="Google"
      />
    </div>
  );
}
