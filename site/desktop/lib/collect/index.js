'use strict'
import React from 'react'
import marked from 'marked'
import less from 'less'

// 依赖收集
module.exports = function(WrappedComponent) {
  return class DocComponent extends React.Component {
    constructor(props) {
      super(props)
      this.renderer = new marked.Renderer()
      this.renderer.table = (header, body) => {
        return `<table class="md-table"><thead>${header}</thead><tbody>${body}</tbody></table>`
      }
      this.renderer.listitem = function (text) {
        return `<li class="md-listitem">${text}</li>`
      }
      this.renderer.paragraph = function (text) {
        return `<p class="md-paragraph">${text}</p>`
      }
      this.renderer.heading = function (text, level, raw) {
        if (this.options.headerIds) {
          return '<h' + level + ' id="' + text + '" class="md-heading">' + text + '</h' + level + '>\n'
        }
        return '<h' + level + ' class="md-heading" >' + text + '</h' + level + '>\n'
      }
      if (this.props.renderer) this.renderer = this.props.renderer
    }

    render() {
      let markdown = ''
      let demos = []
      // TODO: 国际化
      const lang = window.$lang
      try {
        markdown = require(`@docs/${lang}/${this.props.params.demo}.md`).default
      } catch (e) {
        markdown = require(`@docs/${lang}/quickStart.md`).default
      }

      const html = marked(markdown.replace(/:::\s?(demo|display)\s?([^]+?):::/g, (match, p1, p2, offset) => {
        const id = 'fishd_' + offset.toString(36);
        //分类匹配出less/js/jsx/css
        const descriptionSource = p2.replace(/(`{3})([^`]|[^`][\s\S]*?[^`])\1(?!`)/ig, (markdown) => {
          const [all, type, code] = markdown.match(/```(.*)\n?([^]+)```/);
          switch (type.trim()) {
            case 'js':
            case 'jsx':
              this.jsCode = code;
              break;
            case 'less':
              this.lessCodeSource = marked(all);
              less.render(`
                #${id} {
                  ${code}
                }
              `, (e, compiledCode) => {
                this.lessCode = compiledCode.css;
              });
              break;
            case 'css':
              this.cssCodeSource = marked(all);
              less.render(`
                #${id} {
                  ${code}
                }
              `, (e, compiledCode) => {
                this.cssCode = compiledCode.css;
              });
              break;
            default:
              break;
          }
          return '';
        });
        // replace剩下的是description
        this.description = marked(descriptionSource);
        demos.push({
          id,
          description: this.description,
          jsCode: this.jsCode,
          lessCodeSource: this.lessCodeSource,
          cssCodeSource: this.cssCodeSource,
          lessCode: this.lessCode,
          cssCode: this.cssCode
        })

        return `<div id=${id} class="demo-container"></div>`;
      }), {renderer: this.renderer});

      return <WrappedComponent {...this.props} html={html} demos={demos} />
    }
  }
};
