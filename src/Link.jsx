import { EVENTS } from "./consts"


export function navigate(href) {
    window.history.pushState({}, "", href)
    const naviationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(naviationEvent)
}


export function Link ({ target, to, ...prop }){
    const handleClick = (event) => {
        
        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === "_self"
        
        if (isMainEvent || isManageableEvent || !isModifiedEvent) {
            event.preventDefault()
            navigate(to) // navegacion SPA
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...prop} ></a>
}
