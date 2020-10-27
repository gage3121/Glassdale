import { getCriminals, useCriminals} from './CriminalProvider.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals()
        render (criminalArray) 
    })
}