export const PhoneBookList = ({ contacts }) => (
  <ul>
    {contacts.map((contact, id) => (
      <li key={id}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);
