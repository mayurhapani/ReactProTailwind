import Style from "../styles/Style.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Add() {
  const nevigetor = useNavigate();
  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem("display")) || []);
  const [input, setInput] = useState({});
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  useEffect(() => {
    setInput({ ...input, hobbies: hobbies });
  }, [hobbies]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    const selectedHobby = e.target.value;
    if (e.target.checked) {
      setHobbies((prevHobbies) => [...prevHobbies, selectedHobby]);
    } else {
      setHobbies((prevHobbies) => prevHobbies.filter((hobby) => hobby !== selectedHobby));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("display", JSON.stringify([...display, input]));
    alert("Registration Successful");
    nevigetor("/pr7/");
  };

  return (
    <>
      <div className={Style.container}>
        <div className={Style.loginWrap}>
          <div className={Style.loginHtml}>
            <h2 className={Style.tab}>Sign In</h2>

            <div className={Style.loginForm}>
              <form onSubmit={handleSubmit} className={Style.signInHtm}>
                <div className={Style.group}>
                  <label className={Style.label}>Your Name</label>
                  <input
                    id="user"
                    type="text"
                    className={Style.input}
                    value={input ? input.user : ""}
                    onChange={handleChange}
                    name="user"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Email Id</label>
                  <input
                    id="email"
                    type="email"
                    className={Style.input}
                    value={input ? input.email : ""}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Choose Password</label>
                  <input
                    id="pass"
                    type="password"
                    className={Style.input}
                    value={input ? input.pass : ""}
                    onChange={handleChange}
                    name="pass"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Gender</label>
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    checked={input.gender === "male" ? true : false}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="ps-2 pe-20">
                    Male
                  </label>
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value={"female"}
                    checked={input.gender === "female" ? true : false}
                    // checked={input ? input.uGender === "female" : false}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="ps-2">
                    Female
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Hobbies</label>
                  <input
                    id="readding"
                    name="hobbies"
                    value={"Reading"}
                    type="checkbox"
                    onChange={handleSelect}
                    // checked={input.hobbies.includes("Reading") ? true : false}
                  />
                  <label htmlFor="readding" className="ps-2 pe-10">
                    Reading
                  </label>
                  <input
                    id="cycling"
                    name="hobbies"
                    value={"Cycling"}
                    type="checkbox"
                    onChange={handleSelect}
                    // checked={input.hobbies.includes("Cycling") ? true : false}
                  />
                  <label htmlFor="cycling" className="ps-2 pe-10">
                    Cycling
                  </label>
                  <input
                    id="traveling"
                    name="hobbies"
                    value={"Traveling"}
                    type="checkbox"
                    onChange={handleSelect}
                    // checked={input.hobbies.includes("Traveling") ? true : false}
                  />
                  <label htmlFor="traveling" className="ps-2">
                    Traveling
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Select Course</label>
                  <select id="corse" className={Style.checkLabel} onChange={handleChange} name="corse">
                    <option value="" className={Style.checkInput} disabled selected>
                      Select Your Course
                    </option>
                    <option value="PHP" className={Style.checkInput}>
                      PHP
                    </option>
                    <option value="Full Stack" className={Style.checkInput}>
                      Full Stack
                    </option>
                    <option value="Flutter" className={Style.checkInput}>
                      Flutter
                    </option>
                    <option value="Front End" className={Style.checkInput}>
                      Front End
                    </option>
                  </select>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Your Address</label>
                  <textarea id="address" className={Style.input} rows="3" onChange={handleChange} name="address"></textarea>
                </div>
                <div className={Style.group}>
                  <input type="submit" className={Style.button} value={"Register"} />
                </div>
                <div className={Style.hr}></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
