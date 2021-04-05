import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"

import { Card, Content, Grid, Title } from "components"
import reportWebVitals from "core/report-web-vitals"
import { GlobalStyles, theme } from "styles"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Sudoku</Title>
      <Card>
        <Grid></Grid>
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
