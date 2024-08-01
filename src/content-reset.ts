console.log('> Rest Loaded!')

export const resetPage = async (comments: NodeListOf<Element>) => {
    console.log('Reset page...')
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
            console.log('remove handler')
            target.remove()
        }
    })
}