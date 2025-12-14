import ReactDOM from "react-dom/client";
import TitleBar from "./TitleBar/Pages/TitleBar";
import FilePage from "./SendFile/Pages/FilePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <TitleBar />
    <FilePage />
  </>
);