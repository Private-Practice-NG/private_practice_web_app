import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

export default function Modal({ darkerBackdrop, blured, sectionLess, dismiss, headerContent, children, footerContent, center, onBackDropClick, makeRelativeHeader }) {
    let style = {};
    let relate = {};
    let bluredStyle = {
        display: 'none'
    };
    bluredStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%'
    };

    if (center !== undefined) {
        style = {
            ...style,
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    if (darkerBackdrop !== undefined) {
        style = {
            ...style,
            background: 'rgba(0, 0, 0, 0.9)'
        }
    }

    if (blured !== undefined) {
        bluredStyle = {
            ...bluredStyle,
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '0',
            opacity: 1,
            filter: 'blur(11rem)',
            height: '100%',
            width: '100%'

        }
    }

    if (makeRelativeHeader !== undefined) {
        relate = {
            position: 'relative',
        }
    }

    // function removeClass(e, classNames){
    //     let classes = e.getAttribute('class');
    //     let newClass = classes.replace(classNames, '');
    //     rootDIV.setAttribute('class', newClass)
    //     console.log(newClass)
    // }

    // function addClass(e, classNames){
    //     let classes = e.getAttribute('class');
    //     let newClass = classes + ' ' + classNames;
    //     e.setAttribute('class', newClass)
    //     console.log(newClass)
    // }

    // function setClass(e, classNames){
    //     e.setAttribute('class', classNames)
    //     console.log(classNames)
    //     console.log(e)
    // }

    function onBackClick() {
        if(onBackDropClick !== undefined){
            onBackDropClick();
        }else{
            return ''
        }
        
        // console.log("back")
    }
    if (dismiss) {
        // removeClass(rootDIV, 'blurEverything')
        // clearFilter(rootDIV)
        return '';
    }

    if (sectionLess !== undefined) {
        return ReactDOM.createPortal(
            <div className="modals-backdrop" style={style}>
                <div className={blured !== undefined ? 'blured' : ''} onClick={onBackClick}></div>
                <div className="modals-content" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    {children}
                </div>
            </div>,
            document.querySelector('#modal-root')
        )
    }

    return ReactDOM.createPortal(
        <div className="modals-backdrop" style={style} >
            <div style={bluredStyle} onClick={onBackClick}></div>
            <div className="modals-header" style={relate}>
                {headerContent}
            </div>
            <div className="modals-content">
                {children}
            </div>
            <div className="modals-footer">
                {footerContent}
            </div>
        </div>,
        document.querySelector('#root-modal')
    )
}
