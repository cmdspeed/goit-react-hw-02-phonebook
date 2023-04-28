export const PhoneBookList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map((contact, id) => (
      <>
        <li key={id}>
          {contact.name}: {contact.number}
        </li>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </>
    ))}
  </ul>
);
