
export default function Button(props) {
  return (
    <button onClick={props.onClick} className={props.style}> {props.children} </button>
  )
}