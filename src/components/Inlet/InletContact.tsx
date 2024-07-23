import {
  CONTACT_ADDRESS_CITY_STATE_ZIP,
  CONTACT_ADDRESS_COUNTRY,
  CONTACT_ADDRESS_STREET,
  CONTACT_EMAIL,
} from "@/env/env.api";
import Inlet from "./Inlet";
import { Heading } from "@aws-amplify/ui-react";

export default function PageContact() {
  return (
    <Inlet id="contact">
      <Heading level={2}>Contact Us</Heading>
      <p>
        We would love to hear from you! Whether you have a question about our
        services, need assistance, or you're in the area and want to check out
        the office, feel free to drop us a line.
      </p>

      <Heading level={4}>Get in Touch</Heading>
      <p>
        If you're interested in learning more about our services or have a
        specific query, please don't hesitate to get in touch. Our dedicated
        team is always here to help you.
      </p>

      <p>
        <strong>Email Us:</strong>
      </p>
      <p>
        For any inquiries, please email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We aim to
        respond to all emails within 24 hours.
      </p>

      <p>
        Your feedback and questions are important to us. We look forward to
        connecting with you and will do our best to respond as quickly as
        possible.
      </p>

      <address>
        <br />
        {CONTACT_ADDRESS_STREET}
        <br />
        {CONTACT_ADDRESS_CITY_STATE_ZIP}
        <br />
        {CONTACT_ADDRESS_COUNTRY}
      </address>
    </Inlet>
  );
}
