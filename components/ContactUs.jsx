import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classnames from "classnames";
import Alert from "./Alerts";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export const ContactUs = () => {
  const form = useRef();
  const [alert, setAlert] = React.useState(null);

  const successAlert = {
    color: "success",
    icon: "ni ni-like-2",
    message: " Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: " Oops! Something went wrong. Please try again later.",
  };

  const sendEmail = (e) => {
    console.log(form.user_name?.value);
    e.preventDefault();
    console.log();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert(successAlert);
        },
        (error) => {
          console.log(error.text);
          setAlert(errorAlert);
        }
      );
  };

  return (
    <>
      <section className="section section-lg section-shaped">

        <div className="shape shape-style-3 shape-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
        <form ref={form} onSubmit={sendEmail}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h1 className="mb-1"> Lets Connect</h1>
                    <p className="mt-0 " style={{fontSize:"25px"}}>
                      To reach new heights!!
                    </p>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-user-run" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="from_name"
                      
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-email-83" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          name="email"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="ni ni-email-83" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Enter Your Country"
                          name="country"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-phone" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone No."
                          name="Contact"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                    <select style={{ width: "100%" }}
                      type="text"
                      className="form-control"
                      placeholder="What Are You Looking For"
                      name = "lookingFor"
                    >
                      <option value="" disabled selected hidden>What are you looking for?</option>

                      <option value="A Job">A Job</option>
                      <option value="Your Service">Your Service</option>
                      <option value="Business With You">Business With You</option>
                      <option value="Others">Others</option>
                      
                    </select>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        onClick={sendEmail}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
