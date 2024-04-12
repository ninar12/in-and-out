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
  Window,
  WindowHeader,
} from "react95"
import { useState, useEffect } from "react"
import inandouttitle from "./inandouttitle.png"
import OutWindow from "./components/OutWindow"
import { Access229 } from "@react95/icons"
import { usePDF } from "react-to-pdf"
import example from "./example.png"
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
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
  }
  const [toggleClickFile, setToggleClickFile] = useState(false)
  const [toggleClickSettings, setToggleClickSettings] = useState(false)

  const handleFileClick = () => {
    setToggleClickFile(!toggleClickFile)
  }

  const handleSettingsClick = () => {
    setToggleClickSettings(!toggleClickSettings)
  }

  const handleSave = () => {
    setOnSave(true)
  }
  console.log(onSave)

  const { toPDF, targetRef } = usePDF({
    filename: `in-and-out.pdf`,
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      {isOpen && (
        <Window
          isOpen={isOpen}
          onClose={handleClose}
          title="My Pop Up"
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            color: "white",
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
              Add background and other colors by turning on Options -->
              "Background Graphics"
            </li>
          </ol>
          <img style={{ height: 500 }} src={example}></img>
        </Window>
      )}
      <div className="App" ref={targetRef}>
        <AppBar>
          <Toolbar
            style={{
              fontSize: "1.5vw",
              justifyContent: "flex-start",
              color: "white",
              backgroundColor: "pink",
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
                  color: "#FF0090",
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
                    color: "white",
                    position: "relative",
                    display: "inline-block",
                  }}>
                  Export
                </Button>
                {toggleClickFile &&
                  menuListFile({ onSave: handleSave, onPdf: toPDF })}
              </div>
              <div>
                <Button
                  //   onClick={handleSettingsClick}
                  variant="raised"
                  style={{
                    color: "white",
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
            color: "white",
            bottom: 0,
            left: 3,
          }}>
          made by Nina Rhone w/{" "}
          <a href="https://storybook.js.org/showcase/react95-react95">
            react-95 Y2k components
          </a>
        </footer>
      </div>
    </>
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
    color: "white",
  },
}

const close = {
  backgroundColor: "white",
  float: "right",
}
