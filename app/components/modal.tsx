

export default function Modal({children,toogle}:{children: React.ReactNode,toogle:boolean}){
    return (
            <div className={`bg-black/70 w-full h-full pb-16 z-10 absolute top-0 left-0 ${toogle ? 'block' : 'hidden'} flex justify-center items-center transition-all ease-in-out delay-1000`}>
                <div className="bg-stone-900 w-[410px] h-[210px] rounded-xl border-gray-600 border-[1px] shadow-md">
                    <div className="h-full">
                        {children}
                    </div>
                </div>
            </div>
    )
}