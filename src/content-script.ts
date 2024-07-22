import {allTimeStatStorageKey, languageStorageKey, statStorageKey} from './types/consts'

console.log('Loaded!')

async function processPage() {
    console.log('Processing page...')
    const container = document.querySelector('.comments-list')
    if (!container) {
        return
    }

    const comments = container.querySelectorAll('.comments-item')
    if (!comments || comments.length === 0) {
        return
    }
    // .comments-list -> .comments-item-section -> div -> .comments-item | .comments-item-child -> .comments-item
    let counter = 0
    comments.forEach(comment => {
        const from = (comment.querySelector('a.profile-link:not(.reply-to)')?.textContent || '').trim()
        const to = (comment.querySelector('a.reply-to')?.textContent || '').trim()

        console.log(`  ${from} -> ${to}`)

        if (from === 'BorNeo' || to === 'BorNeo') {
            comment.classList.add('hide-comment')
            counter++
        }
    })

    console.log('counter', counter)
    await chrome.storage.sync.set({[statStorageKey]: {processed: counter, total: comments.length}})

    const totalStat = await chrome.storage.sync.get([allTimeStatStorageKey])
    console.log('totalStat', totalStat)
    const newProcessed = (totalStat?.[allTimeStatStorageKey]?.processed ?? 0) + counter
    const newTotal = (totalStat?.[allTimeStatStorageKey]?.total ?? 0) + comments.length
    await chrome.storage.sync.set({[allTimeStatStorageKey]: {processed: newProcessed, total: newTotal}})

    console.log('new totalStat', {[allTimeStatStorageKey]: {processed: newProcessed, total: newTotal}})
}

const processCurrentLanguage = async () => {
    const storedLanguage = await chrome.storage.sync.get([languageStorageKey])
    console.log('Lang', storedLanguage[languageStorageKey])
}

void processCurrentLanguage()
void processPage()

// todo: send badge/counter to background process (icon counter, stat)
// todo: on:off extension (without reloading, use class list)
// todo: different hide modes (blur, collapse)
// todo: and expand mode (on click, on hover)
// todo: content modes (hide full branch, hide only when [from], hide when [to])
// todo: UI
// todo: ru-en