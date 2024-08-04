export const resetPage = async (comments: NodeListOf<Element>) => {

    if (!comments || comments.length === 0) {
        return
    }

    comments.forEach(comment => {
        // cleanup styles
        comment.classList.remove('hide-comment')
        comment.classList.remove('hide-comment-blur')
        comment.classList.remove('hide-comment-overlay')
        comment.classList.remove('hide-comment-collapse')

        // remove handlers
        const target = comment.querySelector('.hide-comment-content')
        if (target) {
            target.remove()
        }
    })
}