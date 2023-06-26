import { addFilmCardToLibrary } from "./filmCard/addFilmCard";
import { deleteFilmCardFromLibrary } from "./filmCard/deleteFilmCard";


export function handleFilm(e) {
  const id = e.target.dataset.id;

  if (e.target.hasAttribute('data-add')) {
    setBtnProp(e.target, addOps);

    addFilmCardToLibrary(id);

  } else if (e.target.hasAttribute('data-remove')) {
    setBtnProp(e.target, removeOps);

    deleteFilmCardFromLibrary(id);
  }
}


const removeOps = {
  addAttr: 'data-add',
  removeAttr: 'data-remove',
  btnText: 'Add to my library',
}

const addOps = {
  addAttr: 'data-remove',
  removeAttr: 'data-add',
  btnText: 'Remove from my library',
};

function setBtnProp(el, props) {
  const { addAttr, removeAttr, btnText } = props;

  el.removeAttribute(removeAttr);
  el.setAttribute(addAttr, '');
  el.textContent = btnText;
}