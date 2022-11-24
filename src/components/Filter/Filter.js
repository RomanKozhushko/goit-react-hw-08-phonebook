import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FindContacts, FindContactsBox, FindInput} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const { value: filter } = useSelector(state => state.filter);
  return (
    <FindContactsBox>
      <FindContacts >Find contacts by name</FindContacts >
      <FindInput
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))} />
    </FindContactsBox>
  )
}