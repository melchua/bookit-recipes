import React from 'react';
import Modal from 'react-modal';

const RecipeIngredientsModal = (props) => (
    <Modal
        isOpen={!!props.isOpen}
        contentLabel='Test Modal'
        onRequestClose={props.handleCloseModal}
        shouldCloseOnOverlayClick={true}
    >

    {console.log(props.isOpen)}
    Test Data

    <button onClick={props.handleCloseModal}>Close</button>
    </Modal>
);

export default RecipeIngredientsModal;