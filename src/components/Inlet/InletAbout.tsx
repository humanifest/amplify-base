import { COMPANY_NAME } from "@/env/env.api";
import Inlet from "./Inlet";
import { Heading } from "@aws-amplify/ui-react";
import { ROUTES } from "@/src/contexts/routes";
import { Link } from "react-router-dom";

export default function PageAbout() {
  return (
    <Inlet id="about">
      <Heading level={2}>About Us</Heading>
      <Heading level={4}>Innovative Solutions, Tailored to Your Needs</Heading>

      <p>
        Welcome to <strong>{COMPANY_NAME}</strong>, where we bring your digital
        vision to life. As a dynamic and forward-thinking software company, we
        specialize in creating customizable software solutions that cater to the
        unique needs of each client. Our passion lies in web development and
        cloud infrastructure, ensuring that we stay at the forefront of
        technological advancements to provide you with cutting-edge, reliable,
        and scalable solutions.
      </p>

      <Heading level={4}>Expertise Meets Creativity</Heading>

      <p>
        Our team is comprised of highly skilled professionals, each bringing a
        wealth of experience in software development, cloud technology, and
        digital innovation. We believe in a collaborative approach, working
        closely with our clients to understand their specific challenges and
        objectives. This synergy allows us to craft tailor-made solutions that
        not only solve problems but also drive growth and efficiency.
      </p>

      <Heading level={4}>Our Services</Heading>
      <ul>
        <li>
          <Heading level={6}>Custom Web Development</Heading>: From responsive
          websites to complex web applications, our web development services are
          designed to offer seamless, user-friendly digital experiences that
          resonate with your target audience.
        </li>
        <li>
          <Heading level={6}>Cloud Infrastructure Solutions</Heading>: We
          empower businesses with robust and secure cloud infrastructure
          services. Whether it's cloud migration, optimization, or ongoing
          management, our experts ensure your cloud journey is smooth and
          beneficial.
        </li>
        <li>
          <Heading level={6}>Software Customization</Heading>: Understanding
          that one size does not fit all, we offer extensive software
          customization services. Our solutions are designed to align perfectly
          with your business processes, goals, and future growth.
        </li>
      </ul>

      <Heading level={4}>Commitment to Excellence</Heading>

      <p>
        Quality and customer satisfaction are at the heart of everything we do.
        We are committed to delivering not just solutions, but value that makes
        a tangible difference in your business. Our agile methodologies,
        combined with our dedication to excellence, ensure that we deliver
        projects on time, within budget, and above expectations.
      </p>

      <Heading level={4}>Let's Build Something Great Together</Heading>

      <p>
        At <strong>{COMPANY_NAME}</strong>, your vision is our mission. We are
        excited to partner with you to create software solutions that not only
        meet today's needs but also propel you into the future. Contact us to
        discuss how we can turn your ideas into reality.
      </p>

      <p>
        Thank you for considering <strong>{COMPANY_NAME}</strong> for your
        software development needs. We look forward to the opportunity to work
        with you and bring your digital dreams to life.
      </p>

      <p>
        <Link to={ROUTES.contact._}>Contact Us</Link>
      </p>
    </Inlet>
  );
}
