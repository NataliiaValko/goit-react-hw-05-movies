import s from "./Title.module.css";

const Title = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

export default Title;
