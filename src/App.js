import "./App.css"
import InWindow from "./components/InWindow"
import {
  Avatar,
  AppBar,
  MenuList,
  MenuListItem,
  Button,
  Toolbar,
  Separator,
  WindowContent,
  ScrollView,
  GroupBox,
  TextInput,
  Select,
  SelectNative,
  Window,
  ColorInput,
  WindowHeader,
} from "react95"
import Draggable from "react-draggable"
import { useState, useEffect } from "react"
import inandouttitle from "./inandouttitle.png"
import OutWindow from "./components/OutWindow"
import { Access229 } from "@react95/icons"
import { usePDF } from "react-to-pdf"
import example from "./example.png"
import {
  pamelaAnderson,
  original,
  rainyDay,
  vaporTeal,
  theSixtiesUSA,
  olive,
  tokyoDark,
  rose,
  plum,
  matrix,
  travel,
  aiee,
  ash,
  azureOrange,
  bee,
  blackAndWhite,
  blue,
  brick,
  candy,
  cherry,
  coldGray,
  counterStrike,
  darkTeal,
  denim,
  eggplant,
  fxDev,
  highContrast,
  honey,
  hotdogStand,
  hotChocolate,
  lilac,
  lilacRoseDark,
  maple,
  marine,
  millenium,
  modernDark,
  molecule,
  ninjaTurtles,
  peggysPastels,
  polarized,
  powerShell,
  raspberry,
  redWine,
  shelbiTeal,
  slate,
  solarizedDark,
  solarizedLight,
  spruce,
  stormClouds,
  toner,
  tooSexy,
  vermillion,
  violetDark,
  vistaesqueMidnight,
  water,
  white,
  windows1,
  wmii,
} from "react95/dist/themes"
import { ThemeProvider } from "styled-components"
function menuListFile({ onSave, onPDF }) {
  return (
    <MenuList
      style={{
        ...styles.menuList,
      }}>
      <MenuListItem onClick={onSave} style={{ ...styles.menuListItem }}>
        Save
      </MenuListItem>
      <Separator></Separator>
      <MenuListItem
        onClick={onPDF}
        style={{ color: "white", ...styles.menuListItem }}>
        Export
      </MenuListItem>
    </MenuList>
  )
}
function menuListSettings() {
  return (
    <MenuList
      style={{
        marginTop: 40,
        marginLeft: -70,
        color: "white",
        position: "absolute",
        minWidth: "100px",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        zIndex: "1",
      }}>
      <MenuListItem style={{ ...styles.menuListItem }}>
        Preferences
      </MenuListItem>
    </MenuList>
  )
}

const randomNumber = () => {
  return Math.random()
}
function App() {
  const [stickers, setStickers] = useState([])
  const [toggle, setToggle] = useState(false)
  const [onSave, setOnSave] = useState(false)
  const options = [
    { value: original, label: "Original" },
    { value: pamelaAnderson, label: "Pamela Anderson" },
    { value: rainyDay, label: "Rainy Day" },
    { value: vaporTeal, label: "Vapor Teal" },
    { value: theSixtiesUSA, label: "The Sixties USA" },
    { value: olive, label: "Olive" },
    { value: tokyoDark, label: "Tokyo Dark" },
    { value: rose, label: "Rose" },
    { value: plum, label: "Plum" },
    { value: matrix, label: "Matrix" },
    { value: travel, label: "Travel" },
    { value: aiee, label: "Aiee" },
    { value: ash, label: "Ash" },
    { value: azureOrange, label: "Azure Orange" },
    { value: bee, label: "Bee" },
    { value: blackAndWhite, label: "Black And White" },
    { value: blue, label: "Blue" },
    { value: brick, label: "Brick" },
    { value: candy, label: "Candy" },
    { value: cherry, label: "Cherry" },
    { value: coldGray, label: "Cold Gray" },
    { value: counterStrike, label: "Counter Strike" },
    { value: darkTeal, label: "Dark Teal" },
    { value: denim, label: "Denim" },
    { value: eggplant, label: "Eggplant" },
    { value: fxDev, label: "Fx Dev" },
    { value: highContrast, label: "High Contrast" },
    { value: honey, label: "Honey" },
    { value: hotdogStand, label: "Hotdog Stand" },
    { value: hotChocolate, label: "Hot Chocolate" },
    { value: lilac, label: "Lilac" },
    { value: lilacRoseDark, label: "Lilac Rose Dark" },
    { value: maple, label: "Maple" },
    { value: marine, label: "Marine" },
    { value: millenium, label: "Millenium" },
    { value: modernDark, label: "Modern Dark" },
    { value: molecule, label: "Molecule" },
    { value: ninjaTurtles, label: "Ninja Turtles" },
    { value: peggysPastels, label: "Peggy's Pastels" },
    { value: polarized, label: "Polarized" },
    { value: powerShell, label: "Power Shell" },
    { value: raspberry, label: "Raspberry" },
    { value: redWine, label: "Red Wine" },

    { value: shelbiTeal, label: "Shelbi Teal" },
    { value: slate, label: "Slate" },
    { value: solarizedDark, label: "Solarized Dark" },
    { value: solarizedLight, label: "Solarized Light" },
    { value: spruce, label: "Spruce" },
    { value: stormClouds, label: "Storm Clouds" },
    { value: toner, label: "Toner" },
    { value: tooSexy, label: "Too Sexy" },
    { value: vermillion, label: "Vermillion" },
    { value: violetDark, label: "Violet Dark" },
    { value: vistaesqueMidnight, label: "Vistaesque Midnight" },
    { value: water, label: "Water" },
    { value: white, label: "White" },
    { value: windows1, label: "Windows 1" },
    { value: wmii, label: "Wmii" },
  ]
  const [avatarEmoji, setAvatarEmoji] = useState("🐱")

  const handleAvatarChange = (event) => {
    setAvatarEmoji(event.target.value)
  }
  const storedTheme = JSON.parse(localStorage.getItem("theme"))
  const [currentTheme, setCurrentTheme] = useState(
    storedTheme ? storedTheme : options[0]
  )

  const [toggleClickFile, setToggleClickFile] = useState(false)
  const [toggleClickSettings, setToggleClickSettings] = useState(false)

  const onThemeChange = (index) => {
    setCurrentTheme(index)
  }
  const handleFileClick = () => {
    setToggleClickFile(!toggleClickFile)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSettingsClick = () => {
    setIsSettingsOpen(true)
  }

  const handleSettingsClose = () => {
    setIsSettingsOpen(false)
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(currentTheme))
  }, [currentTheme])

  return (
    <body style={{ background: `${currentTheme.value.desktopBackground}` }}>
      <ThemeProvider
        style={{ background: `${currentTheme.value.desktopBackground}` }}
        theme={currentTheme.value}>
        {isOpen && (
          <Window
            isOpen={isOpen}
            onClose={handleClose}
            title="My Pop Up"
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              color: "black",
              zIndex: 5,
              maxHeight: "max-content",
            }}>
            <WindowHeader>
              How to Export{" "}
              <Button onClick={handleClose} style={close}>
                <span className="close-icon">X</span>
              </Button>
            </WindowHeader>
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                height="20"
                width="20"
                style={{ marginRight: 3 }}
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              Control P or command P (how you would normally print a webpage)
            </h3>
            Adjust how you want to!
            <ol>
              <li>Adjust margin</li>
              <li>
                Add background and other colors by turning on Options /
                "Background Graphics"
              </li>
            </ol>
            <img style={{ height: 500 }} src={example}></img>
          </Window>
        )}
        {isSettingsOpen && (
          <Window
            isOpen={isSettingsOpen}
            onClose={handleSettingsClose}
            title="My Pop Up"
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "25%",
              zIndex: 5,
              maxHeight: "max-content",
            }}>
            <WindowHeader>
              Settings{" "}
              <Button onClick={handleSettingsClose} style={close}>
                <span className="close-icon">X</span>
              </Button>
            </WindowHeader>
            <WindowContent>
              <GroupBox
                style={{ marginBottom: "20px" }}
                label="theme"
                variant="flat">
                <Select
                  variant="flat"
                  defaultValue={currentTheme.value}
                  onChange={(option) => onThemeChange(option)}
                  options={options}
                  width="100%"
                  menuMaxHeight={160}
                />
              </GroupBox>

              <GroupBox
                label="Avatar"
                style={{ display: "flex", justifyContent: "space-between" }}
                variant="flat">
                <Avatar square size={50}>
                  <span role="img" aria-label={avatarEmoji}>
                    {avatarEmoji}
                  </span>
                </Avatar>
                <TextInput
                  type="text"
                  value={avatarEmoji}
                  onChange={handleAvatarChange}
                />
              </GroupBox>
            </WindowContent>
          </Window>
        )}
        <div className="App">
          <AppBar>
            <Toolbar
              style={{
                fontSize: "1.5vw",
                justifyContent: "flex-start",
                padding: 0,
                justifyContent: "space-between",
              }}>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}>
                <Access229 style={{ marginRight: 5 }} />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}>
                  In and out Generator
                </p>
              </div>
              <div style={{ display: "flex", paddingRight: 4 }}>
                <div>
                  <Button
                    onClick={() => handleClick()}
                    variant="raised"
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}>
                    Export
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={handleSettingsClick}
                    variant="raised"
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}>
                    Settings
                  </Button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div>
            <InWindow save={onSave}></InWindow>
            <OutWindow save={onSave}></OutWindow>
          </div>
          <footer
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
            }}>
            made by Nina Rhone w/{" "}
            <a href="https://storybook.js.org/showcase/react95-react95">
              react-95 Y2k components
            </a>
          </footer>
        </div>
      </ThemeProvider>
    </body>
  )
}

export default App

const styles = {
  menuList: {
    marginTop: 40,
    marginLeft: -40,
    position: "absolute",
    minWidth: "100px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
    cursor: "pointer",
  },
  menuListItem: {
    cursor: "pointer",
  },
}

const close = {
  float: "right",
}
