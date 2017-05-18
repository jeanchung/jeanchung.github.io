import React from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import projectData from '../projectData';

const projects = projectData.reduce((obj, curr) => ({ ...obj, [curr.key]: curr }), {});

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999999,
    overflow: 'hidden',
    perspective: 1300,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    position: 'relative',
    width: '95vw',
    maxWidth: '30em',
    height: '90vh',
    border: '1px solid rgba(0, 0, 0, .2)',
    background: '#fff',
    overflow: 'scroll',
    borderRadius: '4px',
    outline: 'none',
    boxShadow: '0 5px 10px rgba(0, 0, 0, .3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
  },
};

const ProjectModal = ({ projectKey, onRequestClose }) => {
  const { title, description, img, videoEmbedUrl, githubUrl } = projects[projectKey];
  return (
    <Modal
      onRequestClose={onRequestClose}
      effect={Effect.ScaleUp}
      style={modalStyles}
    >
      <div className="project-modal-container">
        <div className="project-modal-content">
          <div className="modal-header-row">
            <div className="invisible-div" />
            <h3 className="modal-title green">{title}</h3>
            <button className="btn btn-modal-close" onClick={ModalManager.close}>
              x
            </button>
          </div>
          {
             videoEmbedUrl ?
               <div className="video">
                 <iframe
                   width="672"
                   height="378"
                   src={videoEmbedUrl}
                   frameBorder="0"
                   allowFullScreen
                 />
               </div>
             : <div className="project-modal-image">
               <img src={img} />
             </div>
           }
          <div className="project-modal-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="project-modal-footer">
        <a href={githubUrl}>
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
    </Modal>
  );
};

export default ProjectModal;
