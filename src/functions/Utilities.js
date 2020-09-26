export function ScrollToRef(ref) {
    window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})
}