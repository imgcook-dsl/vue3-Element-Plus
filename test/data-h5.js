export default {
  "id": "a34466e0-5aee-11ef-adc6-7721f2b0e972",
  "name": "04-订单列表",
  "componentName": "Page",
  "props": {
    "style": {
      "backgroundColor": "rgba(245,245,245,1)",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-start",
      "width": "750px",
      "height": "1624px"
    },
    "className": "page"
  },
  "rect": {
    "x": 0,
    "y": 0,
    "width": 750,
    "height": 1624,
    "z": 0
  },
  "smart": {
    "layerProtocol": {}
  },
  "children": [{
    "id": "a3450324-5aee-11ef-adc6-7721f2b0e972",
    "name": "Background",
    "componentName": "Div",
    "props": {
      "style": {
        "width": "750px",
        "height": "176px",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignSelf": "center",
        "padding": "29px 0 12px",
        "backgroundImage": "url(https://static.imgcook.com/img/test/a03e2bc05aee11ef88b77b4d72fd5c28.png)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "0px 0px",
        "backgroundSize": "100% 100%",
        "backgroundOrigin": "padding-box"
      },
      "src": "https://static.imgcook.com/img/test/a03e2bc05aee11ef88b77b4d72fd5c28.png",
      "className": "container"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 750,
      "height": 176,
      "z": 45
    },
    "smart": {
      "layerProtocol": {}
    },
    "children": [{
      "id": "B7D602EE-3436-A0C8-46CA-10D5C5BE6668",
      "name": "StatusBarGroup",
      "componentName": "Div",
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "space-between",
          "alignSelf": "center",
          "width": "750px",
          "padding": "0 12px"
        },
        "className": "header"
      },
      "rect": {
        "x": 0,
        "y": 29,
        "width": 750,
        "height": 29,
        "z": 51.5
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "a3448df6-5aee-11ef-adc6-7721f2b0e972",
        "name": "Time",
        "componentName": "Text",
        "props": {
          "style": {
            "color": "rgba(0,0,0,1)",
            "fontFamily": "SFProText-Semibold",
            "fontSize": "15px",
            "fontWeight": 600,
            "letterSpacing": "-0.3px",
            "lineHeight": "21px",
            "marginLeft": "71px",
            "alignSelf": "flex-start",
            "whiteSpace": "nowrap"
          },
          "text": "9:41",
          "lines": 1,
          "className": "time"
        },
        "rect": {
          "x": 83,
          "y": 29,
          "width": 26,
          "height": 21,
          "z": 57
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "9489cd90-5aee-11ef-a33d-0fffc9531d8a"
      }, {
        "id": "153BA4EE-28EF-F7A2-BB91-60CBAF1E0D68",
        "name": "ClosenessGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "paddingTop": "6px",
            "display": "flex",
            "flexDirection": "row",
            "marginRight": "16px",
            "justifyContent": "flex-start",
            "alignSelf": "flex-start",
            "height": "29px"
          },
          "className": "group"
        },
        "rect": {
          "x": 588,
          "y": 29,
          "width": 134,
          "height": 29,
          "z": 51.75
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3448df7-5aee-11ef-adc6-7721f2b0e972",
          "name": "Cellular Connection",
          "componentName": "Image",
          "props": {
            "style": {
              "width": "34px",
              "height": "21px",
              "alignSelf": "center",
              "marginBottom": "2px"
            },
            "src": "https://static.imgcook.com/img/test/a1e4d6e05aee11ef8ea23170a0baccab.png",
            "className": "badge"
          },
          "rect": {
            "x": 588,
            "y": 35,
            "width": 34,
            "height": 21,
            "z": 56
          },
          "smart": {
            "layerProtocol": {
              "field": {
                "type": "signal"
              }
            },
            "nodeIdentification": {
              "fieldBind": ["signal"]
            },
            "nodeCustom": {
              "fieldBind": {
                "confidential": 0.999927282333374,
                "isConfident": true,
                "label": "signal",
                "type": "fieldBind"
              }
            }
          },
          "selfId": "942df1e8-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3448df8-5aee-11ef-adc6-7721f2b0e972",
          "name": "Wifi",
          "componentName": "Image",
          "props": {
            "style": {
              "width": "31px",
              "height": "22px",
              "alignSelf": "center",
              "margin": "0 0 1px 10px"
            },
            "src": "https://static.imgcook.com/img/test/a1a3d6405aee11efb7870f01a7076007.png",
            "className": "icon-wifi"
          },
          "rect": {
            "x": 632,
            "y": 35,
            "width": 31,
            "height": 22,
            "z": 55
          },
          "smart": {
            "layerProtocol": {
              "field": {
                "type": "wifi"
              }
            },
            "nodeIdentification": {
              "fieldBind": ["wifi"]
            },
            "nodeCustom": {
              "fieldBind": {
                "confidential": 0.9993090629577637,
                "isConfident": true,
                "label": "wifi",
                "type": "fieldBind"
              }
            }
          },
          "selfId": "942df1ed-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a344b502-5aee-11ef-adc6-7721f2b0e972",
          "name": "Border",
          "componentName": "Div",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "column",
              "marginLeft": "10px",
              "justifyContent": "flex-start",
              "alignSelf": "center",
              "boxSizing": "border-box",
              "padding": "4px",
              "border": "1px solid rgba(0,0,0,0.35)",
              "borderRadius": "2.66666674613953px"
            },
            "className": "view"
          },
          "rect": {
            "x": 673,
            "y": 35,
            "width": 44,
            "height": 23,
            "z": 52
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a344b500-5aee-11ef-adc6-7721f2b0e972",
            "name": "Capacity",
            "componentName": "Div",
            "props": {
              "style": {
                "backgroundColor": "rgba(0,0,0,1)",
                "alignSelf": "center",
                "width": "36px",
                "height": "15px",
                "borderRadius": "1.33333337306976px"
              },
              "className": "layer"
            },
            "rect": {
              "x": 677,
              "y": 39,
              "width": 36,
              "height": 15,
              "z": 54
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "942df1f2-5aee-11ef-a33d-0fffc9531d8a"
          }],
          "selfId": "942df1f4-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a344b501-5aee-11ef-adc6-7721f2b0e972",
          "name": "Cap",
          "componentName": "Image",
          "props": {
            "style": {
              "width": "3px",
              "height": "8px",
              "alignSelf": "center",
              "margin": "0 0 1px 2px"
            },
            "src": "https://static.imgcook.com/img/test/a166a6305aee11efa674c13ff2e7205d.png",
            "className": "dot"
          },
          "rect": {
            "x": 719,
            "y": 42,
            "width": 3,
            "height": 8,
            "z": 53
          },
          "smart": {
            "layerProtocol": {
              "field": {
                "type": "play"
              }
            },
            "nodeIdentification": {
              "fieldBind": ["play"]
            },
            "nodeCustom": {
              "fieldBind": {
                "confidential": 0.6198657751083374,
                "isConfident": true,
                "label": "play",
                "type": "fieldBind"
              }
            }
          },
          "selfId": "942df1f3-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }]
    }, {
      "id": "A782CBF3-B26B-5957-9AED-5330507DC166",
      "name": "NavBarGroup",
      "componentName": "Div",
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "marginTop": "42px",
          "justifyContent": "flex-start",
          "alignSelf": "center",
          "width": "750px",
          "padding": "0 12px"
        },
        "className": "body"
      },
      "rect": {
        "x": 0,
        "y": 100,
        "width": 750,
        "height": 64,
        "z": 45.5
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "a344dc10-5aee-11ef-adc6-7721f2b0e972",
        "name": "图标颜色",
        "componentName": "Image",
        "props": {
          "style": {
            "width": "18px",
            "height": "34px",
            "marginLeft": "22px",
            "alignSelf": "center"
          },
          "src": "https://static.imgcook.com/img/test/a11af7305aee11efb90f0db9f3474456.png",
          "className": "icon-left"
        },
        "rect": {
          "x": 34,
          "y": 115,
          "width": 18,
          "height": 34,
          "z": 51
        },
        "smart": {
          "layerProtocol": {
            "field": {
              "type": "left"
            }
          },
          "nodeIdentification": {
            "fieldBind": ["left"]
          },
          "nodeCustom": {
            "fieldBind": {
              "confidential": 0.995884120464325,
              "isConfident": true,
              "label": "left",
              "type": "fieldBind"
            }
          }
        },
        "selfId": "942df1e4-5aee-11ef-a33d-0fffc9531d8a"
      }, {
        "id": "a344dc11-5aee-11ef-adc6-7721f2b0e972",
        "name": "  ↳ 标题",
        "componentName": "Text",
        "props": {
          "style": {
            "color": "rgba(216,216,216,0.90)",
            "fontFamily": "PingFangSC-Medium",
            "fontSize": "34px",
            "fontWeight": 500,
            "lineHeight": "48px",
            "marginLeft": "289px",
            "alignSelf": "center",
            "whiteSpace": "nowrap"
          },
          "text": "订单",
          "lines": 1,
          "className": "title"
        },
        "rect": {
          "x": 341,
          "y": 108,
          "width": 68,
          "height": 48,
          "z": 50
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "9489cd8f-5aee-11ef-a33d-0fffc9531d8a"
      }, {
        "id": "a3450323-5aee-11ef-adc6-7721f2b0e972",
        "name": "Rectangle 2",
        "componentName": "Div",
        "props": {
          "style": {
            "backgroundColor": "rgba(255,255,255,0.6)",
            "display": "flex",
            "flexDirection": "row",
            "marginLeft": "155px",
            "justifyContent": "center",
            "alignSelf": "center",
            "width": "174px",
            "boxSizing": "border-box",
            "padding": "13px 12px 14px",
            "border": "1px solid rgba(151,151,151,0.2)",
            "borderRadius": "25px"
          },
          "className": "group-1"
        },
        "rect": {
          "x": 564,
          "y": 100,
          "width": 174,
          "height": 64,
          "z": 46
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3450320-5aee-11ef-adc6-7721f2b0e972",
          "name": "Fill 43",
          "componentName": "Image",
          "props": {
            "style": {
              "width": "38px",
              "height": "14px",
              "alignSelf": "center",
              "margin": "3px 0 0 1px"
            },
            "src": "https://static.imgcook.com/img/test/a0d7fac05aee11efb70155ddd06c3877.png",
            "className": "icon"
          },
          "rect": {
            "x": 591,
            "y": 126,
            "width": 38,
            "height": 14,
            "z": 49
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "942df1d2-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3450321-5aee-11ef-adc6-7721f2b0e972",
          "name": "Rectangle 3",
          "componentName": "Div",
          "props": {
            "style": {
              "backgroundColor": "rgba(0,0,0,0.2)",
              "marginLeft": "22px",
              "alignSelf": "center",
              "width": "1px",
              "height": "37px",
              "borderRadius": "0px"
            },
            "className": "vertical-line"
          },
          "rect": {
            "x": 651,
            "y": 113,
            "width": 1,
            "height": 37,
            "z": 48
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "942df1d6-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3450322-5aee-11ef-adc6-7721f2b0e972",
          "name": "Combined Shape",
          "componentName": "Image",
          "props": {
            "style": {
              "width": "35px",
              "height": "35px",
              "marginLeft": "25px",
              "alignSelf": "center"
            },
            "src": "https://static.imgcook.com/img/test/a088a2405aee11efbf16fdf9a4b09dfe.png",
            "className": "icon-circle-close"
          },
          "rect": {
            "x": 677,
            "y": 114,
            "width": 35,
            "height": 35,
            "z": 47
          },
          "smart": {
            "layerProtocol": {
              "field": {
                "type": "circleClose"
              }
            },
            "nodeIdentification": {
              "fieldBind": ["circleClose"]
            },
            "nodeCustom": {
              "fieldBind": {
                "confidential": 0.8566980361938477,
                "isConfident": true,
                "label": "circleClose",
                "type": "fieldBind"
              }
            }
          },
          "selfId": "942df1d8-5aee-11ef-a33d-0fffc9531d8a"
        }],
        "selfId": "942df1dc-5aee-11ef-a33d-0fffc9531d8a"
      }]
    }],
    "selfId": "942dcac9-5aee-11ef-a33d-0fffc9531d8a"
  }, {
    "id": "a3457858-5aee-11ef-adc6-7721f2b0e972",
    "name": "矩形备份 6",
    "componentName": "Div",
    "props": {
      "style": {
        "backgroundColor": "rgba(255,255,255,1)",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "flex-start",
        "alignSelf": "center",
        "width": "750px",
        "padding": "28px 12px",
        "borderRadius": "0px"
      },
      "className": "container-1"
    },
    "rect": {
      "x": 0,
      "y": 176,
      "width": 750,
      "height": 98,
      "z": 12
    },
    "smart": {
      "layerProtocol": {}
    },
    "children": [{
      "id": "a3450328-5aee-11ef-adc6-7721f2b0e972",
      "name": "共 3 笔订单",
      "componentName": "Text",
      "props": {
        "style": {
          "color": "rgba(0,0,0,0.85)",
          "fontFamily": "PingFangSC-Medium",
          "fontSize": "34px",
          "fontWeight": 500,
          "lineHeight": "42px",
          "marginLeft": "12px",
          "alignSelf": "center",
          "whiteSpace": "nowrap"
        },
        "text": "共",
        "lines": 1,
        "className": "caption"
      },
      "rect": {
        "x": 24,
        "y": 204,
        "width": 45,
        "height": 42,
        "z": 41
      },
      "smart": {
        "layerProtocol": {}
      },
      "selfId": "9489cd8c-5aee-11ef-a33d-0fffc9531d8a"
    }, {
      "id": "a3450327-5aee-11ef-adc6-7721f2b0e972",
      "name": "共 3 笔订单",
      "componentName": "Text",
      "props": {
        "style": {
          "color": "rgba(94,207,168,1)",
          "fontFamily": "PingFangSC-Medium",
          "fontSize": "34px",
          "fontWeight": 500,
          "lineHeight": "42px",
          "marginLeft": "1px",
          "alignSelf": "center",
          "whiteSpace": "nowrap"
        },
        "text": "3",
        "lines": 1,
        "className": "num"
      },
      "rect": {
        "x": 70,
        "y": 204,
        "width": 31,
        "height": 42,
        "z": 42
      },
      "smart": {
        "layerProtocol": {}
      },
      "selfId": "9489cd8d-5aee-11ef-a33d-0fffc9531d8a"
    }, {
      "id": "a3450326-5aee-11ef-adc6-7721f2b0e972",
      "name": "共 3 笔订单",
      "componentName": "Text",
      "props": {
        "style": {
          "color": "rgba(0,0,0,0.85)",
          "fontFamily": "PingFangSC-Medium",
          "fontSize": "34px",
          "fontWeight": 500,
          "lineHeight": "42px",
          "marginLeft": "1px",
          "alignSelf": "center",
          "whiteSpace": "nowrap"
        },
        "text": "笔订单",
        "lines": 1,
        "className": "caption-1"
      },
      "rect": {
        "x": 102,
        "y": 204,
        "width": 102,
        "height": 42,
        "z": 43
      },
      "smart": {
        "layerProtocol": {}
      },
      "selfId": "9489cd8e-5aee-11ef-a33d-0fffc9531d8a"
    }],
    "selfId": "7CA70BA7-2A78-486E-AE42-666191D8387E"
  }, {
    "id": "775B4B55-0075-F5A3-7F38-2268EEA9AD87",
    "name": "DividerRowGroup",
    "componentName": "Div",
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignSelf": "center",
        "width": "750px",
        "padding": "24px 12px 18px"
      },
      "className": "container-2"
    },
    "rect": {
      "x": 0,
      "y": 274,
      "width": 750,
      "height": 1350,
      "z": 2
    },
    "smart": {
      "layerProtocol": {}
    },
    "children": [{
      "id": "a3459f66-5aee-11ef-adc6-7721f2b0e972",
      "name": "形状结合",
      "componentName": "Div",
      "props": {
        "style": {
          "width": "702px",
          "height": "362px",
          "display": "flex",
          "flexDirection": "column",
          "justifyContent": "flex-start",
          "alignSelf": "center",
          "padding": "24px 12px 0",
          "backgroundImage": "url(https://static.imgcook.com/img/test/9d8a56605aee11efa674c13ff2e7205d.png)",
          "backgroundRepeat": "no-repeat",
          "backgroundPosition": "0px 0px",
          "backgroundSize": "100% 100%",
          "backgroundOrigin": "padding-box"
        },
        "src": "https://static.imgcook.com/img/test/9d8a56605aee11efa674c13ff2e7205d.png",
        "className": "body-1"
      },
      "rect": {
        "x": 24,
        "y": 298,
        "width": 702,
        "height": 362,
        "z": 2
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "867781CE-DC8C-D998-8ADA-CE5FF7A47A5F",
        "name": "RepeatingUnitGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "654px"
          },
          "className": "group-2"
        },
        "rect": {
          "x": 48,
          "y": 322,
          "width": 654,
          "height": 98,
          "z": 21.5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3452a39-5aee-11ef-adc6-7721f2b0e972",
          "name": "2020-2021学费备份",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(255,255,255,1)",
              "fontFamily": "PingFangSC-Medium",
              "fontSize": "34px",
              "fontWeight": 500,
              "lineHeight": "38px",
              "alignSelf": "flex-start",
              "maxWidth": "654px",
              "overflow": "hidden",
              "whiteSpace": "nowrap",
              "textOverflow": "ellipsis"
            },
            "text": "2020-2021学费",
            "lines": 1,
            "className": "title-1"
          },
          "rect": {
            "x": 48,
            "y": 322,
            "width": 245,
            "height": 38,
            "z": 31
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd83-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "5F026312-29AE-3716-99B7-6F9C87850B05",
          "name": "StrictAlignGroup",
          "componentName": "Div",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "marginTop": "24px",
              "justifyContent": "flex-start",
              "alignSelf": "center",
              "width": "654px"
            },
            "className": "view-1"
          },
          "rect": {
            "x": 48,
            "y": 384,
            "width": 654,
            "height": 36,
            "z": 21.75
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3455148-5aee-11ef-adc6-7721f2b0e972",
            "name": "学生姓名",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "学生姓名",
              "lines": 1,
              "className": "title-2"
            },
            "rect": {
              "x": 48,
              "y": 384,
              "width": 112,
              "height": 36,
              "z": 22
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd7a-5aee-11ef-a33d-0fffc9531d8a"
          }, {
            "id": "a3452a36-5aee-11ef-adc6-7721f2b0e972",
            "name": "Decaf",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "marginLeft": "20px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "Decaf",
              "lines": 1,
              "className": "decaf"
            },
            "rect": {
              "x": 180,
              "y": 384,
              "width": 76,
              "height": 36,
              "z": 34
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd86-5aee-11ef-a33d-0fffc9531d8a"
          }]
        }]
      }, {
        "id": "FB179A74-8A7F-B779-4934-BCD068BE1CF6",
        "name": "RepeatingUnitGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "column",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "654px"
          },
          "className": "group-3"
        },
        "rect": {
          "x": 48,
          "y": 444,
          "width": 654,
          "height": 96,
          "z": 12.5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "FFCDEC56-ED2F-7D8D-8D1A-3A2EC365AC79",
          "name": "StrictAlignGroup",
          "componentName": "Div",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "alignSelf": "center",
              "width": "654px"
            },
            "className": "view-2"
          },
          "rect": {
            "x": 48,
            "y": 444,
            "width": 654,
            "height": 36,
            "z": 12.75
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3457857-5aee-11ef-adc6-7721f2b0e972",
            "name": "缴费信息",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "缴费信息",
              "lines": 1,
              "className": "caption-2"
            },
            "rect": {
              "x": 48,
              "y": 444,
              "width": 112,
              "height": 36,
              "z": 13
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd71-5aee-11ef-a33d-0fffc9531d8a"
          }, {
            "id": "a3455145-5aee-11ef-adc6-7721f2b0e972",
            "name": "2020-2021学费",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "marginLeft": "20px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "2020-2021学费",
              "lines": 1,
              "className": "caption-3"
            },
            "rect": {
              "x": 180,
              "y": 444,
              "width": 201,
              "height": 36,
              "z": 25
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd7d-5aee-11ef-a33d-0fffc9531d8a"
          }]
        }, {
          "id": "E99893CA-E56D-60A8-A72B-B172C49DA0CC",
          "name": "StrictAlignGroup",
          "componentName": "Div",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "marginTop": "24px",
              "justifyContent": "flex-start",
              "alignSelf": "center",
              "width": "654px"
            },
            "className": "view-3"
          },
          "rect": {
            "x": 48,
            "y": 504,
            "width": 654,
            "height": 36,
            "z": 15.5
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3457854-5aee-11ef-adc6-7721f2b0e972",
            "name": "订单状态",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "订单状态",
              "lines": 1,
              "className": "title-3"
            },
            "rect": {
              "x": 48,
              "y": 504,
              "width": 112,
              "height": 36,
              "z": 16
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd74-5aee-11ef-a33d-0fffc9531d8a"
          }, {
            "id": "a3455142-5aee-11ef-adc6-7721f2b0e972",
            "name": "待支付",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "marginLeft": "20px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "待支付",
              "lines": 1,
              "className": "title-4"
            },
            "rect": {
              "x": 180,
              "y": 504,
              "width": 84,
              "height": 36,
              "z": 28
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd80-5aee-11ef-a33d-0fffc9531d8a"
          }]
        }]
      }, {
        "id": "a3448df3-5aee-11ef-adc6-7721f2b0e972",
        "name": "路径 2",
        "componentName": "Div",
        "props": {
          "style": {
            "marginTop": "24px",
            "alignSelf": "center",
            "width": "654px",
            "height": "1px",
            "borderTop": "1px solid rgba(255,255,255,1)"
          },
          "className": "empty"
        },
        "rect": {
          "x": 48,
          "y": 564,
          "width": 654,
          "height": 1,
          "z": 60
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "CBD83955-71F4-4183-97E9-74F088E3119A"
      }, {
        "id": "E45148CE-16B6-3611-8394-4D9A618115F0",
        "name": "DividerRowGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "alignSelf": "center",
            "width": "654px",
            "padding": "23px 0 24px"
          },
          "className": "group-4"
        },
        "rect": {
          "x": 48,
          "y": 565,
          "width": 654,
          "height": 95,
          "z": 2.5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "355459F2-99BF-CC2F-61CB-C6382C7A922F",
          "name": "GapColGroup",
          "componentName": "Div",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "space-between",
              "alignSelf": "center",
              "height": "48px",
              "width": "269px",
              "padding": "5px 0"
            },
            "className": "view-4"
          },
          "rect": {
            "x": 48,
            "y": 588,
            "width": 269,
            "height": 48,
            "z": 18.5
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3457851-5aee-11ef-adc6-7721f2b0e972",
            "name": "待支付金额:",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "36px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "待支付金额:",
              "lines": 1,
              "className": "caption-4"
            },
            "rect": {
              "x": 48,
              "y": 594,
              "width": 147,
              "height": 36,
              "z": 19
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd77-5aee-11ef-a33d-0fffc9531d8a"
          }, {
            "id": "a3452a33-5aee-11ef-adc6-7721f2b0e972",
            "name": "2000 元",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Medium",
                "fontSize": "30px",
                "fontWeight": 500,
                "lineHeight": "38px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "2000 元",
              "lines": 1,
              "className": "time-1"
            },
            "rect": {
              "x": 206,
              "y": 593,
              "width": 111,
              "height": 38,
              "z": 37
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd89-5aee-11ef-a33d-0fffc9531d8a"
          }]
        }, {
          "id": "a3459f65-5aee-11ef-adc6-7721f2b0e972",
          "name": "矩形",
          "componentName": "Div",
          "props": {
            "style": {
              "backgroundColor": "rgba(255,152,18,1)",
              "display": "flex",
              "flexDirection": "row",
              "marginRight": "1px",
              "justifyContent": "center",
              "alignSelf": "center",
              "width": "144px",
              "padding": "7px 12px",
              "borderRadius": "6px"
            },
            "className": "view-5"
          },
          "rect": {
            "x": 557,
            "y": 588,
            "width": 144,
            "height": 48,
            "z": 3
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3448df5-5aee-11ef-adc6-7721f2b0e972",
            "name": "去支付",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "28px",
                "fontWeight": 400,
                "lineHeight": "34px",
                "alignSelf": "center",
                "whiteSpace": "nowrap"
              },
              "text": "去支付",
              "lines": 1,
              "className": "caption-5"
            },
            "rect": {
              "x": 577,
              "y": 595,
              "width": 84,
              "height": 34,
              "z": 58
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd91-5aee-11ef-a33d-0fffc9531d8a"
          }, {
            "id": "a3448df4-5aee-11ef-adc6-7721f2b0e972",
            "name": "路径",
            "componentName": "Image",
            "props": {
              "style": {
                "width": "12px",
                "height": "20px",
                "marginLeft": "8px",
                "alignSelf": "center"
              },
              "src": "https://static.imgcook.com/img/test/a22959f05aee11efa2f96be4e27ebafd.png",
              "className": "icon-right"
            },
            "rect": {
              "x": 669,
              "y": 602,
              "width": 12,
              "height": 20,
              "z": 59
            },
            "smart": {
              "layerProtocol": {
                "field": {
                  "type": "right"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["right"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.9982193112373352,
                  "isConfident": true,
                  "label": "right",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "B57FDDC8-1910-4B8E-A938-9AEA0E147028"
          }],
          "selfId": "E0B89231-1CB5-44F0-A85E-A12DDBAE8DF9"
        }]
      }],
      "selfId": "9F5E2965-B74F-4FC5-8C26-80E313E98A26"
    }, {
      "id": "a3459f64-5aee-11ef-adc6-7721f2b0e972",
      "name": "蒙版",
      "componentName": "Div",
      "props": {
        "style": {
          "width": "702px",
          "height": "352px",
          "display": "flex",
          "flexDirection": "column",
          "marginTop": "24px",
          "justifyContent": "flex-start",
          "alignSelf": "center",
          "position": "relative",
          "padding": "24px 12px",
          "backgroundImage": "url(https://static.imgcook.com/img/test/9dddcd905aee11efb7870f01a7076007.png)",
          "backgroundRepeat": "no-repeat",
          "backgroundPosition": "0px 0px",
          "backgroundSize": "100% 100%",
          "backgroundOrigin": "padding-box"
        },
        "src": "https://static.imgcook.com/img/test/9dddcd905aee11efb7870f01a7076007.png",
        "className": "main"
      },
      "rect": {
        "x": 24,
        "y": 684,
        "width": 702,
        "height": 352,
        "z": 4
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "a3452a38-5aee-11ef-adc6-7721f2b0e972",
        "name": "2020-2021学费备份 5",
        "componentName": "Text",
        "props": {
          "style": {
            "color": "rgba(0,0,0,0.85)",
            "fontFamily": "PingFangSC-Medium",
            "fontSize": "34px",
            "fontWeight": 500,
            "lineHeight": "38px",
            "alignSelf": "flex-start",
            "marginLeft": "12px",
            "maxWidth": "654px",
            "overflow": "hidden",
            "whiteSpace": "nowrap",
            "textOverflow": "ellipsis"
          },
          "text": "2020-2021学费",
          "lines": 1,
          "className": "title-5"
        },
        "rect": {
          "x": 48,
          "y": 708,
          "width": 245,
          "height": 38,
          "z": 32
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "9489cd84-5aee-11ef-a33d-0fffc9531d8a"
      }, {
        "id": "a3459f63-5aee-11ef-adc6-7721f2b0e972",
        "name": "路径 3",
        "componentName": "Div",
        "props": {
          "style": {
            "width": "138px",
            "height": "50px",
            "position": "absolute",
            "right": "0px",
            "top": "0px",
            "backgroundImage": "url(https://static.imgcook.com/img/test/9e3fc3b05aee11ef8ea23170a0baccab.png)",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "0px 0px",
            "backgroundSize": "100% 100%",
            "backgroundOrigin": "padding-box"
          },
          "src": "https://static.imgcook.com/img/test/9e3fc3b05aee11ef8ea23170a0baccab.png",
          "className": "group-5"
        },
        "rect": {
          "x": 588,
          "y": 684,
          "width": 138,
          "height": 50,
          "z": 5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3459f62-5aee-11ef-adc6-7721f2b0e972",
          "name": "路径 3备份",
          "componentName": "Div",
          "props": {
            "style": {
              "width": "138px",
              "height": "45px",
              "backgroundImage": "url(https://static.imgcook.com/img/test/9eee2c205aee11ef944eff6ae583fb43.png),url(https://static.imgcook.com/img/test/9e8ece105aee11efa2f96be4e27ebafd.png)",
              "backgroundRepeat": "no-repeat,no-repeat",
              "backgroundPosition": "118px 7px,0px 0px",
              "backgroundSize": "10px 10px,100% 100%",
              "position": "absolute",
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "left": "50%",
              "top": "0px",
              "transform": "translateX(-50%)",
              "padding": "10.5px 12px",
              "backgroundOrigin": "padding-box"
            },
            "src": "https://static.imgcook.com/img/test/9e8ece105aee11efa2f96be4e27ebafd.png",
            "className": "label-wrapper"
          },
          "rect": {
            "x": 588,
            "y": 684,
            "width": 138,
            "height": 45,
            "z": 6
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3459f60-5aee-11ef-adc6-7721f2b0e972",
            "name": "已完成",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "24px",
                "fontWeight": 400,
                "letterSpacing": "1.714285714285714px",
                "lineHeight": "24px",
                "marginLeft": "31px",
                "alignSelf": "flex-start",
                "whiteSpace": "nowrap"
              },
              "text": "已完成",
              "lines": 1,
              "className": "label"
            },
            "rect": {
              "x": 631,
              "y": 694.5,
              "width": 75,
              "height": 24,
              "z": 8
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd70-5aee-11ef-a33d-0fffc9531d8a"
          }],
          "selfId": "8B5FAB94-5DB7-4329-B8E5-DE93B8604BBA"
        }],
        "selfId": "3BDAFFEA-AEC7-4360-978D-7070B314F247"
      }, {
        "id": "D812D01B-A956-08DF-D940-D8D2390C2B48",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-item0"
        },
        "rect": {
          "x": 36,
          "y": 770,
          "width": 678,
          "height": 36,
          "z": 22.5
        },
        "smart": {
          "layerProtocol": {
            "repeat": {
              "type": "repeat",
              "repeatId": "1723716648947",
              "repeatIndex": "0"
            }
          }
        },
        "children": [{
          "id": "a3455147-5aee-11ef-adc6-7721f2b0e972",
          "name": "学生姓名备份 2",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "学生姓名",
            "lines": 1,
            "className": "title-6"
          },
          "rect": {
            "x": 48,
            "y": 770,
            "width": 112,
            "height": 36,
            "z": 23
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd7b-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3452a35-5aee-11ef-adc6-7721f2b0e972",
          "name": "Decaf备份 2",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "20px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "Decaf",
            "lines": 1,
            "className": "decaf-1"
          },
          "rect": {
            "x": 180,
            "y": 770,
            "width": 76,
            "height": 36,
            "z": 35
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd87-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }, {
        "id": "B153CFEA-0E54-FC6E-7DF0-5EB531781A7A",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-item1"
        },
        "rect": {
          "x": 36,
          "y": 830,
          "width": 678,
          "height": 36,
          "z": 13.5
        },
        "smart": {
          "layerProtocol": {
            "repeat": {
              "type": "repeat",
              "repeatId": "1723716648947",
              "repeatIndex": "1"
            }
          }
        },
        "children": [{
          "id": "a3457856-5aee-11ef-adc6-7721f2b0e972",
          "name": "缴费信息备份 2",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "缴费信息",
            "lines": 1,
            "className": "caption-6"
          },
          "rect": {
            "x": 48,
            "y": 830,
            "width": 112,
            "height": 36,
            "z": 14
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd72-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3455144-5aee-11ef-adc6-7721f2b0e972",
          "name": "2020-2021学费备份 4",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "20px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "2020-2021学费",
            "lines": 1,
            "className": "title-7"
          },
          "rect": {
            "x": 180,
            "y": 830,
            "width": 201,
            "height": 36,
            "z": 26
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd7e-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }, {
        "id": "58DC6BCB-CA14-042B-AB01-96560D86B52D",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-item2"
        },
        "rect": {
          "x": 36,
          "y": 890,
          "width": 678,
          "height": 36,
          "z": 16.5
        },
        "smart": {
          "layerProtocol": {
            "repeat": {
              "type": "repeat",
              "repeatId": "1723716648947",
              "repeatIndex": "2"
            }
          }
        },
        "children": [{
          "id": "a3457853-5aee-11ef-adc6-7721f2b0e972",
          "name": "订单状态备份 2",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "订单状态",
            "lines": 1,
            "className": "title-8"
          },
          "rect": {
            "x": 48,
            "y": 890,
            "width": 112,
            "height": 36,
            "z": 17
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd75-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3455141-5aee-11ef-adc6-7721f2b0e972",
          "name": "已完成",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "20px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "已完成",
            "lines": 1,
            "className": "title-9"
          },
          "rect": {
            "x": 180,
            "y": 890,
            "width": 84,
            "height": 36,
            "z": 29
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd81-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }, {
        "id": "a3448df0-5aee-11ef-adc6-7721f2b0e972",
        "name": "路径 2备份",
        "componentName": "Div",
        "props": {
          "style": {
            "marginTop": "24px",
            "alignSelf": "center",
            "width": "654px",
            "height": "1px",
            "borderTop": "1px solid rgba(0,0,0,0.08)"
          },
          "className": "empty-1"
        },
        "rect": {
          "x": 48,
          "y": 950,
          "width": 654,
          "height": 1,
          "z": 63
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "A257D7D3-2A9D-433D-918D-72B755CE16E0"
      }, {
        "id": "BE92B2AB-3221-B21D-6804-72E590C8C548",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "23px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-6"
        },
        "rect": {
          "x": 36,
          "y": 974,
          "width": 678,
          "height": 38,
          "z": 19.5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3457850-5aee-11ef-adc6-7721f2b0e972",
          "name": "已支付金额:",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "已支付金额:",
            "lines": 1,
            "className": "caption-7"
          },
          "rect": {
            "x": 48,
            "y": 975,
            "width": 147,
            "height": 36,
            "z": 20
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd78-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3452a32-5aee-11ef-adc6-7721f2b0e972",
          "name": "2000 元备份",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "30px",
              "fontWeight": 400,
              "lineHeight": "38px",
              "marginLeft": "11px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "2000 元",
            "lines": 1,
            "className": "clock"
          },
          "rect": {
            "x": 206,
            "y": 974,
            "width": 111,
            "height": 38,
            "z": 38
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd8a-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }],
      "selfId": "5C6CEB2B-204D-417B-A81A-D308E3A74557"
    }, {
      "id": "a345785b-5aee-11ef-adc6-7721f2b0e972",
      "name": "蒙版",
      "componentName": "Div",
      "props": {
        "style": {
          "width": "702px",
          "height": "352px",
          "display": "flex",
          "flexDirection": "column",
          "marginTop": "24px",
          "justifyContent": "flex-start",
          "alignSelf": "center",
          "position": "relative",
          "padding": "24px 12px",
          "backgroundImage": "url(https://static.imgcook.com/img/test/9f43c6305aee11ef88ef7da097553114.png)",
          "backgroundRepeat": "no-repeat",
          "backgroundPosition": "0px 0px",
          "backgroundSize": "100% 100%",
          "backgroundOrigin": "padding-box"
        },
        "src": "https://static.imgcook.com/img/test/9f43c6305aee11ef88ef7da097553114.png",
        "className": "submain"
      },
      "rect": {
        "x": 24,
        "y": 1060,
        "width": 702,
        "height": 352,
        "z": 9
      },
      "smart": {
        "layerProtocol": {}
      },
      "children": [{
        "id": "a3452a37-5aee-11ef-adc6-7721f2b0e972",
        "name": "2020-2021学费备份 7",
        "componentName": "Text",
        "props": {
          "style": {
            "color": "rgba(0,0,0,0.85)",
            "fontFamily": "PingFangSC-Medium",
            "fontSize": "34px",
            "fontWeight": 500,
            "lineHeight": "38px",
            "alignSelf": "flex-start",
            "marginLeft": "12px",
            "maxWidth": "654px",
            "overflow": "hidden",
            "whiteSpace": "nowrap",
            "textOverflow": "ellipsis"
          },
          "text": "2020-2021学费",
          "lines": 1,
          "className": "caption-8"
        },
        "rect": {
          "x": 48,
          "y": 1084,
          "width": 245,
          "height": 38,
          "z": 33
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "9489cd85-5aee-11ef-a33d-0fffc9531d8a"
      }, {
        "id": "a345785a-5aee-11ef-adc6-7721f2b0e972",
        "name": "路径 3",
        "componentName": "Div",
        "props": {
          "style": {
            "width": "138px",
            "height": "50px",
            "position": "absolute",
            "right": "0px",
            "top": "1px",
            "backgroundImage": "url(https://static.imgcook.com/img/test/9f890c905aee11efa1984d66ef92302c.png)",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "0px 0px",
            "backgroundSize": "100% 100%",
            "backgroundOrigin": "padding-box"
          },
          "src": "https://static.imgcook.com/img/test/9f890c905aee11efa1984d66ef92302c.png",
          "className": "group-7"
        },
        "rect": {
          "x": 588,
          "y": 1061,
          "width": 138,
          "height": 50,
          "z": 10
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3457859-5aee-11ef-adc6-7721f2b0e972",
          "name": "路径 3备份",
          "componentName": "Div",
          "props": {
            "style": {
              "width": "138px",
              "height": "45px",
              "position": "absolute",
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "flex-start",
              "left": "50%",
              "top": "0px",
              "transform": "translateX(-50%)",
              "padding": "9.5px 12px 11.5px",
              "backgroundImage": "url(https://static.imgcook.com/img/test/9fe891b05aee11efb09b59dd896f5110.png)",
              "backgroundRepeat": "no-repeat",
              "backgroundPosition": "0px 0px",
              "backgroundSize": "100% 100%",
              "backgroundOrigin": "padding-box"
            },
            "src": "https://static.imgcook.com/img/test/9fe891b05aee11efb09b59dd896f5110.png",
            "className": "view-6"
          },
          "rect": {
            "x": 588,
            "y": 1061,
            "width": 138,
            "height": 45,
            "z": 11
          },
          "smart": {
            "layerProtocol": {}
          },
          "children": [{
            "id": "a3448df1-5aee-11ef-adc6-7721f2b0e972",
            "name": "椭圆形备份",
            "componentName": "Image",
            "props": {
              "style": {
                "width": "8px",
                "height": "7.5px",
                "position": "absolute",
                "right": "10px",
                "top": "2px"
              },
              "src": "https://static.imgcook.com/img/test/a26578905aee11ef944eff6ae583fb43.png",
              "className": "icon-circle"
            },
            "rect": {
              "x": 708,
              "y": 1063,
              "width": 8,
              "height": 7.5,
              "z": 62
            },
            "smart": {
              "layerProtocol": {
                "field": {
                  "type": "circle"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["circle"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.9627563953399658,
                  "isConfident": true,
                  "label": "circle",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "E8DEB8D4-12E2-4BFB-B40B-EB89FE7AB8DD"
          }, {
            "id": "a3448df2-5aee-11ef-adc6-7721f2b0e972",
            "name": "已失效",
            "componentName": "Text",
            "props": {
              "style": {
                "color": "rgba(255,255,255,1)",
                "fontFamily": "PingFangSC-Regular",
                "fontSize": "24px",
                "fontWeight": 400,
                "letterSpacing": "1.714285714285714px",
                "lineHeight": "24px",
                "marginLeft": "31px",
                "alignSelf": "flex-start",
                "whiteSpace": "nowrap"
              },
              "text": "已失效",
              "lines": 1,
              "className": "tag"
            },
            "rect": {
              "x": 631,
              "y": 1070.5,
              "width": 77,
              "height": 24,
              "z": 61
            },
            "smart": {
              "layerProtocol": {}
            },
            "selfId": "9489cd92-5aee-11ef-a33d-0fffc9531d8a"
          }],
          "selfId": "EB452305-2B05-45D6-9D9D-DC215D4993FE"
        }],
        "selfId": "1EFA3680-33FD-4F14-A614-138E4E537B6D"
      }, {
        "id": "FEA7070D-FE25-B5A7-91F0-A31E69E6BD90",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-item0-1"
        },
        "rect": {
          "x": 36,
          "y": 1146,
          "width": 678,
          "height": 36,
          "z": 23.5
        },
        "smart": {
          "layerProtocol": {
            "repeat": {
              "type": "repeat",
              "repeatId": "1723716648681",
              "repeatIndex": "0"
            }
          }
        },
        "children": [{
          "id": "a3455146-5aee-11ef-adc6-7721f2b0e972",
          "name": "学生姓名备份 3",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "学生姓名",
            "lines": 1,
            "className": "title-10"
          },
          "rect": {
            "x": 48,
            "y": 1146,
            "width": 112,
            "height": 36,
            "z": 24
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd7c-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3452a34-5aee-11ef-adc6-7721f2b0e972",
          "name": "Decaf备份 3",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "20px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "Decaf",
            "lines": 1,
            "className": "decaf-2"
          },
          "rect": {
            "x": 180,
            "y": 1146,
            "width": 76,
            "height": 36,
            "z": 36
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd88-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }, {
        "id": "ABEA5A24-9DEB-C120-DFA9-D53B0F48031C",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-item1-1"
        },
        "rect": {
          "x": 36,
          "y": 1206,
          "width": 678,
          "height": 36,
          "z": 14.5
        },
        "smart": {
          "layerProtocol": {
            "repeat": {
              "type": "repeat",
              "repeatId": "1723716648681",
              "repeatIndex": "1"
            }
          }
        },
        "children": [{
          "id": "a3457855-5aee-11ef-adc6-7721f2b0e972",
          "name": "缴费信息备份 3",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "缴费信息",
            "lines": 1,
            "className": "caption-9"
          },
          "rect": {
            "x": 48,
            "y": 1206,
            "width": 112,
            "height": 36,
            "z": 15
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd73-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3455143-5aee-11ef-adc6-7721f2b0e972",
          "name": "2020-2021学费备份 6",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "20px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "2020-2021学费",
            "lines": 1,
            "className": "caption-10"
          },
          "rect": {
            "x": 180,
            "y": 1206,
            "width": 201,
            "height": 36,
            "z": 27
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd7f-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }, {
        "id": "EA2E2328-9534-9150-FB4E-C0FB405BD761",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "24px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-item2-1"
        },
        "rect": {
          "x": 36,
          "y": 1266,
          "width": 678,
          "height": 36,
          "z": 17.5
        },
        "smart": {
          "layerProtocol": {
            "repeat": {
              "type": "repeat",
              "repeatId": "1723716648681",
              "repeatIndex": "2"
            }
          }
        },
        "children": [{
          "id": "a3457852-5aee-11ef-adc6-7721f2b0e972",
          "name": "订单状态备份 3",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "订单状态",
            "lines": 1,
            "className": "title-11"
          },
          "rect": {
            "x": 48,
            "y": 1266,
            "width": 112,
            "height": 36,
            "z": 18
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd76-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3455140-5aee-11ef-adc6-7721f2b0e972",
          "name": "已失效",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "20px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "已失效",
            "lines": 1,
            "className": "title-12"
          },
          "rect": {
            "x": 180,
            "y": 1266,
            "width": 84,
            "height": 36,
            "z": 30
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd82-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }, {
        "id": "a34466e1-5aee-11ef-adc6-7721f2b0e972",
        "name": "路径 2备份 2",
        "componentName": "Div",
        "props": {
          "style": {
            "marginTop": "24px",
            "alignSelf": "center",
            "width": "654px",
            "height": "1px",
            "borderTop": "1px solid rgba(0,0,0,0.08)"
          },
          "className": "empty-2"
        },
        "rect": {
          "x": 48,
          "y": 1326,
          "width": 654,
          "height": 1,
          "z": 64
        },
        "smart": {
          "layerProtocol": {}
        },
        "selfId": "A19F42C7-D731-420A-AEA5-8B7779D85BA4"
      }, {
        "id": "BF0B15D0-EEBD-BCB1-D544-DCA245BFCD0E",
        "name": "SkeletonGroup",
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginTop": "23px",
            "justifyContent": "flex-start",
            "alignSelf": "center",
            "width": "678px"
          },
          "className": "group-8"
        },
        "rect": {
          "x": 36,
          "y": 1350,
          "width": 678,
          "height": 38,
          "z": 20.5
        },
        "smart": {
          "layerProtocol": {}
        },
        "children": [{
          "id": "a3455149-5aee-11ef-adc6-7721f2b0e972",
          "name": "已支付金额:备份",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.65)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "28px",
              "fontWeight": 400,
              "lineHeight": "36px",
              "marginLeft": "12px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "已支付金额:",
            "lines": 1,
            "className": "caption-11"
          },
          "rect": {
            "x": 48,
            "y": 1351,
            "width": 147,
            "height": 36,
            "z": 21
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd79-5aee-11ef-a33d-0fffc9531d8a"
        }, {
          "id": "a3452a31-5aee-11ef-adc6-7721f2b0e972",
          "name": "2000 元备份 2",
          "componentName": "Text",
          "props": {
            "style": {
              "color": "rgba(0,0,0,0.85)",
              "fontFamily": "PingFangSC-Regular",
              "fontSize": "30px",
              "fontWeight": 400,
              "lineHeight": "38px",
              "marginLeft": "11px",
              "alignSelf": "center",
              "whiteSpace": "nowrap"
            },
            "text": "2000 元",
            "lines": 1,
            "className": "timer"
          },
          "rect": {
            "x": 206,
            "y": 1350,
            "width": 111,
            "height": 38,
            "z": 39
          },
          "smart": {
            "layerProtocol": {}
          },
          "selfId": "9489cd8b-5aee-11ef-a33d-0fffc9531d8a"
        }]
      }],
      "selfId": "D51278B6-FEB1-4790-B526-76CEEC17ACF2"
    }, {
      "id": "a3452a30-5aee-11ef-adc6-7721f2b0e972",
      "name": "Rectangle 24",
      "componentName": "Div",
      "props": {
        "style": {
          "backgroundColor": "rgba(0,0,0,1)",
          "alignSelf": "center",
          "width": "268px",
          "height": "10px",
          "margin": "184px 0 0 2px",
          "borderRadius": "200px"
        },
        "className": "footer"
      },
      "rect": {
        "x": 242,
        "y": 1596,
        "width": 268,
        "height": 10,
        "z": 40
      },
      "smart": {
        "layerProtocol": {}
      },
      "selfId": "942dcac1-5aee-11ef-a33d-0fffc9531d8a"
    }]
  }],
  "taskId": "9489cd93-5aee-11ef-a33d-0fffc9531d8a",
  "artboardImg": "https://static.imgcook.com/img/test/9d1c04305aee11efb90f0db9f3474456.png",
  "pluginVersion": "1.0.12",
  "layerProtocols": [],
  "reference": "fileparse",
  "restore_id": "5b86e77c-d36b-4161-abbd-c1af659f659f",
  "imgcook": {
    "layoutAlgorithmVersion": "0.0.27",
    "restore_id": "5b86e77c-d36b-4161-abbd-c1af659f659f",
    "dslConfig": {
      "cssUnit": "px",
      "dsl": "vue",
      "cssStyle": "camelCase",
      "globalCss": true,
      "jsx": "javascript",
      "outputStyle": "project",
      "dslName": "Vue"
    }
  }
}