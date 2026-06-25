import { useState } from "react";
import "./App.scss";

function App() {
  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(52.5);
  const [height, setHeight] = useState(167);
  const [extraActivity, setExtraActivity] = useState("");

  const bmr = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  const tdee = Math.round(bmr * 1.2 + extraActivity);
  const deficit = Math.round(tdee * 0.85);

  return (
    <>
      <div className="personal-title">
        <h1>Калькулятор калорій</h1>
      </div>
      <div className="calc-container">
        <div className="results-grid">
          <div className="card">
            <h2>Базовий обмін (BMR)</h2>
            <div className="value">{bmr} ккал</div>
          </div>
        </div>
        <div className="results-grid">
          <div className="card">
            <h2>Підтримка (TDEE)</h2>
            <div className="value">{tdee} ккал</div>
          </div>
        </div>
        <div className="results-grid">
          <div className="card">
            <h2>Дефіцит</h2>
            <div className="value">{deficit} ккал</div>
          </div>
        </div>
      </div>

      <div className="calc-inputs">
        <label>
          Вік, років:
          <input
            type="number"
            value={age}
            onChange={(e) =>
              setAge(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
            onWheel={(event) => event.target.blur()}
            placeholder="0"
          />
        </label>

        <label>
          Вага, кг:
          <input
            type="number"
            value={weight}
            onChange={(e) =>
              setWeight(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
            onWheel={(event) => event.target.blur()}
            placeholder="0"
          />
        </label>

        <label>
          Зріст, см:
          <input
            type="number"
            value={height}
            onChange={(e) =>
              setHeight(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
            onWheel={(event) => event.target.blur()}
            placeholder="0"
          />
        </label>

        <label>
          Додаткова активність (ккал):
          <input
            type="number"
            value={extraActivity}
            onChange={(e) =>
              setExtraActivity(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
            onWheel={(event) => event.target.blur()}
            placeholder="0"
          />
        </label>
      </div>
    </>
  );
}

export default App;
