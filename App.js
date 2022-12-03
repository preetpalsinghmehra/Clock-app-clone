import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import GlobalStyle from "./Constants/GlobalStyle";
import Navigation from "./Navigation";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
        <Navigation />
      </SafeAreaView>
    </TailwindProvider>
  );
}
