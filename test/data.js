module.exports = {
  "id": "6c783fe0-cbd4-11ef-8100-23135a737e17",
  "name": "广告",
  "componentName": "Page",
  "originType": "",
  "props": {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-start",
      "width": "375px",
      "height": "812px",
      "backgroundColor": "rgba(255,255,255,1)",
      "boxSizing": "border-box"
    },
    "className": "mod"
  },
  "rect": {
    "x": 0,
    "y": 0,
    "width": 350,
    "height": 500,
    "z": 0
  },
  "smart": {
    "layerProtocol": {}
  },
  "children": [{
    "id": "74DC9E82-8B18-24EB-701C-357D1962F269",
    "name": "IntersectingGroup",
    "componentName": "Div",
    "originType": "",
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-start",
        "width": 375,
        "height": 375,
        "position": "relative",
        "boxSizing": "border-box",
        "alignSelf": "flex-start"
      },
      "className": "body"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "z": -1,
      "width": 350,
      "height": 343,
      "top": 0,
      "bottom": 343,
      "left": 0,
      "right": 350
    },
    "smart": {
      "layerProtocol": {}
    },
    "children": [{
      "id": "6c783fe7-cbd4-11ef-8100-23135a737e17",
      "name": "bg",
      "componentName": "Image",
      "originType": "",
      "props": {
        "style": {
          "width": "100%",
          "height": "100%",
          "backgroundSize": "61px 16px",
          "backgroundPosition": "18px 327px",
          "backgroundRepeat": "no-repeat",
          "alignSelf": "flex-start"
        },
        "src": "https://static.imgcook.com/img/test/6bcd0bc0cbd411efa2862d4a1ce412f0.png",
        "className": "item"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 350,
        "height": 343,
        "z": 2
      },
      "smart": {
        "layerProtocol": {
          "field": {
            "type": "picture"
          }
        },
        "nodeIdentification": {
          "fieldBind": ["picture"]
        },
        "nodeCustom": {
          "fieldBind": {
            "confidential": 0.9997548460960388,
            "isConfident": true,
            "label": "picture",
            "type": "fieldBind"
          }
        }
      },
      "selfId": "F309408E-AC76-40A9-80B4-2526579C69FB",
      "condition": true
    }, {
      "id": "6c783fe1-cbd4-11ef-8100-23135a737e17",
      "name": "tag",
      "componentName": "Text",
      "originType": "",
      "props": {
        "style": {
          "paddingTop": 6,
          "paddingRight": 6,
          "paddingBottom": 6,
          "paddingLeft": 6,
          "fontWeight": 400,
          "fontSize": "20px",
          "color": "rgba(255,255,255,1)",
          "lineHeight": "20px",
          "position": "absolute",
          "left": 20,
          "bottom": 20,
          "backgroundColor": "#f5a623",
          "borderRadius": 4,
          "fontFamily": "PingFangSC-Regular",
          "whiteSpace": "nowrap"
        },
        "text": "整屋",
        "lines": 1,
        "className": "tag"
      },
      "rect": {
        "x": 29,
        "y": 333,
        "width": 40,
        "height": 20,
        "z": 8
      },
      "smart": {
        "layerProtocol": {}
      },
      "selfId": "68fab1e4-cbd4-11ef-81c8-2f637bd39f0d",
      "condition": true
    }],
    "condition": true
  }, {
    "id": "240E63B6-1447-591C-8D48-87E746438B7F",
    "name": "DividerRowGroup",
    "componentName": "Div",
    "originType": "",
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "marginTop": "10px",
        "paddingTop": "12px",
        "paddingRight": "12px",
        "paddingBottom": 12,
        "paddingLeft": "12px",
        "width": "375px",
        "boxSizing": "border-box",
        "alignSelf": "flex-start"
      },
      "className": "footer"
    },
    "rect": {
      "x": 0,
      "y": 353,
      "width": 350,
      "height": 147,
      "z": 3
    },
    "smart": {
      "layerProtocol": {}
    },
    "children": [{
      "id": "6c783fe6-cbd4-11ef-8100-23135a737e17",
      "name": "description",
      "componentName": "Text",
      "originType": "",
      "props": {
        "style": {
          "fontWeight": 400,
          "fontSize": "30px",
          "color": "rgba(51,51,51,1)",
          "lineHeight": "44px",
          "textAlign": "left",
          "alignSelf": "flex-start",
          "fontFamily": "PingFangSC-Regular",
          "overflow": "hidden",
          "textOverflow": "ellipsis",
          "WebkitLineClamp": 2,
          "WebkitBoxOrient": "vertical",
          "whiteSpace": "normal"
        },
        "text": "拥有超多功能的40平米简约小公寓了解一下",
        "lines": 2,
        "className": "title"
      },
      "rect": {
        "x": 18,
        "y": 365,
        "z": 4,
        "width": 306,
        "height": 88
      },
      "smart": {
        "layerProtocol": {}
      },
      "selfId": "68fab1e0-cbd4-11ef-81c8-2f637bd39f0d"
    }, {
      "id": "90F2E597-B841-9571-379D-AF81693ED37F",
      "name": "StrictAlignGroup",
      "componentName": "Div",
      "originType": "",
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "space-between",
          "alignItems": "baseline",
          "marginTop": "8px",
          "boxSizing": "border-box"
        },
        "className": "view"
      },
      "rect": {
        "x": 18,
        "y": 461,
        "width": 314,
        "height": 24,
        "z": 4.5
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "6c783fe3-cbd4-11ef-8100-23135a737e17",
        "name": "name",
        "componentName": "Text",
        "originType": "",
        "props": {
          "style": {
            "fontWeight": 300,
            "fontSize": "24px",
            "color": "rgba(102,102,102,1)",
            "lineHeight": "28px",
            "alignSelf": "center",
            "fontFamily": "PingFangSC-Light",
            "overflow": "hidden",
            "textOverflow": "ellipsis",
            "whiteSpace": "nowrap",
            "maxWidth": "168px"
          },
          "text": "花花设计工作室",
          "lines": 1,
          "className": "info"
        },
        "rect": {
          "x": 55,
          "y": 461,
          "width": 168,
          "height": 24,
          "z": 6
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "68fab1e3-cbd4-11ef-81c8-2f637bd39f0d"
      }, {
        "id": "6c783fe4-cbd4-11ef-8100-23135a737e17",
        "name": "num",
        "componentName": "Text",
        "originType": "",
        "props": {
          "style": {
            "fontWeight": 400,
            "fontSize": "22px",
            "color": "rgba(153,153,153,1)",
            "lineHeight": "26px",
            "alignSelf": "center",
            "fontFamily": "PingFangSC-Regular",
            "whiteSpace": "nowrap"
          },
          "text": "168",
          "lines": 1,
          "className": "num"
        },
        "rect": {
          "x": 295,
          "y": 462,
          "width": 35,
          "height": 22,
          "z": 5
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "68fab1e2-cbd4-11ef-81c8-2f637bd39f0d"
      }],
      "condition": true
    }],
    "condition": true
  }, {
    "componentName": "Div",
    "props": {
      "className": "class-1",
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "100%",
        "height": "50px",
        "position": "absolute",
        "left": "0",
        "bottom": "0",
        "backgroundColor": "#f5a623"
      }
    },
    "children": [{
      "componentName": "Text",
      "props": {
        "text": "文本",
        "className": "class-2",
        "style": {
          "color": "#ffffff"
        }
      },
      "id": "f700ef8e-24e1-4f6d-9d74-addf9b674921"
    }],
    "id": "9365cde0-6113-4e1c-99a2-addc72115929"
  }],
  "taskId": "68fab1e5-cbd4-11ef-81c8-2f637bd39f0d",
  "artboardImg": "https://static.imgcook.com/img/test/6b3b04f0cbd411ef912213bedd2d73e2.png",
  "pluginVersion": "1.0.12",
  "layerProtocols": [],
  "reference": "fileparse",
  "restore_id": "7c229c46-8bc0-4a0e-ab8f-c9533b70527e",
  "imgcook": {
    "layoutAlgorithmVersion": "0.0.29",
    "restore_id": "7c229c46-8bc0-4a0e-ab8f-c9533b70527e",
    "dslConfig": {
      "cssUnit": "px",
      "dsl": "vue",
      "componentStyle": "hooks",
      "cssStyle": "snakeCase",
      "cssType": "css",
      "inlineStyle": "import",
      "globalCss": false,
      "jsx": "javascript",
      "outputStyle": "component",
      "dslName": "Vue",
      "responseWidth": 750,
      "htmlFontSize": "16"
    }
  },
  "condition": true
}