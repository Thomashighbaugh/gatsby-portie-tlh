import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Icons = () => (
  <div className="social-media-icons">
    <a
      href="https://www.linkedin.com/in/thomas-leon-highbaugh"
      target="blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://github.com/Thomashighbaugh" target="blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  </div>
);

export default Icons;
