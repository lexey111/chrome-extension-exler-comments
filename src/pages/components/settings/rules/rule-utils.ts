export const generateUID = () => {
    const _firstPart = (Math.random() * 46656) | 0
    const _secondPart = (Math.random() * 46656) | 0
    const _thirdPart = (Math.random() * 46656) | 0

    const firstPart = ('000' + _firstPart.toString(36)).slice(-3)
    const secondPart = ('000' + _secondPart.toString(36)).slice(-3)
    const thirdPart = ('000' + _thirdPart.toString(36)).slice(-3)

    return firstPart + '-' + secondPart + '-' + thirdPart
}