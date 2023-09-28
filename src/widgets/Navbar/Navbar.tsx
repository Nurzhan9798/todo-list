import classNames from "classnames";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <header className={classNames(cls.Navbar, [className])}>
      <Link to={"/projects"}>Projects</Link>
    </header>
  );
};
