console.log('>> settings loaded')
import {h, render} from 'preact'
import 'preact/devtools'
import {SettingsPage} from './components/settings/settings.page'

const appContainer = document.getElementById('root') as HTMLElement

const Settings = <SettingsPage/>
render(Settings, appContainer)
