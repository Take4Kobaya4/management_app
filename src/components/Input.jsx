// Inputコンポーネント(textareaが存在している時は、textarea textareaでない時は、inputにて対応。)
export default function Input({label, textarea, ...props}){
    return(
        <p>
            <label>{label}</label>
            {textarea ? <textarea {...props}/> : <input {...props}/>}
        </p>
    );
}