import { useSelector, useDispatch } from 'react-redux';

import { getFilterWord } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(getFilterWord);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        className={s.filterInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
        onBlur={e => dispatch(changeFilter(''))}
      />
    </label>
  );
}
