function vitePluginReactCursorPointerLoader() {
  return {
    name: 'vite-plugin-react-cursor-pointer-loader',
    enforce: 'pre',
    transform(code, id) {

      if (id.includes('.tsx')) {
        let tCode = code
        const diyRegex = /<[^>]*\b__cursorPointer\b[^>]*>/g;
        const cursorPointer = tCode.match(diyRegex);

        if (cursorPointer) {
          const styleRegex = /style=\{\{([^{}]*(?:\{[^{}]*(?:\{[^{}]*(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}[^{}]*)*\}[^{}]*)*\}[^{}]*)*)\}\}/g;

          cursorPointer.forEach(match => {

            const style = match.match(styleRegex)?.[0];

            if (style) {
              const styleValueRegex = /\{([^{}]*(?:\{[^{}]*(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}[^{}]*)*\}[^{}]*)*)\}/
              let tStyle = style.replace(styleValueRegex, (_, value) => ` {{...${value},cursor:'pointer'}}`)
              tCode = tCode.replace(style, tStyle)
            } else {
              tCode = tCode.replace('__cursorPointer', `style={{cursor:'pointer'}}`)
            }
          });
        }
        return tCode
      }
    },

  }

}

module.exports = vitePluginReactCursorPointerLoader