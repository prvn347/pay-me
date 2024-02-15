export function InputBox ({label,placeholder,onChange}){
    return <div>
        <div className="text-md font-semibold  text-left p-2">{label}</div>
        <input onChange={onChange} required className="  p-2.5 rounded-lg border-2 border-slate-300 w-full  " placeholder={placeholder} />

    </div>
}