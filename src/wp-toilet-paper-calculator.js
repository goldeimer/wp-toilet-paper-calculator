import {
    renderToiletPaperCalculator
} from '@goldeimer/toilet-paper-calculator'

const domReady = (fn) => {
    if (document.readyState !== 'loading') {
        fn()
    } else {
        document.addEventListener(
            'DOMContentLoaded',
            fn
        )
    }
}

domReady(() => {
    renderToiletPaperCalculator()
})
