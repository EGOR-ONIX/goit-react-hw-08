import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <MagnifyingGlass
      visible={true}
      height="100"
      width="100"
      ariaLabel="magnifying-glass-loading"
      wrapperClass={css["magnifying-glass-wrapper"]}
      glassColor="#aec6ce"
      color="#000000"
    />
  );
}
