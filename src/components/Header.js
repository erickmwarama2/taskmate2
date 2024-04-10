import Cert from "../assets/ubs-ms-cert.png";
import "./header.css";

export const Header = () => {
  return (
    <div>
        <img className="CertImage" src={Cert} alt="certificate" />
    </div>
  )
}
