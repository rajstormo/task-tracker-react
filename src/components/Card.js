
export default function Card(props) {
  return (
    <div className="shadow-lg max-w-lg mt-8 mx-auto rounded px-8 py-4 border-2">{props.children}</div>
  )
}