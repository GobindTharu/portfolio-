"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import Editor from "@monaco-editor/react";

const TerminalTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [code, setCode] = useState("// Write your code here...");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const tabs = ["page.tsx", "layout.tsx", "Components.tsx", ".gitignore"];

  // Handle command execution
  const handleCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && terminalInput.trim() !== "") {
      const newOutput = [...terminalOutput, `> ${terminalInput}`];

      if (terminalInput.toLowerCase() === "clear") {
        setTerminalOutput([]);
      } else {
        newOutput.push("Command not recognized");
        setTerminalOutput(newOutput);
      }

      setTerminalInput("");
    }
  };

  return (
    <Box
      className="relative rounded-2xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "auto",
        bgcolor: "#1E1E1E",
        color: "#D4D4D4",
      }}
    >
      <Paper
        elevation={3}
        className="vscode-container"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#252526",
          width: "auto",
        }}
      >
        {/* Title Bar */}
        <Box
          className="title-bar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#0007",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <span className="control close">🔴</span>
            <span className="control minimize">🟡</span>
            <span className="control maximize">🟢</span>
          </Box>
          <Typography variant="h6" fontSize={{ xs: "1rem", md: "1.25rem" }}>
            Visual Studio Code
          </Typography>
        </Box>

        <Box
          className="code-main-area-wrapper"
          sx={{ display: "flex", flex: 1, flexWrap: "nowrap" }}
        >
          {/* Sidebar */}
          <Paper
            elevation={1}
            className="sidebar lowercase xs:hidden"
            sx={{ width: { xs: 22, md: 150, sm: 100 }, bgcolor: "#333" }}
          >
            <List className="lowercase xs:hidden">
              {[
                "File",
                "Search",
                "Source Control",
                "Run and Debug",
                "Extensions",
                "Setting",
              ].map((item, index) => (
                <ListItem key={index} sx={{ color: "#D4D4D4" }}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Code Editor Section */}
          <Box
            className="code-content-wrapper"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#1E1E1E",
              overflowX: "auto",
            }}
          >
            {/* Tabs */}
            <Tabs
              value={activeTab}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              onChange={(_, newValue) => setActiveTab(newValue)}
            >
              {tabs.map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{ color: "#D4D4D4", textTransform: "lowercase" }}
                />
              ))}
            </Tabs>

            {/* Monaco Code Editor */}
            <Box
              className="code-editor-wrapper"
              sx={{ flex: 1, bgcolor: "#1E1E1E" }}
            >
              <Editor
                height="50vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                value={code}
                onChange={(value) => setCode(value || "")}
              />
            </Box>
          </Box>
        </Box>

        {/* Terminal */}
        <Paper
          elevation={2}
          className="terminal-container "
          sx={{ bgcolor: "#0009", color: "#D4D4D4" }}
        >
          <Typography
            variant="subtitle1"
            className="terminal-header"
            sx={{ color: "#00FF00" }}
          >
            Terminal
          </Typography>
          <Box sx={{ height: "70px", overflowY: "auto" }}>
            gobind@ubuntu:~
            {terminalOutput.map((line, index) => (
              <Typography key={index} variant="body2" sx={{ color: "#D4D4D4" }}>
                {line}
              </Typography>
            ))}
          </Box>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: { color: "#00FF00", fontFamily: "monospace" },
            }}
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type a command..."
          />
        </Paper>
      </Paper>
    </Box>
  );
};

export default TerminalTab;
