
import Link from "next/link";
import { ReactNode} from "react";

type Item = {
    id:number,
    title: string,
}
export default function ItemMenuComponent({items}:{items: Array<Item>}): ReactNode {

    return items.map(item => 
    <li className="my-2 hover:bg-zinc-500 rounded-md py-1 cursor-pointer mb-3 " key={item.id}>
        {item.title}
    </li>
)
}