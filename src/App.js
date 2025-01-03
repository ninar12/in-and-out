import "./App.css"
import InWindow from "./components/InWindow"
import {
  Avatar,
  AppBar,
  Button,
  Toolbar,
  Anchor,
  WindowContent,
  GroupBox,
  TextInput,
  Select,
  Window,
  WindowHeader,
} from "react95"
import Draggable from "react-draggable"
import { useState, useEffect } from "react"
import OutWindow from "./components/OutWindow"
import { Access229, Password1000 } from "@react95/icons"
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

function App() {
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

  const handleAvatarChange = (event) => {
    setCurrentAvatar(event.target.value)
  }

  const handleTimeChange = (e) => {
    e.preventDefault()
    setCurrentTime(e.target.value)
  }
  const onThemeChange = (index) => {
    setCurrentTheme(index)
  }

  const storedTheme = JSON.parse(localStorage.getItem("theme"))
  const storedAvatar = JSON.parse(localStorage.getItem("avatar"))
  const storedTime = JSON.parse(localStorage.getItem("time"))

  const [currentTheme, setCurrentTheme] = useState(
    storedTheme ? storedTheme : options[0]
  )

  const [currentAvatar, setCurrentAvatar] = useState(
    storedAvatar ? storedAvatar : "🐱"
  )

  const [currentTime, setCurrentTime] = useState(
    storedTime ? storedTime : "2025"
  )

  const isMobile = window.matchMedia("(max-width: 768px)").matches

  const [isOpen, setIsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }

  const handleSettingsClick = (e) => {
    e.preventDefault()
    setIsSettingsOpen(true)
  }

  const handleSettingsClose = (e) => {
    e.preventDefault()
    setIsSettingsOpen(false)
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(currentTheme))
  }, [currentTheme])

  useEffect(() => {
    localStorage.setItem("avatar", JSON.stringify(currentAvatar))
  }, [currentAvatar])

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(currentTime))
  }, [currentTime])

  return (
    <body
      style={{
        height: "100vh",
        background: `${currentTheme.value.desktopBackground}`,
      }}>
      <ThemeProvider
        style={{ background: `${currentTheme.value.desktopBackground}` }}
        theme={currentTheme.value}>
        {isOpen && (
          <Draggable handle=".window-header" cancel=".button-undraggable">
            <Window
              isOpen={isOpen}
              onClose={handleClose}
              className="window-header"
              title="My Pop Up"
              style={{
                position: "absolute",
                top: "8%",
                left: "5%",
                zIndex: 5,

                fontSize: isMobile ? "smaller" : "",
                width: isMobile ? "300px" : "40vw",
                maxHeight: "max-content",
              }}>
              <WindowHeader className="window-header">
                How to Export{" "}
                <Button
                  className="button-undraggable"
                  onClick={handleClose}
                  style={close}>
                  <span className="close-icon">X</span>
                </Button>
              </WindowHeader>
              <h3>
                <Password1000
                  height={isMobile ? 10 : 20}
                  width={isMobile ? 10 : 20}
                  style={{ marginRight: 2 }}
                />
                Control P or command P (how you would normally print a webpage)
                or just screenshot it!
              </h3>
              Adjust how you want to!
              <ol>
                <li>Adjust margin</li>
                <li>
                  Add background and other colors by turning on Options /
                  "Background Graphics"
                </li>
              </ol>
              <p>Example:</p>
              <img
                style={{ height: isMobile ? 190 : 250 }}
                alt="example-in-and-out"
                src={example}></img>
            </Window>
          </Draggable>
        )}
        {isSettingsOpen && (
          <Draggable
            handle=".window-title"
            bounds={{ bottom: "5px" }}
            cancel=".button-undraggable">
            <Window
              className="window-title"
              isOpen={isSettingsOpen}
              onClose={handleSettingsClose}
              title="My Pop Up"
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: isMobile ? "300px" : "30vw",
                zIndex: 5,
                fontSize: isMobile ? "smaller" : "",
                maxHeight: "max-content",
              }}>
              <WindowHeader>
                Settings{" "}
                <Button
                  onClick={handleSettingsClose}
                  className="button-undraggable"
                  style={close}>
                  <span className="close-icon">X</span>
                </Button>
              </WindowHeader>
              <WindowContent>
                <GroupBox
                  style={{
                    marginBottom: "20px",
                    fontSize: isMobile ? "smaller" : "",
                  }}
                  label="theme"
                  variant="flat">
                  <Select
                    variant="flat"
                    className="button-undraggable"
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
                    <span role="img" aria-label={currentAvatar}>
                      {currentAvatar}
                    </span>
                  </Avatar>
                  <TextInput
                    className="button-undraggable"
                    type="text"
                    value={currentAvatar}
                    onChange={handleAvatarChange}
                  />
                </GroupBox>
                <GroupBox
                  label="when is this in and out list for?"
                  style={{ display: "flex", justifyContent: "space-between" }}
                  variant="flat">
                  <TextInput
                    className="button-undraggable"
                    type="text"
                    placeholder="2025"
                    value={currentTime}
                    onChange={handleTimeChange}
                  />
                </GroupBox>
              </WindowContent>
            </Window>
          </Draggable>
        )}
        <div className="App">
          <AppBar>
            <Toolbar
              style={{
                fontSize: "1.5vw",
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
                    fontSize: isMobile ? "3vw" : "16px",
                    fontWeight: "bold",
                  }}>
                  In and out Generator by {currentAvatar ? currentAvatar : ""}
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
                      fontSize: isMobile ? "3vw" : "",
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
                      fontSize: isMobile ? "3vw" : "",
                    }}>
                    Settings
                  </Button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div>
            <InWindow time={currentTime}></InWindow>
            <OutWindow time={currentTime}></OutWindow>
          </div>
          <footer
            style={{
              position: "absolute",
              bottom: "1vh",
              left: "1vw",
              color: "gray",
            }}>
            made by Nina Rhone w/
            <Anchor href="https://storybook.js.org/showcase/react95-react95">
              react-95 Y2k components
            </Anchor>
          </footer>
        </div>
      </ThemeProvider>
    </body>
  )
}

export default App

const close = {
  float: "right",
}
