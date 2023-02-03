
import Button from "./Button"
export default function Header(props) {
  let btnValue = props.showTask ? "Close" : "Add";
  let style = {
    btnGreen: "bg-green-800",
    btnRed: "bg-red-600",
    btn: "outline-none text-white py-[6px] px-6 rounded"
  }
  return (
    <div className="flex items-center py-4">
      <h1 className="flex-1 font-bold uppercase text-2xl"> Task Tracker </h1>
      <Button onClick={props.onAdd} style={`${style.btn} ${props.showTask? style.btnRed: style.btnGreen}`}> {btnValue} </Button>
    </div>

  )
}