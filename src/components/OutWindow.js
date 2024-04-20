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
import { Wmsui322224, Wmsui32_5084, Delete, Tick } from "@react95/icons"

const menu = {
  width: "95%",
  margin: "1vw",
  backgroundColor: "rgba(255,255,255,0.4)",
}
const windowTitle = {}
const StyledMenuListItem = styled(MenuListItem)`
  &:hover {
  }
`
const frame = {
  display: "flex",
  flexDirection: "row",
  alignContent: "middle",
  marginBottom: "1vh",
  flexWrap: "'nowrap',", // Allow items to wrap to the next line on smaller screens
  zIndex: "0",
}

const close = {
  float: "right",
}

function OutWindow({ time }) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleDrag = (e, data) => {
    e.stopPropagation()

    setPosition({ x: data.x, y: data.y })
  }
  const [outValue, setOutValue] = useState("")
  const [outItems, setOutItems] = useState(() => {
    const savedOutItems = localStorage.getItem("outItems")
    return savedOutItems ? JSON.parse(savedOutItems) : []
  })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const deleteInItem = (index) => {
    const newOutItems = [...outItems]
    newOutItems.splice(index, 1)
    setOutItems(newOutItems)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (outValue === "") {
      console.log("empty text")
      return
    }
    setOutItems((prevItems) => [...prevItems, outValue]) // Use a function to update the state correctly
    setOutValue("")
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
    boxShadow: "-4px -6px 80px 10px rgba(255,0,0,0.3)",
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
    localStorage.setItem("outItems", JSON.stringify(outItems))
  }, [outItems])

  return (
    <>
      <Draggable
        onDrag={handleDrag}
        handle=".window"
        position={position}
        cancel=".button-undraggable"
        touchAction="none">
        <Window style={background} className="window">
          <WindowHeader className="window-title" style={windowTitle}>
            <span style={{ fontSize: isMobile ? "1.5vh" : "" }}>
              out for {time}
            </span>
          </WindowHeader>
          <MenuList style={menu}>
            {outItems.map((item, i) => (
              <>
                <StyledMenuListItem
                  className="button-undraggable"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={i}
                  index={i}
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
                    <p>{item}</p>
                  </span>
                  {hoveredIndex === i && (
                    <Button
                      key={i}
                      className="button-undraggable"
                      style={deleteButton}
                      index={i}
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
                </StyledMenuListItem>
              </>
            ))}
          </MenuList>
          <div style={frame}>
            <TextInput
              style={textinput}
              className="button-undraggable"
              value={outValue}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setOutValue(e.target.value)
              }}
              placeholder="what is OUT?"></TextInput>
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

export default OutWindow
