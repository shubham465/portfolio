import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Want to get in touch?</p>
        <p>Reach me out</p>

      </header>
      <div className="contacts">
        <div>
        <a href="mailto:skhot1042@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:skhot1042@gmail.com">skhot1042@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917987306501"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917987306501">(+91) 7987306501</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}