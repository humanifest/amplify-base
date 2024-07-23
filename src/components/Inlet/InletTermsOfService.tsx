import { Card, Heading, View, Text } from "@aws-amplify/ui-react";
import Inlet from "./Inlet";
import { Link } from "react-router-dom";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/env/env.api";
import { ROUTES } from "@/src/contexts/routes";

export default function TermsOfService() {
  return (
    <Inlet id="TermsOfService">
      <View>
        <Heading level={1}>Terms of Service</Heading>

        <Card>
          <Heading level={3}> 1. Introduction</Heading>
          <Text>
            Welcome to {COMPANY_NAME}! These Terms of Service ("Terms") govern
            your use of our website located at
            <Link to={ROUTES._}> {window?.location.hostname}</Link> (together or
            individually "Service") operated by {COMPANY_NAME}.
          </Text>
          <Text>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard, and disclose information that results
            from your use of our web pages. Please read it here:{" "}
            <Link to={ROUTES.privacy._}>Privacy Policy</Link>.
          </Text>
          <Text>
            Your agreement with us includes these Terms and our Privacy Policy
            (“Agreements”). You acknowledge that you have read and understood
            Agreements, and agree to be bound by them.
          </Text>
          <Text>
            If you do not agree with (or cannot comply with) Agreements, then
            you may not use the Service, but please let us know by emailing at{" "}
            <Link to={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link> so we
            can try to find a solution. These Terms apply to all visitors,
            users, and others who wish to access or use Service.
          </Text>
        </Card>
        <Card>
          <Heading level={3}> 2. Communications</Heading>
          <Text>
            By using our Service, you agree to subscribe to newsletters,
            marketing, or promotional materials and other information we may
            send. However, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at{" "}
            <Link to={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>.
          </Text>
        </Card>
        <Card>
          <Heading level={3}> 3. Purchases</Heading>
          <Text>
            If you wish to purchase any product or service made available
            through Service ("Purchase"), you may be asked to supply certain
            information relevant to your Purchase including, without limitation,
            your credit card number, the expiration date of your credit card,
            your billing address, and your shipping information.
          </Text>
          <Text>
            You represent and warrant that: (i) you have the legal right to use
            any credit card(s) or other payment method(s) in connection with any
            Purchase; and that (ii) the information you supply to us is true,
            correct, and complete.
          </Text>
          <Text>
            We may employ the use of third-party services for the purpose of
            facilitating payment and the completion of Purchases. By submitting
            your information, you grant us the right to provide the information
            to these third parties subject to our Privacy Policy.
          </Text>
          <Text>
            We reserve the right to refuse or cancel your order at any time for
            reasons including but not limited to: product or service
            availability, errors in the description or price of the product or
            service, error in your order, or other reasons.
          </Text>
          <Text>
            We reserve the right to refuse or cancel your order if fraud or an
            unauthorized or illegal transaction is suspected.
          </Text>
        </Card>
        <Card>
          <Heading level={3}> 4. Contests, Sweepstakes, and Promotions</Heading>
          <Text>
            Any contests, sweepstakes, or other promotions (collectively,
            "Promotions") made available through Service may be governed by
            rules that are separate from these Terms of Service. If you
            participate in any Promotions, please review the applicable rules as
            well as our Privacy Policy. If the rules for a Promotion conflict
            with these Terms of Service, Promotion rules will apply.
          </Text>
        </Card>
        <Card>
          <Heading level={3}> 5. Content</Heading>
          <Text>
            Content found on or through this Service are the property of{" "}
            {COMPANY_NAME} or used with permission. You may not distribute,
            modify, transmit, reuse, download, repost, copy, or use said
            Content, whether in whole or in part, for commercial purposes or for
            personal gain, without express advance written permission from us.
          </Text>
        </Card>
        <Card>
          <Heading level={3}> 6. Prohibited Uses</Heading>
          <Text>
            You may use Service only for lawful purposes and in accordance with
            Terms. You agree not to use Service:
          </Text>
          <ul>
            <li>
              In any way that violates any applicable national or international
              law or regulation.
            </li>
            <li>
              For the purpose of exploiting, harming, or attempting to exploit
              or harm minors in any way by exposing them to inappropriate
              content or otherwise.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any "junk mail", "chain letters",
              "spam", or any other similar solicitation.
            </li>
          </ul>
        </Card>
      </View>
    </Inlet>
  );
}
