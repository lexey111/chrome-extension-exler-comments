import {ComponentChildren, h} from 'preact'
import {FC} from 'preact/compat'
import {LanguageContext} from './language.context'
import {useLanguage} from '../hooks'

type LanguageAwareComponentProps = {
    children: ComponentChildren
}

export const LanguageAwareWrapper: FC<LanguageAwareComponentProps> = ({children}) => {
    const {activeLanguage} = useLanguage()

    return <LanguageContext.Provider value={activeLanguage}>
        {children}
    </LanguageContext.Provider>
}
