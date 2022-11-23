import { ListItem, NumByOrder, TelName, TelNum, DelBtn } from "./ContactItem.styled";
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from "API/contactsAPI";

export function ContactItem({ contact, idx }) {
    const [deleteContact] = useDeleteContactMutation()
    return (
        <ListItem>
            <NumByOrder>{idx + 1}</NumByOrder>
            <TelName>{contact.name}:</TelName> <TelNum>{contact.number}</TelNum>
            <DelBtn type="button" onClick={() => deleteContact(contact.id)}>Delete</DelBtn>
        </ListItem>
    )
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  idx: PropTypes.number,
}
