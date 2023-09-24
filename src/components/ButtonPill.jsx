import PropTypes from "prop-types";
import { buttonClasslist } from "../../utils/commonClasslist";

export default function ButtonPill({ title, btnType, ...props }) {

  const buttonType = btnType;

  return (
    <div>
      {
        buttonType === 'input' ?
        <input type='submit' className={buttonClasslist} value={'Submit'} />
        :
        <button className={buttonClasslist} {...props} >
          {title} button
        </button>
      }
    </div>

  );
}

ButtonPill.propTypes = {
  title: PropTypes.string,
};