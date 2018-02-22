import React, { Component } from "react"
import { Layout, Menu, Icon } from "antd"

import KnowledgeList from "./components/KnowledgeList"

import "./App.css"

const { Header, Content, Footer, Sider } = Layout

export default class App extends Component {
  state = {
    category: "js"
  }

  handleClick = e => {
    this.setState({ category: e.target.getAttribute("name") })
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type)
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <a name="js" onClick={this.handleClick}>
                  <Icon type="book" />
                  <span className="nav-text">JS</span>
                </a>
              </Menu.Item>
              <Menu.Item key="2">
                <a name="react" onClick={this.handleClick}>
                  <Icon type="codepen" />
                  <span className="nav-text">React</span>
                </a>
              </Menu.Item>
              <Menu.Item key="3">
                <a name="redux" onClick={this.handleClick}>
                  <Icon type="appstore-o" />
                  <span className="nav-text">Redux</span>
                </a>
              </Menu.Item>
              <Menu.Item key="4">
                <a name="graphql" onClick={this.handleClick}>
                  <Icon type="api" />
                  <span className="nav-text">GraphQL</span>
                </a>
              </Menu.Item>
              <Menu.Item key="5">
                <a name="node" onClick={this.handleClick}>
                  <Icon type="sync" />
                  <span className="nav-text">Node.js</span>
                </a>
              </Menu.Item>
              <Menu.Item key="6">
                <a name="express" onClick={this.handleClick}>
                  <Icon type="shrink" />
                  <span className="nav-text">Express</span>
                </a>
              </Menu.Item>
              <Menu.Item key="7">
                <a name="mongodb" onClick={this.handleClick}>
                  <Icon type="database" />
                  <span className="nav-text">MongoDB</span>
                </a>
              </Menu.Item>
              <Menu.Item key="8">
                <a name="security" onClick={this.handleClick}>
                  <Icon type="lock" />
                  <span className="nav-text">Security</span>
                </a>
              </Menu.Item>
              <Menu.Item key="9">
                <a name="algorithm" onClick={this.handleClick}>
                  <Icon type="rocket" />
                  <span className="nav-text">Algorithm</span>
                </a>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{ background: "#fff", padding: "10px 22px", height: "auto" }}
            >
              <img
                src={`img/${this.state.category}.png`}
                alt={this.state.category}
              />
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <KnowledgeList category={this.state.category} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>.</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
