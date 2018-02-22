import React from "react"
import { List, Icon } from "antd"

import knowledges from "../data/knowledge.json"

export default class KnowledgeList extends React.Component {
  render() {
    const isMatchCategory = item => item.category === this.props.category
    const knowledgeFiltered = knowledges.filter(isMatchCategory)
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={knowledgeFiltered}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.title}
                  {"   "}
                  {item.video && <Icon type="youtube" />}
                </a>
              }
              description={item.author}
            />
          </List.Item>
        )}
      />
    )
  }
}
