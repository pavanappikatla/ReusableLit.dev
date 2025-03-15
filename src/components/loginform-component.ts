import { LitElement } from "lit";
import { html,css } from "lit";
import { customElement } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/textarea/textarea.js";
import "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/themes/light.css";

@customElement('loginform-component')
export class LoginFormComponent extends LitElement{

    private handleSubmit (e:Event){
        e.preventDefault();
        const form = this.shadowRoot?.querySelector("#loginForm") as HTMLFormElement;
        const formData = new FormData(form);
        const nameInput =  formData.get("name");
        const passwordInput = formData.get("password");
        const commentInput = formData.get("comment");
        //console.log("Debug event: ", e)
        this.dispatchEvent(new CustomEvent('formSubmit', {detail: {name:nameInput, password: passwordInput, comment: commentInput}, bubbles:true, composed:true}));
    }


   render (){
    return html`
    <form id = "loginForm" class="input-validation-required" @submit= ${this.handleSubmit} style="width:30rem;">
  <sl-input id= "name" name="name" label="Name" required></sl-input>
  <br />
  <sl-input id = "password" name="password" label="Password" type="password" password-toggle required></sl-input>
  <br />
  <sl-textarea id = "comment" name="comment" label="Comment" required></sl-textarea>
  <br />
  <sl-checkbox required>I agree to terms and conditions</sl-checkbox>
  <br /><br />
  <sl-button type="submit" variant="primary">Submit</sl-button>
</form>
`;
   }
}