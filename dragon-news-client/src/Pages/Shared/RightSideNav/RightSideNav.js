import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaUserSecret,
} from "react-icons/fa";
import { VscTerminalTmux } from "react-icons/vsc";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroupItem className="mb-2">
            <FaFacebook /> Facebook
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaYoutube />
            Youtube
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaTwitter />
            Twitter
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaWhatsapp />
            Whatsapp
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaDiscord />
            Discord
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaUserSecret />
            Privacy Policy
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <VscTerminalTmux />
            Terms & Condition
          </ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
