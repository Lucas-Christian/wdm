import { createContext } from "react";

const FormContext = createContext();

function withForm(WrappedComponent) {
  return ({ children, ...rest }) => {
    return (
      <form {...rest}>
        <FormContext.Provider value={WrappedComponent}>
          {children}
        </FormContext.Provider>
      </form>
    );
  };
}

function Password(props) {
  return (
    <FormContext.Consumer>
      {(formContext) => (
        <input type="password" {...props} {...formContext} />
      )}
    </FormContext.Consumer>
  );
}

function Submit(props) {
  return (
    <FormContext.Consumer>
      {(formContext) => (
        <button type="submit" {...props} {...formContext}>
          Submit
        </button>
      )}
    </FormContext.Consumer>
  );
}

export const Form = {
  root: withForm(({ children }) => <>{children}</>),
  password: Password,
  submit: Submit,
};
