import { MutatingDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#212121"
      secondaryColor="#212121"
      radius="15"
      ariaLabel="mutating-dots-loading"
      wrapperClass={css["mutating-dots-wrapper"]}
    />
  );
}
