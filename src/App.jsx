import { useState } from "react";
import CustomSelect from "./components/Dropdown";

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [radio1, setRadio1] = useState("");
  const [radio2, setRadio2] = useState("");
  const options1 = [
    { label: "2000", value: 2000 },
    { label: "2003", value: 2003 },
    { label: "2004", value: 2004 },
    { label: "2005", value: 2005 },
    { label: "2006", value: 2006 },
    { label: "2007", value: 2007 },
    { label: "2008", value: 2008 },
  ];
  const options2 = [
    { label: "Sales", value: "Sales" },
    { label: "Document Pickup", value: "Document Pickup" },
    { label: "Document Dispatch", value: "Document Dispatch" },
    { label: "Document Return", value: "Document Return" },
    { label: "Payment", value: "Payment" },
    { label: "Other", value: "Other" },
  ];
  let [progress, setProgress] = useState(0);
  const totalInputs = 6;
  const filledInputs = [
    input1,
    input2,
    select1,
    select2,
    radio1,
    radio2,
  ].filter(Boolean).length;
  progress = (filledInputs / totalInputs) * 100;

  const handleInputChange = (e, setInput) => {
    if (e.target.value.length >= 3) {
      setProgress(progress);
    }
    setInput(e.target.value);
  };
  // const handleTextInputChange = (e, setInput) => {
  //   const inputLength = e.target.value.length;
  //   setInput(e.target.length);
  //   const newProgress = inputLength >= 3 ? 50 : (inputLength / 3) * 50;

  //   setProgress(newProgress);
  // };
  function handleSelectChange1(value) {
    setSelect1(value);
  }
  function handleSelectChange2(value) {
    setSelect2(value);
  }

  const handleRadioChange = (e, setRadio) => {
    if (progress >= 33.33333333333333) {
      nextScreen();
    } else if (progress >= 80.33) {
      setProgress(100);
    }
    setRadio(e.target.value);
  };

  const nextScreen = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    }
  };
  const handldprevScreen = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };
  return (
    <>
      <div className="main_div">
        <h2>Driving License Renewal</h2>
        <div className="main-screens">
          <div>
            Progress: {progress}%
            <div className="progressBar-Style">
              <div
                style={{
                  width: `${progress == 0 ? 4 : progress}%`,

                  backgroundColor: "#fb4d4d ",
                  height: "5px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div>
            <h3>{`Let's get started!`}</h3>
            <p className="p-color">{`Add your details (As per your registered records)`}</p>
            <br />
          </div>
          <div style={{ display: currentScreen === 1 ? "flex" : "none" }}>
            <div className="form-style">
              <label>Name</label>
              <br />
              <input
                type="text"
                className="input-style"
                placeholder="Enter Name"
                value={input1}
                onChange={(e) => handleInputChange(e, setInput1)}
              />
              <br />
              <label>Nature of Driving License</label> <br />
              <div className="radio-div">
                <div className="redio-style">
                  <input
                    type="radio"
                    value="private"
                    className="radio-Style"
                    checked={radio1 === "private"}
                    onChange={(e) => handleRadioChange(e, setRadio1)}
                  />
                  Private
                </div>
                <div className="redio-style">
                  <input
                    type="radio"
                    value="commercial"
                    className="radio-Style"
                    checked={radio1 === "commercial"}
                    onChange={(e) => handleRadioChange(e, setRadio1)}
                  />
                  Commercial
                </div>
              </div>
              <label>type of Previous Driving License</label>
              <div className="radio-div">
                <div className="redio-style">
                  <input
                    type="radio"
                    value="Proer Driving License"
                    className="radio-Style"
                    checked={radio2 === "Proer Driving License"}
                    onChange={(e) => handleRadioChange(e, setRadio2)}
                  />
                  Proer Driving License
                </div>
                <div className="redio-style">
                  <input
                    type="radio"
                    value="Smart Driving License"
                    className="radio-Style"
                    checked={radio2 === "Smart Driving License"}
                    onChange={(e) => handleRadioChange(e, setRadio2)}
                  />
                  Smart Driving License
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: currentScreen === 2 ? "flex" : "none" }}>
            <div className="form-style">
              <label>Place where Driving License was issued</label>
              <br />
              <input
                type="text"
                className="input-style"
                placeholder="Enter Place Name"
                value={input2}
                onChange={(e) => handleInputChange(e, setInput2)}
              />
              <br />
              <label>Issues Year of License</label>
              <CustomSelect
                options={options1}
                labelsvalue={"Choose Issued Year of Licence"}
                onChange={handleSelectChange1}
                id="select1,"
              />
              <label>Type of Previous Driving License</label>
              <CustomSelect
                options={options2}
                labelsvalue={"Choose Expired Year of Licence"}
                onChange={handleSelectChange2}
                id="select2"
              />
            </div>
          </div>

          <button onClick={handldprevScreen}>{`< Back`}</button>
        </div>
      </div>
    </>
  );
}

export default App;
