import Input from "./Input.jsx";

export default function NewProject (){
    return (
        <>
            <menu>
                <li><button>キャンセル</button></li>
                <li><button>保存</button></li>
            </menu>
            <div>
                <Input label="タイトル"/>
                <Input label="内容" textarea />
                <Input label="期日"/>
            </div>
        </>
    );
}