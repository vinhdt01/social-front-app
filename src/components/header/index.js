import React from 'react';
 

const Header = () => {
    return (
        <nav className="w-full flex justify-between items-center h-[80px] ">
        <div className="w-[50px] h-[50px] rounded-full bg-slate-400"></div>
        <div className="w-[120px] h-[40px] flex items-center gap-[15px] justify-around rounded-2xl border-[1px] border-slate-400 py-[5px] px-[10px]">
            <i className="pi pi-bell cursor-pointer" style={{fontSize:"1.3rem"}}></i>
            <i className="pi pi-send cursor-pointer" style={{fontSize:"1.3rem"}}></i>
            <i className="pi pi-ellipsis-v cursor-pointer" style={{fontSize:"1.3rem"}}></i>
        </div>
      </nav>
    );
};

export default Header; 