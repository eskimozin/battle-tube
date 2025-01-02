import {useState} from "react";
import PropTypes from "prop-types";
import './chooseButton.css';

const ChooseButton = ({index, handleSelection, restart}) => {
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    handleSelection(index)
    setSelected(true)
    setDisabled(true)

    // Simular um tempo de espera para a seleção
    setTimeout(() => {
      setSelected(false)
      setDisabled(false)
    }, 100)
  }

  if (!restart) {
    return (<button type={"button"} className="choose-button" disabled={disabled} onClick={handleClick}>
        {selected ? 'ESCOLHIDO!' : 'ESCOLHER ESTE'}
      </button>);
  }

  return (<button type={"button"} className="choose-button restart" disabled={disabled} onClick={handleClick}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left"
             viewBox="0 0 16 16">
          <path fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </span>
      <span>{selected ? 'AGUARDE...' : 'RECOMEÇAR'}</span>
    </button>);
}

ChooseButton.propTypes = {
  index: PropTypes.number.isRequired, handleSelection: PropTypes.func.isRequired, restart: PropTypes.bool
}

export default ChooseButton;