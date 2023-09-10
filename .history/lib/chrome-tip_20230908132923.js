import React, { useState } from 'react';
import Warn from './assets/browser-warn.png';
import Chrome from './assets/chrome.png';
import './assets/index.css';

const ChromeTipCom = () => {
    const [showStayCurrentPage, setShowStayCurrentPage] = useState(true);

    const onClick = () => {
        setShowStayCurrentPage(false);
    };

    if (showStayCurrentPage) {
        return (
            <div className="chrome-tip-container">
                <img src={Warn} className="chrome-tip-warn" />
                <div className="chrome-tip-text">推荐使用谷歌chrome浏览器观看直播</div>
                <div className="chrome-hack-text">其它浏览器可能存在兼容性问题</div>
                <div className="chrome-download-text">若未安装请先下载</div>
                <img src={Chrome} className="chrome-icon" />
                <a className="chrome-download-btn" href="https://www.google.cn/chrome/" target="_blank">
                    下载chrome
                </a>
                <div className="chrome-enable-text">适用于 Windows 10/8.1/8</div>
                <div className="chrome-continue-text" onClick={onClick}>{`继续使用该浏览器 >`}</div>
            </div>
        );
    }
    return null;
}

export {ChromeTipCom as default};