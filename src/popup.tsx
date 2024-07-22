import {h, render} from 'preact'
import 'preact/devtools'
import {PopupPage} from './components/popup/popup.page'

const popupContainer = document.getElementById('popup') as HTMLElement

const Popup = <PopupPage/>
render(Popup, popupContainer)
