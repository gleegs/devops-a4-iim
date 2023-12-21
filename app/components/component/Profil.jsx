import Image from "next/image";

export default function Profil({ imageUrl, firstName, LastName, setEdit }) {
    const handleClick = () => {
        setEdit(true)
    }

    return (
        <div className="px-12 py-12 flex min-h-full max-w-7xl mx-auto">
            <div className="flex w-full items-start">
                <Image className="rounded-full mr-12" height={200} width={200} src={imageUrl} alt='Image profil'></Image>
                <div className="flex flex-col mt-8">
                    <h1 className="text-black font-bold text-5xl">{firstName}</h1>
                    <h2 className=" text-gray-600 font-bold text-4xl">{LastName}</h2>
                </div>
                <button className=" ml-auto p-4 hover:bg-slate-300 rounded-full mt-8" onClick={handleClick}>
                    <Image height={30} width={30} src={'/edit.svg'} alt='Image profil'></Image>
                </button>
            </div>
        </div>
    )
}
