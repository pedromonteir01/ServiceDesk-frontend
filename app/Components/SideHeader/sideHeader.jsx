'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import style from './sideHeader.module.css';

const SideHeader = ({ isOpen }) => {
    const [visible, setVisible] = useState(isOpen);
    const btnRefs = useRef({});
    
    useEffect(() => {
        setVisible(isOpen);
    }, [isOpen])
    
    return (
        <Sidebar
        visible={visible}
        content={({ closeIconRef, hide }) => (
          <div className="border-right-1" style={{ width: '280px', height: '100vh', position: 'absolute', top: 50, left: 0 }}>
            <div className="flex flex-column h-full">
              <div className="flex align-items-center justify-content-between px-4 pt-3">
                <span className="inline-flex align-items-center gap-2">
                  <span className="font-semibold text-2xl text-primary">
                    SENAI
                  </span>
                </span>
              </div>
              <div className="overflow-y-auto">
                <ul className="list-none p-3 m-0">
                  <li>
                    <StyleClass nodeRef={btnRefs.favorites} selector="@next" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                      <div ref={(el) => { btnRefs.favorites = el; }} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                        <span className="font-medium">FAVORITES</span>
                        <i className="pi pi-chevron-down"></i>
                        <Ripple />
                      </div>
                    </StyleClass>
                    <ul className="list-none p-0 m-0 overflow-hidden">
                      <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                          <i className="pi pi-home mr-2"></i>
                          <span className="font-medium">Dashboard</span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                          <i className="pi pi-bookmark mr-2"></i>
                          <span className="font-medium">Bookmarks</span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                          <i className="pi pi-cog mr-2"></i>
                          <span className="font-medium">Settings</span>
                          <Ripple />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                  <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                  <span className="font-bold">Amy Elsner</span>
                </a>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    );
};

export default SideHeader;
