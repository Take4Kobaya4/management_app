import Input from "./Input.jsx";

export default function NewProject (){
    return (
        <div className="w-[35rem] m-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">キャンセル</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">保存</button></li>
            </menu>
            <div>
                <Input label="タイトル"/>
                <Input label="内容" textarea />
                <Input label="期日"/>
            </div>
        </div>
    );
}