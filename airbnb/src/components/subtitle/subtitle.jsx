function Subtitle({text, typeColor}) {
  return (<div className={typeColor==="black" ?  "blackSubtitle" : "subtitleFont"}>{text}</div>)
}

export {Subtitle}