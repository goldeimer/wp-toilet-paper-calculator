import Tpc, {
    test,
    test2,
    renderToiletPaperCalculator
} from '@goldeimer/toilet-paper-calculator'

const domReady = (fn) => {
    if (document.readyState !== 'loading') {
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

domReady(() => {
    console.log('test')
    console.log(test)
    console.log('test2')
    console.log(test2)
    console.log('Tpc')
    console.log(Tpc)
    console.log('renderToiletPaperCalculator')
    console.log(renderToiletPaperCalculator)
    renderToiletPaperCalculator()
})
