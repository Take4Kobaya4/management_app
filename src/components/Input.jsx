// Inputコンポーネント(textareaが存在している時は、textarea textareaでない時は、inputにて対応。) 
export default function Input({label, textarea, ...props}){
    {/* 入力部分のクラスを3行目に記載（変数classes） textareaとinputのクラスが共通しているため */}
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold text-stone-500">{label}</label>
            {textarea ? 
                <textarea 
                className={classes} {...props}/> 
                : <input className={classes} {...props}/>
            }
        </p>
    );
}