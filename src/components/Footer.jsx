import style from "./Footer.module.scss";

export const Footer = () => {
  const footerContent = [
    { text: "Link 1" },
    { text: "Link 2" },
    { text: "Link 3" },
    { text: "Link 4" },
  ];

  return (
    <footer className={style.footer}>
      <div>
        {footerContent.map((content) => {
          return <p>{content.text}</p>;
        })}
      </div>
      <div>
        {footerContent.map((content) => {
          return <p>{content.text}</p>;
        })}
      </div>
      <div>
        {footerContent.map((content) => {
          return <p>{content.text}</p>;
        })}
      </div>
    </footer>
  );
};
