import {Flowbite} from "flowbite-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import Header from "./components/Header.tsx";
import customTheme from './customTheme';
import MenuTabs from "./components/MenuTabs.tsx";
import MyFooter from "./components/MyFooter.tsx";

function App() {

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Header />
        <MenuTabs />
        <MyFooter />
        <Analytics />
        <SpeedInsights />
      </Flowbite>
    </>
  )
}

export default App