interface btn{
    text:string
}

function Btn(props:btn){
    return(
        <button className="mt-6 text-xl pb-2 border-b-[2px] font-semibold border-gray-800">{props.text}</button>
    )
}
export default Btn;