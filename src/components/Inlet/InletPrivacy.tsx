import { Heading, View } from "@aws-amplify/ui-react";
import Inlet from "./Inlet";
import { Link } from "react-router-dom";
import {
  CONTACT_ADDRESS_CITY_STATE_ZIP,
  CONTACT_ADDRESS_COUNTRY,
  CONTACT_ADDRESS_STREET,
  CONTACT_EMAIL,
} from "@/env/env.api";

export default function PrivacyPolicy() {
  return (
    <Inlet id="PrivacyPolicy">
      <View>
        <Heading level={1}>
          Privacy Policy for {window?.location.hostname}
        </Heading>
        <Heading level={3}>1. Introduction</Heading>
        <p>
          Welcome to {window?.location.hostname} (the "Website"). This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          information when you visit our website.
        </p>
        <Heading level={3}>2. Information We Collect</Heading>
        <p>
          <strong>Personal Information</strong>: We may collect personal
          information such as your name, email address, phone number, and other
          identifiable information that you voluntarily provide to us when you
          subscribe to our newsletter, fill out a contact form, or register for
          an account.
        </p>
        <p>
          <strong>Non-Personal Information</strong>: We may also collect
          non-personal information such as your browser type, language
          preference, referring site, and the date and time of each visitor
          request.
        </p>
        <Heading level={4}>Telemetry Data Collection</Heading>
        <p>
          We collect telemetry data to improve our services and ensure optimal
          performance. The types of telemetry data we collect include:
        </p>
        <ul>
          <li>
            <strong>Usage Metrics:</strong> Information about your interactions
            with our application, including pages visited and features used.
          </li>
          <li>
            <strong>Device Information:</strong> Data about your device, such as
            operating system and browser type.
          </li>
          <li>
            <strong>Performance Data:</strong> Metrics related to application
            performance, including response times and system load.
          </li>
          <li>
            <strong>Error Reports:</strong> Details about any errors or crashes,
            including error messages and stack traces.
          </li>
          <li>
            <strong>Geolocation Data:</strong> Approximate location data based
            on your IP address or GPS (if applicable).
          </li>
        </ul>
        <Heading level={3}>3. How We Use Your Information</Heading>
        <p>We may use the information we collect in the following ways:</p>
        <ul>
          <li>
            To personalize your experience and deliver content and product
            offerings tailored to your interests.
          </li>
          <li>
            To improve our website based on the information and feedback we
            receive from you.
          </li>
          <li>
            To send periodic emails regarding your order or other products and
            services.
          </li>
        </ul>
        <p>The data collected is used to:</p>
        <ul>
          <li>Enhance and personalize our services.</li>
          <li>Monitor and improve application performance.</li>
          <li>Identify and fix bugs and issues.</li>
        </ul>
        <p>
          Telemetry data may be retained for a period and is secured. We may
          share data with third-party services as detailed in their privacy
          policies.
        </p>
        <p>You have the option to control or opt out of data collection.</p>
        <Heading level={3}>4. How We Protect Your Information</Heading>
        <p>
          We implement security measures designed to protect your personal
          information from unauthorized access, disclosure, alteration, and
          destruction.
        </p>
        <Heading level={3}>5. Sharing Your Information</Heading>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties unless we provide you with advance notice. This
          does not include website hosting partners and other parties who assist
          us in operating our website, conducting our business, or servicing
          you, so long as those parties agree to keep this information
          confidential.
        </p>
        <Heading level={3}>6. Third-Party Links</Heading>
        <p>
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites.
        </p>
        <Heading level={3}>7. Cookies</Heading>
        <p>
          We may use cookies to enhance your experience on our website. You have
          the option to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer.
        </p>
        <Heading level={3}>8. Your Consent</Heading>
        <p>By using our website, you consent to our privacy policy.</p>
        <Heading level={3}>9. Changes to Our Privacy Policy</Heading>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>
        <Heading level={3}>10. Contacting Us</Heading>
        <p>
          If there are any questions regarding this privacy policy, you may
          contact us using the information below:
        </p>
        Email: <Link to={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
        <address>
          <br />
          {CONTACT_ADDRESS_STREET}
          <br />
          {CONTACT_ADDRESS_CITY_STATE_ZIP}
          <br />
          {CONTACT_ADDRESS_COUNTRY}
        </address>
      </View>
    </Inlet>
  );
}
