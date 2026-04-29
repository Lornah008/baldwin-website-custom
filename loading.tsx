export default function Loading() {

    return (

        <div className="animate-pulse">
            <div className="max-w-screen max-h-screen w-full h-screen flex items-center justify-center bg-slate-50/30 rounded-md">

                <p className=" text-slate-700 text-center">Loading... <br /> This will only take a few seconds</p>

                <span className="relative flex items-center justify-center h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>

            </div>
        </div>
        // <div className="border border-slate-300 shadow rounded-md p-4 max-w-screen max-h-screen h-96 w-full mx-auto">
        //     <div className="animate-pulse flex space-x-4">
        //         <div className="flex-1 space-y-6 py-1">
        //             <div className="h-2 bg-slate-500 rounded"></div>
        //             <div className="space-y-3">

        //                 <p className=" text-center">Loading... <br /> This will only take a few seconds</p>

        //             <span className="relative flex h-3 w-3">
        //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        //                 <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        //             </span>

        //                 {/* <div className="grid grid-cols-3 gap-4">
        //                     <div className="h-2 bg-slate-500 rounded col-span-2"></div>
        //                     <div className="h-2 bg-slate-500 rounded col-span-1"></div>
        //                 </div> */}

        //                 {/* <div className="h-2 w-5/6 bg-slate-500 rounded"></div> */}

        //                 {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        //                     <div className="h-40 bg-slate-500 rounded-lg"></div>

        //                     <div className="py-8 space-y-4 md:col-span-2">
        //                         <div className="h-2 w-1/3 bg-slate-500 rounded"></div>
        //                         <div className="h-4 w-5/6 bg-slate-500 rounded-md"></div>
        //                         <div className="h-2 w-2/3 bg-slate-500 rounded"></div>
        //                         <div className="h-2 w-1/4 bg-slate-500 rounded"></div>
        //                     </div>

        //                 </div> */}

        //                 {/* <div className="grid grid-cols-4 gap-4">
        //                     <div className="h-2 bg-slate-500 rounded col-span-1"></div>
        //                     <div className="h-2 bg-slate-500 rounded col-span-2"></div>
        //                 </div> */}

        //             </div>

        //             {/* <div className="grid grid-cols-5 gap-4">
        //                 <div className="h-2 bg-slate-500 rounded col-span-2"></div>
        //                 <div className="h-2 bg-slate-500 rounded col-span-1"></div>
        //             </div>

        //             <div className="grid grid-cols-4 gap-4">
        //                 <div className="h-2 bg-slate-500 rounded col-span-2"></div>
        //                 <div className="h-2 bg-slate-500 rounded col-span-1"></div>
        //             </div> */}

        //         </div>
        //     </div>
        // </div>
    )
}