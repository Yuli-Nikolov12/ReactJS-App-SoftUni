import ThemeWrapper from "./components/componentWrapper/ThemeWrapper";
import { ThemeModeProvider } from "./contexts/ThemeContext";


export default function App() {

  return (
    <ThemeModeProvider>
      <ThemeWrapper />
    </ThemeModeProvider>
  )
}