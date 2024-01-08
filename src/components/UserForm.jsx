import { useState } from "react";
import "./UserForm.css";

export const UserForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [checkbox, setCheckbox] = useState();

  function handleSubmitTodo() {
    const isFormValid =
      firstName.trim().length !== 0 &&
      lastName.trim().length !== 0 &&
      age.length !== 0;

    if (isFormValid) {
      const newTodo = {
        id: Date.now().toString(),
        firstname: firstName,
        lastname: lastName,
        ages: age,
        isMarried: checkbox,
      };
      onSubmit(newTodo);

      setFirstName("");
      setLastName("");
      setAge("");
      setCheckbox(false);
    } else {
      alert("Баарын толтурунуз :)");
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>About You</h2>
      <input
        value={firstName}
        type="text"
        placeholder="firstname..."
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        value={lastName}
        type="text"
        placeholder="lastname"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        value={age}
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="checkbox">Женат?</label>
      <input
        className="checkbox"
        value={checkbox}
        type="checkbox"
        onChange={(e) => setCheckbox(e.target.checked)}
      />
      <button onClick={handleSubmitTodo}>Add</button>
    </form>
  );
};
