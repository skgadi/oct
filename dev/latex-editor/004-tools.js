const toolbox = {
  new: {
    html: "<i class='far fa-file'></i>",
    func: function (appHandle) {
      if (confirm("This operation will remove the present text.\nAre you sure you want to proceed?\n\nPress Ok proceed.")) {
        appHandle.text = "";
      }
    }
  },
  openText: {
    html: "<i class='far fa-folder-open'></i>",
    func: function (appHandle) {
      if (confirm("This operation will remove the present text.\nAre you sure you want to proceed?\n\nPress Ok proceed.")) {
        document.getElementById('md-file').value="";
        document.getElementById('md-file').click();
      }
    }
  },
  saveText: {
    html: "<i class='far fa-save'></i>",
    func: function (appHandle) {
      downloadTextAsFile(new Date().toISOString() + "-notes.md", appHandle.text);
    }
  },
  saveHtml: {
    html: "<i class='fas fa-save'></i>",
    func: function (appHandle) {
      downloadTextAsFile(new Date().toISOString() + "-notes.html", appHandle.md.prepareFullHtml("Notes prepared at https://oct.skgadi.com/latex-editor.min.html", appHandle.text));
    }
  },
  print: {
    html: "<i class='fas fa-print'></i>",
    func: function (appHandle) {
      const fullHtmlCode = appHandle.md.prepareFullHtml("Notes prepared at https://oct.skgadi.com/latex-editor.min.html", appHandle.text);
      const newWin = open();
      newWin.document.write(fullHtmlCode);
      newWin.document.close();
    }
  },
  gap0: {
    html: "&nbsp;&nbsp;",
    func: function () {}
  },
  h1: {
    html: "H1",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n# " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1 + 2,
          end: end + 1 + 2
        }
      };
    }
  },
  h2: {
    html: "H2",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n## " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1 + 3,
          end: end + 1 + 3
        }
      };
    }
  },
  h3: {
    html: "H3",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1 + 4,
          end: end + 1 + 4
        }
      };
    }
  },
  h4: {
    html: "H4",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n#### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1 + 5,
          end: end + 1 + 5
        }
      };
    }
  },
  h5: {
    html: "H5",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n##### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1 + 6,
          end: end + 1 + 6
        }
      };
    }
  },
  h6: {
    html: "H6",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n###### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1 + 7,
          end: end + 1 + 7
        }
      };
    }
  },
  b: {
    html: "<b>B</b>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "**" + appHandle.text.slice(start, end) + "**" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 2,
          end: end + 2
        }
      };
    }
  },
  i: {
    html: "<i>I</i>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "*" + appHandle.text.slice(start, end) + "*" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1,
          end: end + 1
        }
      };
    }
  },
  u: {
    html: "<u>U</u>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "__" + appHandle.text.slice(start, end) + "__" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 2,
          end: end + 2
        }
      };
    }
  },
  s: {
    html: "<strike>S</strike>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "~~" + appHandle.text.slice(start, end) + "~~" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 2,
          end: end + 2
        }
      };
    }
  },
  table: {
    html: "<i class='fas fa-table'></i>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\n|.|.|.|\n|:---|---|---:|\n|.|.|.|\n" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 2,
          end: end + 2
        }
      };
    }
  },
  anchor: {
    html: "<i class='fas fa-link'></i>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "[" + appHandle.text.slice(start, end) + "](https://skgadi.com)" + appHandle.text.slice(end);
      return {
        sel: {
          start: end + 3,
          end: end + 21
        }
      };
    }
  },
  img: {
    html: "<i class='fas fa-image'></i>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "![" + appHandle.text.slice(start, end) + "](https://skgadi.com/images/my-logo.png =*x100)" + appHandle.text.slice(end);
      return {
        sel: {
          start: end + 4,
          end: end + 48
        }
      };
    }
  },
  youtube: {
    html: "<i class='fab fa-youtube'></i>",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "[![" + appHandle.text.slice(start, end) + "](https://img.youtube.com/vi/_S3YDKsFmpk/0.jpg =*x200)](https://www.youtube.com/watch?v=_S3YDKsFmpk)" + appHandle.text.slice(end);
      return {
        sel: {
          start: end + 32,
          end: end + 43
        }
      };
    }
  },
  gap1: {
    html: "&nbsp;&nbsp;",
    func: function () {}
  },
  inline: {
    html: "&nbsp;$&nbsp;",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "$" + appHandle.text.slice(start, end) + "$" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 1,
          end: end + 1
        }
      };
    }
  },
  disp: {
    html: "$$",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "$$" + appHandle.text.slice(start, end) + "$$" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 2,
          end: end + 2
        }
      };
    }
  },
  frac: {
    html: "$$\\frac{a}{b}$$",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\\frac{" + appHandle.text.slice(start, end) + "}{}" + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 6,
          end: end + 6
        }
      };
    }
  },
  square: {
    html: "$$x^2$$",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + appHandle.text.slice(start, end) + "^{2}" + appHandle.text.slice(end);
      return {
        sel: {
          start: end + 2,
          end: end + 3
        }
      };
    }
  },
  limit: {
    html: "$$\\lim_{x\\rightarrow \\infty}$$",
    func: function (appHandle, start, end) {
      appHandle.text = appHandle.text.slice(0, start) + "\\lim_{x\\rightarrow \\infty}" + appHandle.text.slice(start, end)  + appHandle.text.slice(end);
      return {
        sel: {
          start: start + 6,
          end: end + 25
        }
      };
    }
  }
};


/*
  
  
  
  {
  html: "<i class='fas fa-eraser fa-fw'></i>",
  func: function (appHandle) {
    appHandle.text = "";
  }
}, {
  html: "H1",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n# " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
    return {sel: {start: end+1+2, end: end+1+2}};
  }
}, {
  html: "H2",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n## " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
    return {sel: {start: end+1+3, end: end+1+3}};
  }
}, {
  html: "H3",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
    return {sel: {start: end+1+4, end: end+1+4}};
  }
}, {
  html: "H4",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n#### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
    return {sel: {start: end+1+5, end: end+1+5}};
  }
}, {
  html: "H5",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n##### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
    return {sel: {start: end+1+6, end: end+1+6}};
  }
}, {
  html: "H6",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n###### " + appHandle.text.slice(start, end) + "\n" + appHandle.text.slice(end);
    return {sel: {start: end+1+7, end: end+1+7}};
  }
}, {
  html: "<b>B</b>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "**" + appHandle.text.slice(start, end)  + "**" + appHandle.text.slice(end);
    return {sel: {start: end+2, end: end+2}};
  }
}, {
  html: "<i>I</i>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "*" + appHandle.text.slice(start, end)  + "*" + appHandle.text.slice(end);
    return {sel: {start: end+1, end: end+1}};
  }
}, {
  html: "<u>U</u>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "__" + appHandle.text.slice(start, end)  + "__" + appHandle.text.slice(end);
    return {sel: {start: end+2, end: end+2}};
  }
}, {
  html: "<strike>S</strike>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "~~" + appHandle.text.slice(start, end)  + "~~" + appHandle.text.slice(end);
    return {sel: {start: end+2, end: end+2}};
  }
}, {
  html: "<i class='fas fa-table'></i>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\n|.|.|.|\n|:---|---|---:|\n|.|.|.|\n" + appHandle.text.slice(end);
    return {sel: {start: end+2, end: end+2}};
  }
}, {
  html: "<i class='fas fa-link'></i>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "[" + appHandle.text.slice(start, end)  + "](https://skgadi.com)" + appHandle.text.slice(end);
    return {sel: {start: end+3, end: end+21}};
  }
}, {
  html: "<i class='fas fa-image'></i>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "![" + appHandle.text.slice(start, end)  + "](https://skgadi.com/images/my-logo.png =*x100)" + appHandle.text.slice(end);
    return {sel: {start: end+4, end: end+48}};
  }
}, {
  html: "<i class='fab fa-youtube'></i>",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "[![" + appHandle.text.slice(start, end)  + "](https://img.youtube.com/vi/_S3YDKsFmpk/0.jpg =*x200)](https://www.youtube.com/watch?v=_S3YDKsFmpk)" + appHandle.text.slice(end);
    return {sel: {start: end+32, end: end+43}};
  }
}, {
  html: "$$\\frac{a}{b}$$",
  func: function (appHandle, start, end) {
    appHandle.text = appHandle.text.slice(0, start) + "\\frac{" + appHandle.text.slice(start, end)  + "}{}" + appHandle.text.slice(end);
    return {sel: {start: end+6, end: end+6}};
  }
}, {
  html: "$$x^2$$",
  func: function (appHandle, start) {
    let insPos = appHandle.text.lastIndexOf("\n", start - 1) + 1;
    appHandle.text = appHandle.text.slice(0, insPos) + "#" + appHandle.text.slice(insPos);
  }
}, {
  html: "$$\\lim_{x\\rightarrow \\infty} \\frac{}{}$$",
  func: function (appHandle, start) {
    let insPos = appHandle.text.lastIndexOf("\n", start - 1) + 1;
    appHandle.text = appHandle.text.slice(0, insPos) + "#" + appHandle.text.slice(insPos);
  }
}
  */