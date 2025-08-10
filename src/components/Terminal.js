import React from "react";

const TerminalCard = () => {
  return (
    <div className="absolute w-114 h-70 transform aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex flex-col mb-2"> 
        {/* Bottom stand  */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1/2 h-4 bg-gray-700 rounded-b-sm">
        </div> 

        <div className="flex-1 p-2 sm:p-4 bg-gray-700 relative"> <div className="absolute inset-1 sm:inset-2 bg-black rounded border border-gray-700 flex flex-col overflow-hidden"> 
            <div className="bg-gray-800 p-1 flex items-center gap-1"> 
                <div className="flex gap-1 ml-1"> 
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div> 
        
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div> 
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div> 
                </div> 
                <h4 className="text-[10px] sm:text-xs text-gray-400 mx-auto font-code"> Haris@dev-workspace</h4> 
            </div> 
            <div className="p-6 flex-1 font-code text-xs lg:text-sm"> 
                <span className="text-yellow-400">Haris@-workspace</span>
                <pre><span className="text-gray-400">------------------</span></pre>
                <p><span className="text-purple-400">OS</span>: Windows 10 </p>
                <p><span className="text-purple-400">Host</span>: Localhost</p>
                <p><span className="text-purple-400">Kernel</span>: 5.15.0-dev</p>
                <p><span className="text-purple-400">Languages</span>: JavaScript</p>
                <p><span className="text-purple-400">Editor</span>: VSCode </p>
                <p><span className="text-purple-400">Frameworks</span>: React, Next.js, TailwindCss</p>
                    
            </div> </div> 
        </div>                   
    </div>
  );
};

export default TerminalCard;


