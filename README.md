# vite-plugin-react-cursor-pointer
this is an quick increase cursor pointer result vite puligin



<div __cursorPointer>this is example , __cursorPointer attributes</div>

// will be transform to 
<div style='cursor:pointer'></div>

// if you have TS , you need increase statement (this is a react example):

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    __cursorPointer?: boolean
  }
}
