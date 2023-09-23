import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { buttonClasslist } from "../../utils/commonClasslist";

export default function ButtonPillNav({ title, path, ...props }) {
  return (
    <Link to={path} className={buttonClasslist} {...props} >
      {title}
    </Link>
  );
}

ButtonPillNav.propTypes = {
  title: PropTypes.string,
  title: PropTypes.string,
};