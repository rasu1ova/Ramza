import React from "react";

function Contact() {
  return (
    <section className="pad home">
      <h2 className="heading white">Bog'lanish</h2>
      <form className="form">
        <label htmlFor="text" className="inputs">
          <input type="text" name="text" id="text" placeholder="Ismingiz..." />
        </label>
        <label htmlFor="email" className="inputs">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Pochtangiz..."
          />
        </label>
        <label htmlFor="number" className="inputs">
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Raqamingiz..."
          />
        </label>
        <textarea
          className="textarea"
          placeholder="To'liqroq yozishingiz mumkin"
          name=""
          id=""
          cols="30"
          rows="10"></textarea>
        <div className="form--btn">
          <button className="btn">Yuborish</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
