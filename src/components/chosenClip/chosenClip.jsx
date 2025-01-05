import {useEffect} from "react";
import PropTypes from "prop-types";
import ChooseButton from "../chooseButton/chooseButton";
import IframeClip from "../iframeClip/iframeClip";
import {AnimatePresence, motion} from "framer-motion";
import './chosenClip.css';
import '../clip/clip.css';
import Button from "../button/button.jsx";

const ChosenClip = ({data}) => {
  useEffect(() => {
    // TODO - ocultar de forma mais eficiente
    document.querySelector('footer').style.display = 'none';
  }, [])

  const handleSelection = () => {
    // Ação para o botão "recomeçar"
    if (typeof localStorage !== 'undefined') localStorage.clear()
    window.location.reload()
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={0}
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -50}}
        transition={{duration: 0.5, ease: "easeOut"}}
        className={'chosen-clip'}
      >
        <div className={'chosen-clip-content'}>
          <h2 className={'chosen-title'}>o melhor clipe escolhido por você</h2>
          <div className={'chosen-clip-info'}>
            <p className={'chosen-paragraph'}>
              <span>CLIPADO POR</span>&nbsp;
              <span className={'chosen-username'}>{data.username || 'Username não retornado'}</span>
            </p>
            <p className={'chosen-paragraph'}>
              <span>“{data.title || 'Título não retornado'}”</span>
            </p>
          </div>
          <Button onclick={handleSelection} classname={'restart'}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-arrow-left"
                   viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </span>
            <span>RECOMEÇAR</span>
          </Button>
        </div>
        <div className={'chosen-clip-video'}>
          <IframeClip className={'clip-iframe chosen'} id={data.id}/>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

ChosenClip.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
}

export default ChosenClip;