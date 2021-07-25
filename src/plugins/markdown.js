import MarkdownIt from "markdown-it"
import MarkdownItContainer from "markdown-it-container"
const markdown = new MarkdownIt({
    html: true,
    breaks: true,
})
markdown.use(...createContainer('header'))
    .use(...createContainer('main'))
    .use(...createContainer('section'))
    .use(...createContainer('footer'))
function createContainer(klass) {
    return [MarkdownItContainer, klass, {
        render(tokens, idx) {
            const token = tokens[idx]
            const info = token.info.trim().slice(klass.length).trim()
            if (token.nesting === 1) {
                return `<div class="custom-${klass}">${info}\n`
            } else {
                return `</div>\n`
            }
        }
    }]
}
export default markdown;