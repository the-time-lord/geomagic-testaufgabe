export function ContactItem({ data }) {
  const { name, phone } = data;

  return (
    <div>
      <h3>{name}</h3>
      <p>{phone}</p>
      <br />
    </div>
  );
}
