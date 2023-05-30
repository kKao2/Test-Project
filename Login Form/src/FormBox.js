export default function FormBox({ type, id, placeholder, value, handleOnChange, isValid, validText }) {
   return (
      <div className="form__box">
         <input
            type={type}
            className={isValid ? "form__input is__valid" : "form__input is__invalid"}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleOnChange(e)}
         />
         <label htmlFor={id} className={isValid ? "form__label is__valid" : "form__label is__invalid"}>  {placeholder}{validText}
         </label>
         <div className="form__shadow"></div>
      </div>
   )
}