import { useContext } from "react";
import ImagenesContext from "../context/ImagenesProvider";

function useImages() {
  return useContext(ImagenesContext);
}

export default useImages;
