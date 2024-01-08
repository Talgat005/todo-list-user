import "./UserRender.css";
export const UserRender = ({ renderTodo }) => {
  return (
    <div>
      {renderTodo.map((item) => (
        <ul key={item.id}>
          <li>
            <h3>{item.firstname}</h3>
            <h3>{item.lastname}</h3>
            <p>{item.ages} лет</p>
            <b>{item.isMarried ? "женат" : "не женат"}</b>
          </li>
        </ul>
      ))}
    </div>
  );
};
