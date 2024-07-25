import ThemeWrapper from "./components/componentWrapper/ThemeWrapper";
import { ThemeModeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";


export default function App() {

  return (
    <AuthProvider>
      <ThemeModeProvider>
          <ThemeWrapper />
      </ThemeModeProvider>
    </AuthProvider>
  )
}