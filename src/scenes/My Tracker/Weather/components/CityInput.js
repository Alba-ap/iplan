import React from "react";
import "./CityInput.css";

export default class CityInput extends React.Component {
  render(props) {
    const onKlickHandler = async (e) => {
      e.persist();
      const eventKey = e.which ? e.which : e.keyCode;
      const city = e.target.value;

      // check if input contains only letters after Enter was pressed
      if (eventKey === 13) {
        if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
          e.target.classList.add("loading");

          if (await this.props.makeApiCall(city))
            e.target.placeholder = "نام شهرت رو به انگلیسی وارد کن:";
          else e.target.placeholder = "شهر شما پیدا نشد مجدد تلاش کنید";
        } else e.target.placeholder = "لطفا یک نام معتبر وارد نمایید";
        e.target.classList.remove("loading");
        e.target.value = "";
      }
    };

    const style = {
      top: this.props.city ? "-380px" : "-20px",
      width: "600px",
      display: "inline-block",
      padding: "10px 0px 10px 30px",
      textAlign: "center",
      lineHeight: "120%",
      position: "relative",
      borderRadius: "20px",
      outline: "none",
      fontSize: "20px",
      fontFamily: "Yekan",
      transition: "all 0.5s ease-out",
    };

    return (
      <input
        className="city-input"
        style={style}
        type="text"
        placeholder="اسم شهرت رو به انگلیسی وارد کن:"
        onKeyPress={onKlickHandler}
      />
    );
  }
}
