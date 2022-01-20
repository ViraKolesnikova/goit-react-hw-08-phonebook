import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

import {
  useDeleteContactMutation,
  useEditContactMutation,
} from '../../redux/contacts/contacts-reducer';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, phoneNumber }) {
  const [changingContact, setChangingContact] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phoneNumber);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [editContact, { isLoading: isEditing }] =
    useEditContactMutation();

    const editHandler = () => {
      editContact({
        changedContact: { name: contactName, number: contactPhone },
        id,
      });
      setChangingContact(false);
    };
  
      
  return (
    <>
      <li className={s.contactListItem}>
        {!changingContact ? (
          <>
            <p className={s.contactContent}>
              {name}: <span>{phoneNumber}</span>
            </p>
            <button
              className={s.contactOptionBtn}
              type="button"
              onClick={() => setChangingContact(true)}
            >
              <EditRoundedIcon />
            </button>
          </>
        ) : (
          <>
            <input
              className={s.contactChangeInput}
              value={contactName}
              onChange={e => setContactName(e.target.value)}
            />
            <input
              className={s.contactChangeInput}
              value={contactPhone}
              autoFocus
              onChange={e => setContactPhone(e.target.value)}
            />
            <button
              className={s.contactOptionBtn}
              type="button"
              onClick={() => editHandler()}
            >
              {isEditing ? (
                <Oval
                  arialLabel="loading-indicator"
                  height="20"
                  width="20"
                  color="white"
                />
              ) : (
                <DoneOutlineRoundedIcon />
              )}
            </button>
          </>
        )}

        <button
          className={s.contactOptionBtn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          {isDeleting ? (
            <Oval
              arialLabel="loading-indicator"
              height="20"
              width="20"
              color="white"
            />
          ) : (
            <DeleteForeverRoundedIcon />
          )}
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
