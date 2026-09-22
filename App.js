import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style/Styles.js";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import MainPage from "./pages/MainPage.js";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.screen]}>
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        <MainPage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
