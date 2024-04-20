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
import { Wmsui322224, User6, User4, Delete, Tick } from "@react95/icons"
import { Tooltip } from "react95"
const menu = {
  width: "95%",
  margin: "1vw",
  backgroundColor: "rgba(255,255,255,0.4)",
}

const frame = {
  display: "flex",
  flexDirection: "row",
  alignContent: "middle",
  marginBottom: "1vh",
  flexWrap: "'nowrap',", // Allow items to wrap to the next line on smaller screens
  // zIndex: "0",
}

const close = {
  float: "right",
  fontSize: "10px",
}

function InWindow({ time }) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches
  const windowTitle = {
    fontSize: isMobile ? "10px" : "",
  }
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
    maxWidth: isSmallScreen ? "48vw" : "max-content",
    overflow: "auto",
    maxHeight: isSmallScreen ? "80vh" : "70vh",
    fontSize: isSmallScreen ? "xsmall" : "",
    padding: isSmallScreen ? "2vw" : "1vw 1vh",
    boxShadow: "-4px -6px 80px 10px rgba(0,255,0,0.3)",
  }
  const deleteButton = {
    height: isMobile ? "3vh" : "",
  }
  const add = {
    float: "end",
    marginLeft: isMobile ? "0.4vw" : "2vw",
    fontSize: isMobile ? "1.5vh" : "",
  }

  const textinput = {
    maxWidth: isMobile ? "58%" : "70%",
    marginLeft: "0.9vw",
    zIndex: "1",
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
      <Draggable
        onDrag={handleDrag}
        handle=".window"
        cancel=".button-undraggable"
        position={position}
        touchAction="none">
        <Window style={background} className="window">
          <WindowHeader style={windowTitle} className="window-title">
            <span style={{ fontSize: isMobile ? "1.5vh" : "" }}>
              in for {time}
            </span>
          </WindowHeader>
          <MenuList style={menu}>
            {inItems.map((item, i) => (
              <>
                <MenuListItem
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={i}
                  index={i}
                  className="button-undraggable"
                  style={{ height: isMobile ? "3vh" : "5.5vh" }}
                  item={item}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      gap: "1",

                      fontSize: isMobile ? "smaller" : "",
                    }}>
                    {item}
                  </span>
                  {hoveredIndex === i && (
                    <Button
                      key={i}
                      style={{
                        ...deleteButton,
                      }}
                      index={i}
                      className="button-undraggable"
                      item={item}
                      onClick={() => deleteInItem(i)}>
                      <Delete
                        key={i}
                        className="button-undraggable"
                        item={item}
                        style={{}}
                        index={i}
                        height={isMobile ? 10 : 20}
                        width={isMobile ? 10 : 20}
                      />
                    </Button>
                  )}
                </MenuListItem>
              </>
            ))}
          </MenuList>
          <div style={frame}>
            <TextInput
              style={textinput}
              className="button-undraggable"
              value={inValue}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setInValue(e.target.value)
              }}
              placeholder="what is IN?"></TextInput>
            <Button
              onClick={handleSubmit}
              className="button-undraggable"
              style={add}>
              Add <Tick style={{ marginLeft: 3 }} height={20} width={20} />
            </Button>
          </div>
        </Window>
      </Draggable>
    </>
  )
}

export default InWindow
