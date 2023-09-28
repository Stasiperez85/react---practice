import { useState } from "react";

const UserInput = () => {
    const [userInput, setUserInput] = useState({
        'current-savings': 10000,
        'yearly-contributions':1200,
        'expected-return': 7,
        'duration': 10
    });

  const submitHandler = (event) => {
    event.preventDefault();
    //...
    console.log("SUBMIT");
  };

  const resetHandler = () => {
    //...
    console.log("RESET");
  };

  const inputChangehandler = (input, value) => {
    setUserInput((prevInput) => {
        return {
            ...prevInput,
            [input]: value,
        };
    });
  };        

  return (
    <form onsubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangehandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangehandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangehandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangehandler("duration", event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
