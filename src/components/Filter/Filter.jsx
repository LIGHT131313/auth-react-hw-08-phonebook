import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => {
          dispatch(filterContact(e.target.value));
        }}
      />
    </div>
  );
};
