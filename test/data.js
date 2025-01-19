module.exports = {
  "id": "b6c8e070-ae1c-11ef-9677-b53471fd790b",
  "name": "index",
  "componentName": "Page",
  "originType": "",
  "props": {
    "style": {
      "position": "relative",
      "backgroundColor": "#fff"
    },
    "className": "mod"
  },
  "rect": {
    "x": 0,
    "y": 0,
    "width": 342,
    "height": 481,
    "z": 0
  },
  "smart": {
    "layerProtocol": {}
  },
  "children": [{
    "componentName": "Div",
    "props": {
      "className": "class-1",
      "style": {
        "display": "flex",
        "flexDirection": "row",
        "width": "100%",
        "height": "324px",
        "position": "relative"
      }
    },
    "children": [{
      "id": "FB9C7737-E273-1CA5-1B13-A3C8B511CD88",
      "name": "IntersectingGroup",
      "componentName": "Div",
      "originType": "",
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "flex-start",
          "width": "342px",
          "height": "100%",
          "position": "relative"
        },
        "className": "body"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "z": -1,
        "width": 342,
        "height": 324,
        "top": 0,
        "bottom": 324,
        "left": 0,
        "right": 342
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "b6c8e078-ae1c-11ef-9677-b53471fd790b",
        "name": "bg",
        "componentName": "Image",
        "originType": "",
        "props": {
          "style": {
            "width": "342px",
            "height": "324px",
            "alignSelf": "flex-start",
            "borderRadius": "12px"
          },
          "src": "https://static.imgcook.com/img/test/aae95370ae1c11efab3a11063cae6c8a.png",
          "className": "item"
        },
        "rect": {
          "x": 0,
          "y": 0,
          "width": 342,
          "height": 324,
          "z": 1
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
              "confidential": 0.9999359846115112,
              "isConfident": true,
              "label": "picture",
              "type": "fieldBind"
            }
          }
        },
        "selfId": "E53ACBB5-1E94-467E-81A0-093F190BBC67"
      }, {
        "id": "b6c8e077-ae1c-11ef-9677-b53471fd790b",
        "name": "tag_bg",
        "componentName": "Div",
        "originType": "",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "flex-start",
            "padding": "5px 10px",
            "position": "absolute",
            "left": "18px",
            "bottom": 18,
            "backgroundColor": "#FFB902",
            "borderRadius": "6px"
          },
          "className": "tag-wrapper"
        },
        "rect": {
          "x": 18,
          "y": 308,
          "width": 60,
          "height": 30,
          "z": 2
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "b6c8e076-ae1c-11ef-9677-b53471fd790b",
          "name": "tag",
          "componentName": "Text",
          "originType": "",
          "props": {
            "style": {
              "color": "rgba(255, 255, 255, 1)",
              "fontFamily": "PingFang SC",
              "fontSize": "20px",
              "fontWeight": 400,
              "lineHeight": "20px",
              "alignSelf": "flex-start",
              "whiteSpace": "nowrap"
            },
            "text": "整屋",
            "lines": 1,
            "className": "tag"
          },
          "rect": {
            "x": 28,
            "y": 313,
            "width": 40,
            "height": 20,
            "z": 3
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "C503B215-E788-4754-A241-B26B81DC77170"
        }],
        "selfId": "0972AF97-3ED7-4302-ACDE-EEC1FADD4C70"
      }]
    }, {
      "id": "FE62FDB3-C626-6143-971B-D3A540DD662B",
      "name": "DividerRowGroup",
      "componentName": "Div",
      "originType": "",
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "center",
          "marginTop": "0",
          "paddingTop": "3px",
          "paddingRight": "12px",
          "paddingBottom": "0",
          "paddingLeft": "12px",
          "height": "324px",
          "position": "relative",
          "flex": "1px"
        },
        "className": "footer"
      },
      "rect": {
        "x": 0,
        "y": 338,
        "width": 342,
        "height": 143,
        "z": 3.5
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "componentName": "Button",
        "props": {
          "className": "class-2",
          "text": false,
          "htmlType": "submit",
          "component": "span",
          "type": "primary",
          "style": {
            "width": 100,
            "position": "absolute",
            "bottom": 12,
            "right": 12
          }
        },
        "id": "47016012-0286-447c-8b1b-addb2ce7e390",
        "children": "1234"
      }, {
        "componentName": "Button",
        "props": {
          "className": "class-3",
          "style": {
            "width": 100,
            "position": "absolute",
            "left": 12,
            "bottom": 12
          }
        },
        "id": "9ba1522a-2c0a-405e-a768-add1eaaba459"
      }, {
        "id": "b6c8e075-ae1c-11ef-9677-b53471fd790b",
        "name": "description",
        "componentName": "Text",
        "originType": "",
        "props": {
          "style": {
            "color": "rgba(51, 51, 51, 1)",
            "fontFamily": "PingFang SC",
            "fontSize": "30px",
            "fontWeight": 400,
            "lineHeight": "44px",
            "alignSelf": "center",
            "width": "306px",
            "height": "88px",
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
          "y": 341,
          "width": 306,
          "height": 88,
          "z": 4
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "F1A74C1E-5F7E-490B-A31E-B9ABE3C689C10"
      }, {
        "id": "1743F1A7-2145-330D-8A62-5DC842BB32C7",
        "name": "StrictRowSliceGroup",
        "componentName": "Div",
        "originType": "",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "marginLeft": 10,
            "width": "306px",
            "alignSelf": "center"
          },
          "className": "group"
        },
        "rect": {
          "x": 18,
          "y": 453,
          "width": 306,
          "height": 28,
          "z": 4.5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "2C0C7C5B-F415-6D32-99DF-8819FF32B853",
          "name": "ClosenessGroup",
          "componentName": "Div",
          "originType": "",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "space-between",
              "alignSelf": "center",
              "height": "28px",
              "width": "204px"
            },
            "className": "view"
          },
          "rect": {
            "x": 18,
            "y": 453,
            "width": 204,
            "height": 28,
            "z": 4.75
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "b6c8e074-ae1c-11ef-9677-b53471fd790b",
            "name": "avatar",
            "componentName": "Image",
            "originType": "",
            "props": {
              "style": {
                "width": "30px",
                "height": "28px",
                "alignSelf": "center"
              },
              "src": "https://static.imgcook.com/img/test/aabe72e0ae1c11efa5cee1656f595e97.png",
              "className": "icon-avatar"
            },
            "rect": {
              "x": 18,
              "y": 453,
              "width": 30,
              "height": 28,
              "z": 5
            },
            "smart": {
              "layerProtocol": {
                "field": {
                  "type": "avatar"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["avatar"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.9999964237213135,
                  "isConfident": true,
                  "label": "avatar",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "A348C25F-B154-4D19-9922-DF237063A854"
          }, {
            "id": "b6c8e073-ae1c-11ef-9677-b53471fd790b",
            "name": "name",
            "componentName": "Text",
            "originType": "",
            "props": {
              "style": {
                "color": "rgba(102, 102, 102, 1)",
                "fontFamily": "PingFang SC",
                "fontSize": "24px",
                "fontWeight": 300,
                "lineHeight": "28px",
                "alignSelf": "center",
                "overflow": "hidden",
                "textOverflow": "ellipsis",
                "maxWidth": "168px",
                "whiteSpace": "nowrap"
              },
              "text": "花花设计工作…",
              "lines": 1,
              "className": "info"
            },
            "rect": {
              "x": 54,
              "y": 453,
              "width": 168,
              "height": 28,
              "z": 6
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "71A7EF23-876D-4AB3-A83D-9C7352DF840F0"
          }]
        }, {
          "id": "7104D9C2-C8D8-E31A-4E6D-F754CC769745",
          "name": "ClosenessGroup",
          "componentName": "Div",
          "originType": "",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "space-between",
              "alignSelf": "center",
              "height": "28px",
              "width": "62px",
              "padding": "1px 0"
            },
            "className": "view-1"
          },
          "rect": {
            "x": 262,
            "y": 453,
            "width": 62,
            "height": 28,
            "z": 6.5
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "b6c8e072-ae1c-11ef-9677-b53471fd790b",
            "name": "start",
            "componentName": "Image",
            "originType": "",
            "props": {
              "style": {
                "width": "22px",
                "height": "22px",
                "alignSelf": "center"
              },
              "src": "https://static.imgcook.com/img/test/aabd3a60ae1c11ef98507d64bc18c843.png",
              "className": "icon-star"
            },
            "rect": {
              "x": 262,
              "y": 456,
              "width": 22,
              "height": 22,
              "z": 7
            },
            "smart": {
              "layerProtocol": {
                "field": {
                  "type": "star"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["star"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.9993810653686523,
                  "isConfident": true,
                  "label": "star",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "1864CA22-E8E3-47F7-8FC6-0189FF79EC86"
          }, {
            "id": "b6c8e071-ae1c-11ef-9677-b53471fd790b",
            "name": "num",
            "componentName": "Text",
            "originType": "",
            "props": {
              "style": {
                "color": "rgba(153, 153, 153, 1)",
                "fontFamily": "PingFang SC",
                "fontSize": "22px",
                "fontWeight": 400,
                "lineHeight": "26px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "168",
              "lines": 1,
              "className": "num"
            },
            "rect": {
              "x": 288,
              "y": 454,
              "width": 36,
              "height": 26,
              "z": 8
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "37E5440D-B492-4B90-8A7F-723FC3E90B6C0"
          }]
        }]
      }]
    }],
    "id": "ae2c4298-e8c6-4369-a41a-add9db2a09a8",
    "loop": [{}, {}]
  }],
  "taskId": "1295D8DF-293A-42E5-8D7E-AF8AEE5CB934",
  "artboardImg": "https://static.imgcook.com/img/test/aaecaed0ae1c11efa7a4376ea6f3a8c2.png",
  "pluginVersion": "4.2.8",
  "reference": "sketch",
  "restore_id": "ceed4572-a609-43ee-af93-f1d0b3d659e6",
  "imgcook": {
    "layoutAlgorithmVersion": "0.0.28",
    "restore_id": "ceed4572-a609-43ee-af93-f1d0b3d659e6",
    "dslConfig": {
      "cssUnit": "px",
      "dsl": "vue",
      "componentStyle": "hooks",
      "cssStyle": "kebabCase",
      "cssType": "css",
      "responseWidth": 750,
      "htmlFontSize": "16",
      "inlineStyle": "import",
      "globalCss": true,
      "jsx": "javascript",
      "outputStyle": "project",
      "dslName": "Vue"
    }
  },
  "fileName": "index"
}