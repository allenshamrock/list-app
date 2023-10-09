/* eslint-disable react/prop-types */

const List = (props) => {
  const { items } = props;
  if (!Array.isArray(items)) {
    return <p>Items is not an array</p>; 
  }
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
