export default function ListItem(){
    return (
        <div className="list__item w-100 p-5 bg-slate-700 flex items-center justify-between rounded-lg">
            <div className="list__content">
                <p className="text-lg font-bold"> clean the house</p>
            </div>
            <div className="list__marker">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
</svg>

            </div>
            
        </div>
    )
}