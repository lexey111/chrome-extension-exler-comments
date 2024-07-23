import {h, render} from 'preact'
import 'preact/devtools'
import {PopupPage} from './pages/popup.page'

const popupContainer = document.getElementById('popup') as HTMLElement

const Popup = <PopupPage/>
render(Popup, popupContainer)
