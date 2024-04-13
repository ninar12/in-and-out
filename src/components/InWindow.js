import {
  Button,
  Frame,
  Separator,
  MenuList,
  MenuListItem,
  TextInput,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95"
import styled from "styled-components"
import { useState, useEffect } from "react"
import Draggable from "react-draggable"
import { Resizable } from "react-resizable"
import { Wmsui322224 } from "@react95/icons"

const menu = {
  width: "95%",
  margin: "1vw",
  backgroundColor: "rgba(255,255,255,0.4)",
}
const windowTitle = {}

const frame = {
  display: "flex",
  flexDirection: "row",
  alignContent: "middle",
  marginBottom: "1vh",
  flexWrap: "wrap", // Allow items to wrap to the next line on smaller screens
  zIndex: "0",
}
const textinput = {
  maxWidth: "70%",
  marginLeft: "1vw",
  zIndex: "1",
}

const close = {
  float: "right",
}

const deleteButton = {}
const add = {
  float: "end",
  marginLeft: "4vw",
}

function InWindow({ save }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleDrag = (e, data) => {
    e.stopPropagation()

    setPosition({ x: data.x, y: data.y })
  }
  const [inValue, setInValue] = useState("")
  const [inItems, setInItems] = useState(() => {
    const savedInItems = localStorage.getItem("inItems")
    return savedInItems ? JSON.parse(savedInItems) : []
  })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [popup, setPopup] = useState(false)

  const deleteInItem = (index) => {
    const newInItems = [...inItems]
    newInItems.splice(index, 1)
    setInItems(newInItems)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inValue === "") {
      console.log("empty text")
      return
    }
    setInItems((prevItems) => [...prevItems, inValue]) // Use a function to update the state correctly
    setInValue("")
    e.stopPropagation()
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e) // Call the function associated with the button
    }
  }
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const background = {
    maxWidth: isSmallScreen ? "60vw" : "40vw",
    overflow: "auto",
    maxHeight: isSmallScreen ? "80vh" : "70vh",
    padding: isSmallScreen ? "2vw" : "1vw 1vh",
    boxShadow: "-4px -6px 80px 10px rgba(0,255,0,0.3)",
  }

  useEffect(() => {
    console.log("Is Small Screen:", isSmallScreen)
  }, [isSmallScreen])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600) // Adjust the threshold as needed
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    localStorage.setItem("inItems", JSON.stringify(inItems))
  }, [inItems])

  return (
    <>
      <Draggable onDrag={handleDrag} position={position} touchAction="none">
        <Window style={background} className="window">
          <WindowHeader style={windowTitle} className="window-title">
            <span>in for 2024</span>
            <Button style={close}>
              <span className="close-icon">X</span>
            </Button>
          </WindowHeader>
          <MenuList style={menu}>
            {inItems.map((item, i) => (
              <>
                <MenuListItem
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={i}
                  index={i}
                  item={item}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",

                      alignContent: "center",
                      justifyContent: "center",
                      gap: "1",
                    }}>
                    {item}
                  </span>
                  {hoveredIndex === i && (
                    <Button
                      key={i}
                      style={deleteButton}
                      index={i}
                      item={item}
                      onClick={() => deleteInItem(i)}>
                      <svg
                        style={{ fill: "red" }}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30">
                        <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                      </svg>
                    </Button>
                  )}
                </MenuListItem>
              </>
            ))}
          </MenuList>
          <div style={frame}>
            <TextInput
              style={textinput}
              value={inValue}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setInValue(e.target.value)
              }}
              placeholder="what is IN?"></TextInput>
            <Button onClick={handleSubmit} style={add}>
              Add ➕
            </Button>
          </div>
        </Window>
      </Draggable>
    </>
  )
}

export default InWindow
