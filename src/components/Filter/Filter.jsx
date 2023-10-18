import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { InputFilter } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <InputFilter
        type="text"
        value={filter}
        placeholder="Find contacts by name"
        aria-label="Search contact in list"
        onChange={e => {
          dispatch(filterContact(e.target.value));
        }}
      />
    </div>
  );
};
