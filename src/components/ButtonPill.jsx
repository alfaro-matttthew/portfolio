import PropTypes from "prop-types";
import { buttonClasslist } from "../../utils/commonClasslist";

export default function ButtonPill({ title, ...props }) {
  return (
    <button className={buttonClasslist} /*{...props}*/ >
      {title}
    </button>
  );
}

ButtonPill.propTypes = {
  title: PropTypes.string,
};